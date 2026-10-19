import crypto from "node:crypto";
import { prisma } from "../config/prisma.js";
import { findNeonUser } from "../services/neonUser.js";

function hashNeonPassword(password: string): string {
    const salt = crypto.randomBytes(16).toString("hex");
    const key = crypto.scryptSync(password.normalize("NFKC"), salt, 64, {
        N: 16384,
        r: 16,
        p: 1,
        maxmem: 128 * 16384 * 16 * 2,
    });
    return `${salt}:${key.toString("hex")}`;
}

async function seedNeonUser(user: { name: string; email: string; role: string; password?: string }): Promise<string> {
    let userId: string;
    const existing = await findNeonUser({ email: user.email });
    if (existing) {
        userId = existing.id;
        await prisma.$executeRaw`
            UPDATE neon_auth.user
            SET role = ${user.role}, "updatedAt" = NOW()
            WHERE id = ${userId}::uuid
        `;
    } else {
        const inserted = await prisma.$queryRaw<Array<{ id: string }>>`
            INSERT INTO neon_auth.user (id, name, email, role, "emailVerified", "createdAt", "updatedAt")
            VALUES (gen_random_uuid(), ${user.name}, ${user.email.toLowerCase()}, ${user.role}, true, NOW(), NOW())
            RETURNING id
        `;
        userId = inserted[0].id;
    }

    if (user.password) {
        const hashedPassword = hashNeonPassword(user.password);
        const existingAccounts = await prisma.$queryRaw<Array<{ id: string }>>`
            SELECT id FROM neon_auth.account 
            WHERE "userId" = ${userId}::uuid AND "providerId" = 'credential' 
            LIMIT 1
        `;

        if (existingAccounts.length > 0) {
            await prisma.$executeRaw`
                UPDATE neon_auth.account
                SET password = ${hashedPassword}, "updatedAt" = NOW()
                WHERE id = ${existingAccounts[0].id}::uuid
            `;
        } else {
            await prisma.$executeRaw`
                INSERT INTO neon_auth.account (id, "userId", "accountId", "providerId", password, "createdAt", "updatedAt")
                VALUES (gen_random_uuid(), ${userId}::uuid, ${userId}, 'credential', ${hashedPassword}, NOW(), NOW())
            `;
        }
    }

    return userId;
}

import type { StoreMerchantSchema, StoreInfoSchema, StoreCategorySchema, StoreCustomerSchema, StoreProductSchema } from "./index.js";
import {
    ARTISAN_MERCHANT,
    ARTISAN_STORE,
    ARTISAN_CATEGORIES,
    ARTISAN_CUSTOMER,
    ARTISAN_PRODUCTS,
    NORDIC_MERCHANT,
    NORDIC_STORE,
    NORDIC_CATEGORIES,
    NORDIC_CUSTOMER,
    NORDIC_PRODUCTS,
    FOREVER_MERCHANT,
    FOREVER_STORE,
    FOREVER_CATEGORIES,
    FOREVER_CUSTOMER,
    FOREVER_PRODUCTS,
} from "./index.js";

interface StoreSeedBundle {
    merchant: StoreMerchantSchema;
    store: StoreInfoSchema;
    categories: StoreCategorySchema[];
    customer: StoreCustomerSchema;
    products: StoreProductSchema[];
    orderNumber: string;
    orderItems: Array<{
        productIndex: number;
        quantity: number;
        variant?: string;
    }>;
    orderTrackingNumber: string | null;
    orderPaymentStatus?: string;
    orderStatus?: string;
}

