/**
 * Shared Type Definitions for StoreiFly Seed & Catalog Data
 * Aligned with Prisma Database Schema (`stores`, `categories`, `products`, `users`, `orders`)
 */

export interface ProductVariant {
    name: string;
    options: string[];
}

export interface StoreProductSchema {
    name: string;
    description: string;
    price: number;
    compare_at_price: number | null;
    sku: string;
    stock: number;
    images: string[];
    variants: ProductVariant[];
    status: "active" | "draft" | "archived";
    category_name: string;
    category_slug: string;
    sub_category?: string;
    bestseller?: boolean;
}

export interface StoreCategorySchema {
    name: string;
    slug: string;
}

export interface StoreInfoSchema {
    name: string;
    slug: string;
    logo_url: string;
    banner_url: string;
    description: string;
    currency: string;
    status: string;
    shipping_fee: number;
    free_shipping_threshold: number;
    hero_style: string;
    accent_color?: string;
}

export interface StoreMerchantSchema {
    name: string;
    email: string;
    password_plain: string;
}

export interface StoreCustomerSchema {
    name: string;
    email: string;
    password_plain: string;
    phone: string;
    shipping_address: {
        street: string;
        city: string;
        state: string;
        zip: string;
        country: string;
    };
}
