import type { StoreProductSchema, StoreInfoSchema, StoreMerchantSchema, StoreCategorySchema, StoreCustomerSchema } from "./types.js";

export const NORDIC_MERCHANT: StoreMerchantSchema = {
    name: "Elin Lindqvist",
    email: "merchant2@example.com",
    password_plain: "merchant123",
};

export const NORDIC_STORE: StoreInfoSchema = {
    name: "Nordic Living",
    slug: "nordic-living",
    logo_url: "/logo_3.svg",
    banner_url: "/storefront_hero_2.png",
    description: "Minimalist Scandinavian home decor, handcrafted ceramics, and timeless interior objects.",
    currency: "USD",
    status: "active",
    shipping_fee: 10.0,
    free_shipping_threshold: 100.0,
    hero_style: "hero2",
    accent_color: "#ff006a",
};

export const NORDIC_CATEGORIES: StoreCategorySchema[] = [
    { name: "Handmade Ceramics", slug: "handmade-ceramics" },
    { name: "Interior Lighting", slug: "interior-lighting" },
    { name: "Textiles & Living", slug: "textiles-living" },
];

export const NORDIC_CUSTOMER: StoreCustomerSchema = {
    name: "Marcus Vance",
    email: "customer2@example.com",
    password_plain: "customer123",
    phone: "+1 (555) 876-5432",
    shipping_address: {
        street: "124 King Street",
        city: "Portland",
        state: "OR",
        zip: "97201",
        country: "United States",
    },
};

export const NORDIC_PRODUCTS: StoreProductSchema[] = [
    {
        name: "Sculptural Matte Vase",
        description: "Hand-thrown stoneware vase with subtle textured beige glaze.",
        price: 64.0,
        compare_at_price: 75.0,
        sku: "ND-VASE-01",
        stock: 18,
        images: ["https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=600&auto=format&fit=crop&q=80"],
        variants: [{ name: "Color", options: ["Sand Dune", "Charcoal Grey", "Olive Clay"] }],
        status: "active",
        category_name: "Handmade Ceramics",
        category_slug: "handmade-ceramics",
        bestseller: true,
    },
    {
        name: "Fluted Ceramic Beverage Tumbler",
        description: "Ergonomic ribbed ceramic tumbler designed without handles for a grounding tactile warm beverage ritual.",
        price: 32.0,
        compare_at_price: 38.0,
        sku: "ND-CUP-02",
        stock: 30,
        images: ["https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop&q=80"],
        variants: [{ name: "Color", options: ["Oatmeal Glaze", "Chalk White", "Earth Ochre"] }],
        status: "active",
        category_name: "Handmade Ceramics",
        category_slug: "handmade-ceramics",
        bestseller: false,
    },
    {
        name: "Minimalist Oak & Linen Table Lamp",
        description: "Soft diffused ambient lighting featuring solid Scandinavian FSC-certified white oak and woven natural linen.",
        price: 110.0,
        compare_at_price: 135.0,
        sku: "ND-LAMP-01",
        stock: 12,
        images: ["https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&auto=format&fit=crop&q=80"],
        variants: [{ name: "Base", options: ["Natural Oak", "Smoked Walnut"] }],
        status: "active",
        category_name: "Interior Lighting",
        category_slug: "interior-lighting",
        bestseller: true,
    },
    {
        name: "Woven Heavyweight Wool Throw",
        description: "100% pure new wool jacquard weave throw blanket with subtle geometric texture and fringe finish.",
        price: 88.0,
        compare_at_price: 105.0,
        sku: "ND-THROW-01",
        stock: 22,
        images: ["https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&auto=format&fit=crop&q=80"],
        variants: [{ name: "Color", options: ["Nordic Mist", "Warm Taupe", "Forest Moss"] }],
        status: "active",
        category_name: "Textiles & Living",
        category_slug: "textiles-living",
        bestseller: false,
    },
    {
        name: "Handcrafted Terracotta Planter",
        description: "Raw unglazed porous terracotta planter with matching drainage saucer for moisture-loving botanicals.",
        price: 46.0,
        compare_at_price: 54.0,
        sku: "ND-PLANT-01",
        stock: 25,
        images: ["https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=600&auto=format&fit=crop&q=80"],
        variants: [{ name: "Size", options: ["Small (15cm)", "Medium (22cm)", "Large (30cm)"] }],
        status: "active",
        category_name: "Handmade Ceramics",
        category_slug: "handmade-ceramics",
        bestseller: false,
    },
];
