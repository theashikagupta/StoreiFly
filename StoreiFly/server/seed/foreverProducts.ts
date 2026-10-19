import type {
    StoreProductSchema,
    StoreInfoSchema,
    StoreMerchantSchema,
    StoreCategorySchema,
    StoreCustomerSchema,
    ProductVariant,
} from "./types.js";

export type { ProductVariant };
export type ForeverProductSchema = StoreProductSchema;

export const FOREVER_MERCHANT: StoreMerchantSchema = {
    name: "Forever Apparel",
    email: "merchant1@example.com",
    password_plain: "merchant123",
};

export const FOREVER_STORE: StoreInfoSchema = {
    name: "Forever",
    slug: "forever",
    logo_url: "/logo_4.svg",
    banner_url: "/storefront_hero_1.png",
    description: "Modern everyday clothing, essentials, and timeless apparel for Men, Women, and Kids.",
    currency: "USD",
    status: "active",
    shipping_fee: 5.0,
    free_shipping_threshold: 50.0,
    hero_style: "hero1",
    accent_color: "#ff9500",
};

export const FOREVER_CATEGORIES: StoreCategorySchema[] = [
    { name: "Men", slug: "men" },
    { name: "Women", slug: "women" },
    { name: "Kids", slug: "kids" },
];

export const FOREVER_CUSTOMER: StoreCustomerSchema = {
    name: "Emma Watson",
    email: "customer1@example.com",
    password_plain: "customer123",
    phone: "+1 (555) 345-6789",
    shipping_address: {
        street: "5th Avenue, Suite 400",
        city: "New York",
        state: "NY",
        zip: "10001",
        country: "United States",
    },
};