const DEMO_STORES: StoreSeedBundle[] = [
    {
        merchant: ARTISAN_MERCHANT,
        store: ARTISAN_STORE,
        categories: ARTISAN_CATEGORIES,
        customer: ARTISAN_CUSTOMER,
        products: ARTISAN_PRODUCTS,
        orderNumber: "ORD-ARTISAN-1001",
        orderItems: [
            { productIndex: 0, quantity: 2, variant: "Bag Size: 500g" },
            { productIndex: 1, quantity: 1, variant: "Bag Size: 250g" },
        ],
        orderTrackingNumber: "TRK-ARTISAN-9921",
        orderPaymentStatus: "paid",
        orderStatus: "delivered",
    },
    {
        merchant: NORDIC_MERCHANT,
        store: NORDIC_STORE,
        categories: NORDIC_CATEGORIES,
        customer: NORDIC_CUSTOMER,
        products: NORDIC_PRODUCTS,
        orderNumber: "ORD-NORDIC-5501",
        orderItems: [{ productIndex: 0, quantity: 1, variant: "Color: Sand Dune" }],
        orderTrackingNumber: null,
        orderPaymentStatus: "pending",
        orderStatus: "placed",
    },
    {
        merchant: FOREVER_MERCHANT,
        store: FOREVER_STORE,
        categories: FOREVER_CATEGORIES,
        customer: FOREVER_CUSTOMER,
        products: FOREVER_PRODUCTS,
        orderNumber: "ORD-FOREVER-8001",
        orderItems: [
            { productIndex: 0, quantity: 1, variant: "Size: M" },
            { productIndex: 4, quantity: 1, variant: "Size: L" },
        ],
        orderTrackingNumber: "TRK-FOREVER-7712",
        orderPaymentStatus: "paid",
        orderStatus: "delivered",
    },
];

async function seedStoreBundle(bundle: StoreSeedBundle) {
    const { merchant, store, categories, customer, products, orderNumber, orderItems, orderTrackingNumber } = bundle;

    // 1. Seed or find Merchant
    const merchantId = await seedNeonUser({
        name: merchant.name,
        email: merchant.email,
        role: "merchant",
        password: merchant.password_plain || "merchant123",
    });
    console.log(`✓ Merchant seeded: ${merchant.email}`);

    // 2. Seed or find Store
    let storeRecord = await prisma.stores.findUnique({
        where: { slug: store.slug },
    });

    if (!storeRecord) {
        storeRecord = await prisma.stores.create({
            data: {
                merchant_id: merchantId,
                name: store.name,
                slug: store.slug,
                logo_url: store.logo_url,
                banner_url: store.banner_url,
                description: store.description,
                currency: store.currency,
                status: store.status,
                shipping_fee: store.shipping_fee,
                free_shipping_threshold: store.free_shipping_threshold,
                hero_style: store.hero_style,
                accent_color: store.accent_color || "#059669",
            },
        });
        console.log(`✓ Store '${store.slug}' created`);
    } else {
        console.log(`• Store '${store.slug}' already exists`);
    }

    // 3. Seed Categories
    const categoryMap: Record<string, number> = {};
    for (const cat of categories) {
        let catRecord = await prisma.categories.findFirst({
            where: { store_id: storeRecord.id, slug: cat.slug },
        });
        if (!catRecord) {
            catRecord = await prisma.categories.create({
                data: {
                    store_id: storeRecord.id,
                    name: cat.name,
                    slug: cat.slug,
                },
            });
        }
        categoryMap[cat.slug] = catRecord.id;
        categoryMap[cat.name] = catRecord.id;
    }

    // Default category fallback
    const fallbackCategoryId = Object.values(categoryMap)[0];

    // 4. Seed Products
    const existingCount = await prisma.products.count({
        where: { store_id: storeRecord.id },
    });

    let seededProducts: any[] = [];
    if (existingCount === 0) {
        console.log(`Seeding ${products.length} products for '${store.slug}'...`);
        for (const prod of products) {
            const catId = categoryMap[prod.category_slug] || categoryMap[prod.category_name] || fallbackCategoryId;
            const created = await prisma.products.create({
                data: {
                    store_id: storeRecord.id,
                    category_id: catId,
                    name: prod.name,
                    description: prod.description,
                    price: prod.price,
                    compare_at_price: prod.compare_at_price,
                    sku: prod.sku,
                    stock: prod.stock,
                    images: prod.images,
                    variants: prod.variants as any,
                    status: prod.status,
                },
            });
            seededProducts.push(created);
        }
        console.log(`✓ Seeded ${seededProducts.length} products for '${store.slug}'`);
    } else {
        console.log(`• Store '${store.slug}' already has ${existingCount} products`);
        seededProducts = await prisma.products.findMany({
            where: { store_id: storeRecord.id },
            orderBy: { id: "asc" },
        });
    }

    // 5. Seed Customer
    const customerId = await seedNeonUser({
        name: customer.name,
        email: customer.email,
        role: "customer",
        password: customer.password_plain || "customer123",
    });
    console.log(`✓ Customer seeded: ${customer.email} (for /store/${store.slug})`);

    // 6. Seed Sample Order
    const existingOrder = await prisma.orders.findUnique({
        where: { order_number: orderNumber },
    });

    if (!existingOrder && seededProducts.length > 0) {
        const orderLineItems = orderItems
            .map((oi) => {
                const prod = seededProducts[oi.productIndex] || seededProducts[0];
                if (!prod) return null;
                const imagesArr = (prod.images as string[]) || [];
                return {
                    productId: prod.id,
                    name: prod.name,
                    price: Number(prod.price),
                    quantity: oi.quantity,
                    variant: oi.variant || undefined,
                    image: imagesArr[0] || "",
                };
            })
            .filter(Boolean) as any[];

        if (orderLineItems.length > 0) {
            const subtotal = orderLineItems.reduce((acc, it) => acc + it.price * it.quantity, 0);
            const shippingCost = subtotal >= Number(store.free_shipping_threshold) ? 0 : Number(store.shipping_fee);
            const total = subtotal + shippingCost;

            await prisma.orders.create({
                data: {
                    order_number: orderNumber,
                    store_id: storeRecord.id,
                    customer_id: customerId,
                    customer_name: customer.name,
                    customer_email: customer.email,
                    customer_phone: customer.phone,
                    shipping_address: customer.shipping_address as any,
                    items: orderLineItems as any,
                    subtotal,
                    discount: 0,
                    shipping_cost: shippingCost,
                    total,
                    coupon_code: null,
                    payment_status: bundle.orderPaymentStatus || "paid",
                    payment_method: "cod",
                    order_status: bundle.orderStatus || "delivered",
                    tracking_number: orderTrackingNumber,
                },
            });
            console.log(`✓ Sample order '${orderNumber}' seeded for '${store.slug}'`);
        }
    }
}

