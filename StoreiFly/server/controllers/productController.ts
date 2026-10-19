import { Request, Response } from "express";
import { prisma } from "../config/prisma.js";
import { AuthenticatedRequest } from "../middleware/auth.js";

const getMerchantStore = (merchantId: string) => prisma.stores.findFirst({ where: { merchant_id: merchantId } });

const flattenProduct = (p: any) => {
    const { categories, ...rest } = p;
    return { ...rest, category_name: categories?.name || null, category_slug: categories?.slug || null };
};

export const getProducts = async (req: Request, res: Response): Promise<void> => {
    try {
        const { storeId, storeSlug, categoryId, search, status } = req.query;
        let targetStoreId: number | null = null;

        if (storeSlug) {
            const store = await prisma.stores.findUnique({
                where: { slug: String(storeSlug) },
                select: { id: true },
            });
            if (!store) {
                res.status(404).json({ success: false, message: "Store not found" });
                return;
            }
            targetStoreId = store.id;
        } else if (storeId) {
            targetStoreId = Number(storeId);
        }

        if (!targetStoreId) {
            res.status(400).json({ success: false, message: "storeId or storeSlug is required" });
            return;
        }

        const catId = categoryId ? Number(categoryId) : undefined;
        const statusFilter = status ? String(status) : undefined;
        const searchFilter = search ? String(search).trim() : undefined;

        const productList = await prisma.products.findMany({
            where: {
                store_id: targetStoreId,
                status: statusFilter,
                category_id: catId,
                ...(searchFilter
                    ? {
                          OR: [
                              { name: { contains: searchFilter, mode: "insensitive" } },
                              { description: { contains: searchFilter, mode: "insensitive" } },
                              { sku: { contains: searchFilter, mode: "insensitive" } },
                          ],
                      }
                    : {}),
            },
            include: {
                categories: {
                    select: { name: true, slug: true },
                },
            },
            orderBy: { created_at: "desc" },
        });

        const products = productList.map(flattenProduct);
        res.json({ success: true, products });
    } catch (error: any) {
        console.error("getProducts error:", error);
        res.status(500).json({ success: false, message: error?.message || "Failed to fetch products" });
    }
};

export const getProductById = async (req: Request, res: Response): Promise<void> => {
    try {
        const productId = Number(req.params.id);
        const product = await prisma.products.findUnique({
            where: { id: productId },
            include: {
                categories: {
                    select: { name: true, slug: true },
                },
                stores: {
                    select: {
                        name: true,
                        slug: true,
                        currency: true,
                        shipping_fee: true,
                        free_shipping_threshold: true,
                        status: true,
                    },
                },
            },
        });

        if (!product) {
            res.status(404).json({ success: false, message: "Product not found" });
            return;
        }

        const { categories, stores, ...rest } = product;
        res.json({
            success: true,
            product: {
                ...rest,
                category_name: categories?.name || null,
                category_slug: categories?.slug || null,
                store_name: stores?.name || null,
                store_slug: stores?.slug || null,
                store_currency: stores?.currency || "USD",
                shipping_fee: Number(stores?.shipping_fee || 0),
                free_shipping_threshold: Number(stores?.free_shipping_threshold || 0),
                store_status: stores?.status || "active",
            },
        });
    } catch (error: any) {
        console.error("getProductById error:", error);
        res.status(500).json({ success: false, message: error?.message || "Failed to fetch product" });
    }
};



export const createProduct = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
    try {
        const store = await getMerchantStore(req.user!.id);
        if (!store) {
            res.status(404).json({ success: false, message: "You must create a store before adding products" });
            return;
        }

        const {
            name,
            description,
            price,
            compare_at_price,
            sku,
            stock = 0,
            category_id,
            images = [],
            variants = [],
            status = "active",
        } = req.body;
        if (!name || price === undefined) {
            res.status(400).json({ success: false, message: "Product name and price are required" });
            return;
        }

        const product = await prisma.products.create({
            data: {
                store_id: store.id,
                category_id: category_id ? Number(category_id) : null,
                name: name.trim(),
                description: description || "",
                price: Number(price),
                compare_at_price: compare_at_price ? Number(compare_at_price) : null,
                sku: sku?.trim() || null,
                stock: Number(stock) || 0,
                images: Array.isArray(images) ? images : [],
                variants: Array.isArray(variants) ? variants : [],
                status: status || "active",
            },
        });

        res.status(201).json({ success: true, message: "Product created successfully", product });
    } catch (error: any) {
        console.error("createProduct error:", error);
        res.status(500).json({ success: false, message: error?.message || "Failed to create product" });
    }
};

export const updateProduct = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
    try {
        const store = await getMerchantStore(req.user!.id);
        if (!store) {
            res.status(404).json({ success: false, message: "Store not found" });
            return;
        }

        const { id } = req.params;
        const existing = await prisma.products.findFirst({ where: { id: Number(id), store_id: store.id } });
        if (!existing) {
            res.status(404).json({ success: false, message: "Product not found or access denied" });
            return;
        }

        const { name, description, price, compare_at_price, sku, stock, category_id, images, variants, status } = req.body;

        const updated = await prisma.products.update({
            where: { id: Number(id) },
            data: Object.fromEntries(
                Object.entries({
                    name: name !== undefined ? name.trim() : undefined,
                    description,
                    price: price !== undefined ? Number(price) : undefined,
                    compare_at_price: compare_at_price !== undefined ? (compare_at_price ? Number(compare_at_price) : null) : undefined,
                    sku,
                    stock: stock !== undefined ? Number(stock) : undefined,
                    category_id: category_id !== undefined ? (category_id ? Number(category_id) : null) : undefined,
                    images: images !== undefined ? (Array.isArray(images) ? images : []) : undefined,
                    variants: variants !== undefined ? (Array.isArray(variants) ? variants : []) : undefined,
                    status,
                }).filter(([, v]) => v !== undefined),
            ),
        });

        res.json({ success: true, message: "Product updated successfully", product: updated });
    } catch (error: any) {
        console.error("updateProduct error:", error);
        res.status(500).json({ success: false, message: error?.message || "Failed to update product" });
    }
};

export const deleteProduct = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
    try {
        const store = await getMerchantStore(req.user!.id);
        if (!store) {
            res.status(404).json({ success: false, message: "Store not found" });
            return;
        }

        const deleted = await prisma.products.deleteMany({ where: { id: Number(req.params.id), store_id: store.id } });
        if (deleted.count === 0) {
            res.status(404).json({ success: false, message: "Product not found or access denied" });
            return;
        }

        res.json({ success: true, message: "Product deleted successfully" });
    } catch (error: any) {
        console.error("deleteProduct error:", error);
        res.status(500).json({ success: false, message: error?.message || "Failed to delete product" });
    }
};