export const FOREVER_PRODUCTS: ForeverProductSchema[] = [
    {
        name: "Girls Round Neck Cotton Top",
        description:
            "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 50,
        compare_at_price: null,
        sku: "FOR-K-A98A5",
        stock: 50,
        images: ["https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img3.png"],
        variants: [
            {
                name: "Size",
                options: ["S", "M", "L", "XL", "XXL"],
            },
        ],
        status: "active",
        category_name: "Kids",
        category_slug: "kids",
        sub_category: "Topwear",
        bestseller: false,
    },
    {
        name: "Boy Round Neck Pure Cotton T-shirt",
        description:
            "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 30,
        compare_at_price: null,
        sku: "FOR-K-A98CF",
        stock: 50,
        images: ["https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img24.png"],
        variants: [
            {
                name: "Size",
                options: ["S", "M", "L", "XL", "XXL"],
            },
        ],
        status: "active",
        category_name: "Kids",
        category_slug: "kids",
        sub_category: "Topwear",
        bestseller: false,
    },
    {
        name: "Women Round Neck Cotton Top",
        description:
            "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 40,
        compare_at_price: null,
        sku: "FOR-W-A98A1",
        stock: 50,
        images: ["https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img1.png"],
        variants: [
            {
                name: "Size",
                options: ["S", "M", "L", "XL", "XXL"],
            },
        ],
        status: "active",
        category_name: "Women",
        category_slug: "women",
        sub_category: "Topwear",
        bestseller: false,
    },
    {
        name: "Girls Round Neck Cotton Top",
        description:
            "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 40,
        compare_at_price: null,
        sku: "FOR-K-A98BF",
        stock: 50,
        images: ["https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img16.png"],
        variants: [
            {
                name: "Size",
                options: ["S", "M", "L", "XL", "XXL"],
            },
        ],
        status: "active",
        category_name: "Kids",
        category_slug: "kids",
        sub_category: "Topwear",
        bestseller: false,
    },
    {
        name: "Women Zip-Front Relaxed Fit Jacket",
        description:
            "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 82,
        compare_at_price: null,
        sku: "FOR-W-A98C9",
        stock: 50,
        images: ["https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img21.png"],
        variants: [
            {
                name: "Size",
                options: ["S", "M", "L", "XL", "XXL"],
            },
        ],
        status: "active",
        category_name: "Women",
        category_slug: "women",
        sub_category: "Winterwear",
        bestseller: false,
    },
    {
        name: "Girls Round Neck Cotton Top",
        description:
            "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 38,
        compare_at_price: null,
        sku: "FOR-K-A98D5",
        stock: 50,
        images: ["https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img3.png"],
        variants: [
            {
                name: "Size",
                options: ["S", "M", "L", "XL", "XXL"],
            },
        ],
        status: "active",
        category_name: "Kids",
        category_slug: "kids",
        sub_category: "Topwear",
        bestseller: false,
    },
    {
        name: "Men Printed Plain Cotton Shirt",
        description:
            "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 52,
        compare_at_price: null,
        sku: "FOR-M-A98ED",
        stock: 50,
        images: ["https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img39.png"],
        variants: [
            {
                name: "Size",
                options: ["S", "M", "L", "XL", "XXL"],
            },
        ],
        status: "active",
        category_name: "Men",
        category_slug: "men",
        sub_category: "Topwear",
        bestseller: false,
    },
    {
        name: "Men Round Neck Pure Cotton T-shirt",
        description:
            "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 54,
        compare_at_price: null,
        sku: "FOR-M-A98F1",
        stock: 50,
        images: ["https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img41.png"],
        variants: [
            {
                name: "Size",
                options: ["S", "M", "L", "XL", "XXL"],
            },
        ],
        status: "active",
        category_name: "Men",
        category_slug: "men",
        sub_category: "Topwear",
        bestseller: false,
    },
    {
        name: "Men Round Neck Pure Cotton T-shirt",
        description:
            "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 34,
        compare_at_price: null,
        sku: "FOR-M-A98DD",
        stock: 50,
        images: ["https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img31.png"],
        variants: [
            {
                name: "Size",
                options: ["S", "M", "L", "XL", "XXL"],
            },
        ],
        status: "active",
        category_name: "Men",
        category_slug: "men",
        sub_category: "Topwear",
        bestseller: false,
    },
    {
        name: "Women Round Neck Cotton Top",
        description:
            "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 30,
        compare_at_price: null,
        sku: "FOR-W-A98A9",
        stock: 50,
        images: ["https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img29.png"],
        variants: [
            {
                name: "Size",
                options: ["S", "M", "L", "XL", "XXL"],
            },
        ],
        status: "active",
        category_name: "Women",
        category_slug: "women",
        sub_category: "Topwear",
        bestseller: false,
    },
    {
        name: "Boy Round Neck Pure Cotton T-shirt",
        description:
            "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 26,
        compare_at_price: null,
        sku: "FOR-K-A98CD",
        stock: 50,
        images: ["https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img23.png"],
        variants: [
            {
                name: "Size",
                options: ["S", "M", "L", "XL", "XXL"],
            },
        ],
        status: "active",
        category_name: "Kids",
        category_slug: "kids",
        sub_category: "Topwear",
        bestseller: false,
    },
    {
        name: "Men Slim Fit Relaxed Denim Jacket",
        description:
            "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 84,
        compare_at_price: 109,
        sku: "FOR-M-A9907",
        stock: 35,
        images: ["https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img52.png"],
        variants: [
            {
                name: "Size",
                options: ["S", "M", "L", "XL", "XXL"],
            },
        ],
        status: "active",
        category_name: "Men",
        category_slug: "men",
        sub_category: "Winterwear",
        bestseller: true,
    },
    {
        name: "Men Round Neck Pure Cotton T-shirt",
        description:
            "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 26,
        compare_at_price: null,
        sku: "FOR-M-A98B7",
        stock: 50,
        images: ["https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img12.png"],
        variants: [
            {
                name: "Size",
                options: ["S", "M", "L", "XL", "XXL"],
            },
        ],
        status: "active",
        category_name: "Men",
        category_slug: "men",
        sub_category: "Topwear",
        bestseller: false,
    },
    {
        name: "Men Tapered Fit Flat-Front Trousers",
        description:
            "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 58,
        compare_at_price: null,
        sku: "FOR-M-A98BD",
        stock: 50,
        images: ["https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img15.png"],
        variants: [
            {
                name: "Size",
                options: ["S", "M", "L", "XL", "XXL"],
            },
        ],
        status: "active",
        category_name: "Men",
        category_slug: "men",
        sub_category: "Bottomwear",
        bestseller: false,
    },
    {
        name: "Men Round Neck Pure Cotton T-shirt",
        description:
            "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 26,
        compare_at_price: null,
        sku: "FOR-M-A98A7",
        stock: 50,
        images: ["https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img4.png"],
        variants: [
            {
                name: "Size",
                options: ["S", "M", "L", "XL", "XXL"],
            },
        ],
        status: "active",
        category_name: "Men",
        category_slug: "men",
        sub_category: "Topwear",
        bestseller: false,
    },
    {
        name: "Women Round Neck Cotton Top",
        description:
            "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 36,
        compare_at_price: null,
        sku: "FOR-W-A98D9",
        stock: 50,
        images: ["https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img5.png"],
        variants: [
            {
                name: "Size",
                options: ["S", "M", "L", "XL", "XXL"],
            },
        ],
        status: "active",
        category_name: "Women",
        category_slug: "women",
        sub_category: "Topwear",
        bestseller: false,
    },
    {
        name: "Girls Round Neck Cotton Top",
        description:
            "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 60,
        compare_at_price: null,
        sku: "FOR-K-A98D1",
        stock: 50,
        images: ["https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img25.png"],
        variants: [
            {
                name: "Size",
                options: ["S", "M", "L", "XL", "XXL"],
            },
        ],
        status: "active",
        category_name: "Kids",
        category_slug: "kids",
        sub_category: "Topwear",
        bestseller: false,
    },
    {
        name: "Women Zip-Front Relaxed Fit Jacket",
        description:
            "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 78,
        compare_at_price: 101,
        sku: "FOR-W-A98F7",
        stock: 35,
        images: ["https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img44.png"],
        variants: [
            {
                name: "Size",
                options: ["S", "M", "L", "XL", "XXL"],
            },
        ],
        status: "active",
        category_name: "Women",
        category_slug: "women",
        sub_category: "Winterwear",
        bestseller: true,
    },
    {
        name: "Women Zip-Front Relaxed Fit Jacket",
        description:
            "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 68,
        compare_at_price: 88,
        sku: "FOR-W-A9905",
        stock: 35,
        images: ["https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img51.png"],
        variants: [
            {
                name: "Size",
                options: ["S", "M", "L", "XL", "XXL"],
            },
        ],
        status: "active",
        category_name: "Women",
        category_slug: "women",
        sub_category: "Winterwear",
        bestseller: true,
    },
    {
        name: "Kid Tapered Slim Fit Trouser",
        description:
            "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 38,
        compare_at_price: null,
        sku: "FOR-K-A98FD",
        stock: 50,
        images: ["https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img47.png"],
        variants: [
            {
                name: "Size",
                options: ["S", "M", "L", "XL", "XXL"],
            },
        ],
        status: "active",
        category_name: "Kids",
        category_slug: "kids",
        sub_category: "Bottomwear",
        bestseller: false,
    },
    {
        name: "Girls Round Neck Cotton Top",
        description:
            "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 42,
        compare_at_price: null,
        sku: "FOR-K-A98DB",
        stock: 50,
        images: ["https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img6.png"],
        variants: [
            {
                name: "Size",
                options: ["S", "M", "L", "XL", "XXL"],
            },
        ],
        status: "active",
        category_name: "Kids",
        category_slug: "kids",
        sub_category: "Topwear",
        bestseller: false,
    },
    {
        name: "Men Slim Fit Relaxed Denim Jacket",
        description:
            "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 77,
        compare_at_price: null,
        sku: "FOR-M-A98EF",
        stock: 50,
        images: ["https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img40.png"],
        variants: [
            {
                name: "Size",
                options: ["S", "M", "L", "XL", "XXL"],
            },
        ],
        status: "active",
        category_name: "Men",
        category_slug: "men",
        sub_category: "Winterwear",
        bestseller: false,
    },
    {
        name: "Girls Round Neck Cotton Top",
        description:
            "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 64,
        compare_at_price: null,
        sku: "FOR-K-A98B1",
        stock: 50,
        images: ["https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img9.png"],
        variants: [
            {
                name: "Size",
                options: ["S", "M", "L", "XL", "XXL"],
            },
        ],
        status: "active",
        category_name: "Kids",
        category_slug: "kids",
        sub_category: "Topwear",
        bestseller: false,
    },
    {
        name: "Women Palazzo Pants with Waist Belt",
        description:
            "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 52,
        compare_at_price: null,
        sku: "FOR-W-A98C7",
        stock: 50,
        images: ["https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img20.png"],
        variants: [
            {
                name: "Size",
                options: ["S", "M", "L", "XL", "XXL"],
            },
        ],
        status: "active",
        category_name: "Women",
        category_slug: "women",
        sub_category: "Bottomwear",
        bestseller: false,
    },
    {
        name: "Men Round Neck Pure Cotton T-shirt",
        description:
            "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 46,
        compare_at_price: null,
        sku: "FOR-M-A98B5",
        stock: 50,
        images: ["https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img11.png"],
        variants: [
            {
                name: "Size",
                options: ["S", "M", "L", "XL", "XXL"],
            },
        ],
        status: "active",
        category_name: "Men",
        category_slug: "men",
        sub_category: "Topwear",
        bestseller: false,
    },
    {
        name: "Women Palazzo Pants with Waist Belt",
        description:
            "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 67,
        compare_at_price: null,
        sku: "FOR-W-A98CB",
        stock: 50,
        images: ["https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img22.png"],
        variants: [
            {
                name: "Size",
                options: ["S", "M", "L", "XL", "XXL"],
            },
        ],
        status: "active",
        category_name: "Women",
        category_slug: "women",
        sub_category: "Bottomwear",
        bestseller: false,
    },
    {
        name: "Men Round Neck Pure Cotton T-shirt",
        description:
            "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 68,
        compare_at_price: null,
        sku: "FOR-M-A98AF",
        stock: 50,
        images: ["https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img8.png"],
        variants: [
            {
                name: "Size",
                options: ["S", "M", "L", "XL", "XXL"],
            },
        ],
        status: "active",
        category_name: "Men",
        category_slug: "men",
        sub_category: "Topwear",
        bestseller: false,
    },
    {
        name: "Boy Round Neck Pure Cotton T-shirt",
        description:
            "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 25,
        compare_at_price: null,
        sku: "FOR-K-A98F3",
        stock: 50,
        images: ["https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img18.png"],
        variants: [
            {
                name: "Size",
                options: ["S", "M", "L", "XL", "XXL"],
            },
        ],
        status: "active",
        category_name: "Kids",
        category_slug: "kids",
        sub_category: "Topwear",
        bestseller: false,
    },
    {
        name: "Men Round Neck Pure Cotton T-shirt",
        description:
            "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 48,
        compare_at_price: null,
        sku: "FOR-M-A98EB",
        stock: 50,
        images: ["https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img14.png"],
        variants: [
            {
                name: "Size",
                options: ["S", "M", "L", "XL", "XXL"],
            },
        ],
        status: "active",
        category_name: "Men",
        category_slug: "men",
        sub_category: "Topwear",
        bestseller: false,
    },
    {
        name: "Men Slim Fit Relaxed Denim Jacket",
        description:
            "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 80,
        compare_at_price: null,
        sku: "FOR-M-A98FF",
        stock: 50,
        images: ["https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img48.png"],
        variants: [
            {
                name: "Size",
                options: ["S", "M", "L", "XL", "XXL"],
            },
        ],
        status: "active",
        category_name: "Men",
        category_slug: "men",
        sub_category: "Winterwear",
        bestseller: false,
    },
    {
        name: "Boy Round Neck Pure Cotton T-shirt",
        description:
            "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 28,
        compare_at_price: null,
        sku: "FOR-K-A98C3",
        stock: 50,
        images: ["https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img18.png"],
        variants: [
            {
                name: "Size",
                options: ["S", "M", "L", "XL", "XXL"],
            },
        ],
        status: "active",
        category_name: "Kids",
        category_slug: "kids",
        sub_category: "Topwear",
        bestseller: false,
    },
    {
        name: "Men Slim Fit Relaxed Denim Jacket",
        description:
            "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 79,
        compare_at_price: null,
        sku: "FOR-M-A98D7",
        stock: 50,
        images: ["https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img28.png"],
        variants: [
            {
                name: "Size",
                options: ["S", "M", "L", "XL", "XXL"],
            },
        ],
        status: "active",
        category_name: "Men",
        category_slug: "men",
        sub_category: "Winterwear",
        bestseller: false,
    },
    {
        name: "Men Slim Fit Relaxed Denim Jacket",
        description:
            "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 86,
        compare_at_price: 112,
        sku: "FOR-M-A98F9",
        stock: 35,
        images: ["https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img45.png"],
        variants: [
            {
                name: "Size",
                options: ["S", "M", "L", "XL", "XXL"],
            },
        ],
        status: "active",
        category_name: "Men",
        category_slug: "men",
        sub_category: "Winterwear",
        bestseller: true,
    },
    {
        name: "Women Zip-Front Relaxed Fit Jacket",
        description:
            "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 74,
        compare_at_price: null,
        sku: "FOR-W-A98E5",
        stock: 50,
        images: ["https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img35.png"],
        variants: [
            {
                name: "Size",
                options: ["S", "M", "L", "XL", "XXL"],
            },
        ],
        status: "active",
        category_name: "Women",
        category_slug: "women",
        sub_category: "Winterwear",
        bestseller: false,
    },
    {
        name: "Men Tapered Fit Flat-Front Trousers",
        description:
            "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 70,
        compare_at_price: null,
        sku: "FOR-M-A98AD",
        stock: 50,
        images: ["https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img7.png"],
        variants: [
            {
                name: "Size",
                options: ["S", "M", "L", "XL", "XXL"],
            },
        ],
        status: "active",
        category_name: "Men",
        category_slug: "men",
        sub_category: "Bottomwear",
        bestseller: false,
    },
    {
        name: "Girls Round Neck Cotton Top",
        description:
            "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 48,
        compare_at_price: null,
        sku: "FOR-K-A98E1",
        stock: 50,
        images: ["https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img9.png"],
        variants: [
            {
                name: "Size",
                options: ["S", "M", "L", "XL", "XXL"],
            },
        ],
        status: "active",
        category_name: "Kids",
        category_slug: "kids",
        sub_category: "Topwear",
        bestseller: false,
    },
    {
        name: "Girls Round Neck Cotton Top",
        description:
            "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 56,
        compare_at_price: null,
        sku: "FOR-K-A98AB",
        stock: 50,
        images: ["https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img6.png"],
        variants: [
            {
                name: "Size",
                options: ["S", "M", "L", "XL", "XXL"],
            },
        ],
        status: "active",
        category_name: "Kids",
        category_slug: "kids",
        sub_category: "Topwear",
        bestseller: false,
    },
    {
        name: "Men Round Neck Pure Cotton T-shirt",
        description:
            "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 64,
        compare_at_price: null,
        sku: "FOR-M-A98DF",
        stock: 50,
        images: ["https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img8.png"],
        variants: [
            {
                name: "Size",
                options: ["S", "M", "L", "XL", "XXL"],
            },
        ],
        status: "active",
        category_name: "Men",
        category_slug: "men",
        sub_category: "Topwear",
        bestseller: false,
    },
    {
        name: "Boy Round Neck Pure Cotton T-shirt",
        description:
            "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 36,
        compare_at_price: null,
        sku: "FOR-K-A98C5",
        stock: 50,
        images: ["https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img19.png"],
        variants: [
            {
                name: "Size",
                options: ["S", "M", "L", "XL", "XXL"],
            },
        ],
        status: "active",
        category_name: "Kids",
        category_slug: "kids",
        sub_category: "Topwear",
        bestseller: false,
    },
    {
        name: "Women Round Neck Cotton Top",
        description:
            "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 45,
        compare_at_price: null,
        sku: "FOR-W-A98B9",
        stock: 50,
        images: ["https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img13.png"],
        variants: [
            {
                name: "Size",
                options: ["S", "M", "L", "XL", "XXL"],
            },
        ],
        status: "active",
        category_name: "Women",
        category_slug: "women",
        sub_category: "Topwear",
        bestseller: false,
    },
    {
        name: "Men Slim Fit Relaxed Denim Jacket",
        description:
            "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 72,
        compare_at_price: 94,
        sku: "FOR-M-A98FB",
        stock: 35,
        images: ["https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img46.png"],
        variants: [
            {
                name: "Size",
                options: ["S", "M", "L", "XL", "XXL"],
            },
        ],
        status: "active",
        category_name: "Men",
        category_slug: "men",
        sub_category: "Winterwear",
        bestseller: true,
    },
    {
        name: "Women Zip-Front Relaxed Fit Jacket",
        description:
            "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 82,
        compare_at_price: null,
        sku: "FOR-W-A98D3",
        stock: 50,
        images: ["https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img26.png"],
        variants: [
            {
                name: "Size",
                options: ["S", "M", "L", "XL", "XXL"],
            },
        ],
        status: "active",
        category_name: "Women",
        category_slug: "women",
        sub_category: "Winterwear",
        bestseller: false,
    },
    {
        name: "Women Zip-Front Relaxed Fit Jacket",
        description:
            "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 78,
        compare_at_price: null,
        sku: "FOR-W-A98E7",
        stock: 50,
        images: ["https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img36.png"],
        variants: [
            {
                name: "Size",
                options: ["S", "M", "L", "XL", "XXL"],
            },
        ],
        status: "active",
        category_name: "Women",
        category_slug: "women",
        sub_category: "Winterwear",
        bestseller: false,
    },
    {
        name: "Kid Tapered Slim Fit Trouser",
        description:
            "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 40,
        compare_at_price: null,
        sku: "FOR-K-A9903",
        stock: 50,
        images: ["https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img50.png"],
        variants: [
            {
                name: "Size",
                options: ["S", "M", "L", "XL", "XXL"],
            },
        ],
        status: "active",
        category_name: "Kids",
        category_slug: "kids",
        sub_category: "Bottomwear",
        bestseller: false,
    },
    {
        name: "Men Tapered Fit Flat-Front Trousers",
        description:
            "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 72,
        compare_at_price: null,
        sku: "FOR-M-A98B3",
        stock: 50,
        images: ["https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img10.png"],
        variants: [
            {
                name: "Size",
                options: ["S", "M", "L", "XL", "XXL"],
            },
        ],
        status: "active",
        category_name: "Men",
        category_slug: "men",
        sub_category: "Bottomwear",
        bestseller: false,
    },
    {
        name: "Kid Tapered Slim Fit Trouser",
        description:
            "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 60,
        compare_at_price: null,
        sku: "FOR-K-A98F5",
        stock: 50,
        images: ["https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img43.png"],
        variants: [
            {
                name: "Size",
                options: ["S", "M", "L", "XL", "XXL"],
            },
        ],
        status: "active",
        category_name: "Kids",
        category_slug: "kids",
        sub_category: "Bottomwear",
        bestseller: false,
    },
    {
        name: "Women Round Neck Cotton Top",
        description:
            "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 38,
        compare_at_price: null,
        sku: "FOR-W-A98E3",
        stock: 50,
        images: ["https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img34.png"],
        variants: [
            {
                name: "Size",
                options: ["S", "M", "L", "XL", "XXL"],
            },
        ],
        status: "active",
        category_name: "Women",
        category_slug: "women",
        sub_category: "Topwear",
        bestseller: false,
    },
    {
        name: "Kid Tapered Slim Fit Trouser",
        description:
            "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 56,
        compare_at_price: null,
        sku: "FOR-K-A9901",
        stock: 50,
        images: ["https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img49.png"],
        variants: [
            {
                name: "Size",
                options: ["S", "M", "L", "XL", "XXL"],
            },
        ],
        status: "active",
        category_name: "Kids",
        category_slug: "kids",
        sub_category: "Bottomwear",
        bestseller: false,
    },
    {
        name: "Women Round Neck Cotton Top",
        description:
            "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 42,
        compare_at_price: null,
        sku: "FOR-W-A98E9",
        stock: 50,
        images: ["https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img13.png"],
        variants: [
            {
                name: "Size",
                options: ["S", "M", "L", "XL", "XXL"],
            },
        ],
        status: "active",
        category_name: "Women",
        category_slug: "women",
        sub_category: "Topwear",
        bestseller: false,
    },
    {
        name: "Boy Round Neck Pure Cotton T-shirt",
        description:
            "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 60,
        compare_at_price: null,
        sku: "FOR-K-A98BB",
        stock: 50,
        images: ["https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img14.png"],
        variants: [
            {
                name: "Size",
                options: ["S", "M", "L", "XL", "XXL"],
            },
        ],
        status: "active",
        category_name: "Kids",
        category_slug: "kids",
        sub_category: "Topwear",
        bestseller: false,
    },
    {
        name: "Men Round Neck Pure Cotton T-shirt",
        description:
            "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 80,
        compare_at_price: null,
        sku: "FOR-M-A98A3",
        stock: 50,
        images: [
            "https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img2_1.png",
            "https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img2_2.png",
            "https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img2_3.png",
            "https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img2_4.png",
        ],
        variants: [
            {
                name: "Size",
                options: ["S", "M", "L", "XL", "XXL"],
            },
        ],
        status: "active",
        category_name: "Men",
        category_slug: "men",
        sub_category: "Topwear",
        bestseller: false,
    },
    {
        name: "Men Tapered Fit Flat-Front Trousers",
        description:
            "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 63,
        compare_at_price: null,
        sku: "FOR-M-A98C1",
        stock: 50,
        images: ["https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img17.png"],
        variants: [
            {
                name: "Size",
                options: ["S", "M", "L", "XL", "XXL"],
            },
        ],
        status: "active",
        category_name: "Men",
        category_slug: "men",
        sub_category: "Bottomwear",
        bestseller: false,
    },
];