export async function seedDemoData() {
    try {
        console.log("Starting database seeding with Prisma...");

        // 1. Seed Platform Super Admin
        await seedNeonUser({
            name: "Platform Admin",
            email: "admin@example.com",
            role: "admin",
            password: "admin123",
        });
        console.log("✓ Platform admin seeded: admin@example.com");

        // 2. Seed All Demo Stores from Modular Data
        for (const bundle of DEMO_STORES) {
            await seedStoreBundle(bundle);
        }

        console.log("==================================================");
        console.log("Database seeded successfully with all credentials!");
        console.log("1. Platform Admin:   admin@example.com    / admin123");
        console.log("2. Artisan Merchant: merchant3@example.com  / merchant123");
        console.log("   Artisan Customer: customer3@example.com   / customer123   (for /store/artisan-roasters)");
        console.log("3. Nordic Merchant:  merchant2@example.com    / merchant123");
        console.log("   Nordic Customer:  customer2@example.com    / customer123   (for /store/nordic-living)");
        console.log("4. Forever Merchant: merchant1@example.com   / merchant123");
        console.log("   Forever Customer: customer1@example.com   / customer123   (for /store/forever)");
        console.log("==================================================");
    } catch (seedErr: any) {
        console.error("Seed error:", seedErr?.message || seedErr);
        throw seedErr;
    } finally {
        await prisma.$disconnect();
    }
}

// Execute immediately if invoked directly
seedDemoData()
    .then(() => {
        process.exit(0);
    })
    .catch(() => {
        process.exit(1);
    });
