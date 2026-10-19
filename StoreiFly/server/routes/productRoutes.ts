import { Router } from "express";
import { getProducts, getProductById, createProduct, updateProduct, deleteProduct } from "../controllers/productController.js";
import { requireAuth, requireRole } from "../middleware/auth.js";

const productRouter = Router();

// Public storefront routes
productRouter.get("/", getProducts);
productRouter.get("/:id", getProductById);

// Merchant routes
productRouter.post("/", requireAuth, requireRole(["merchant"]), createProduct);
productRouter.put("/:id", requireAuth, requireRole(["merchant"]), updateProduct);
productRouter.delete("/:id", requireAuth, requireRole(["merchant"]), deleteProduct);

export default productRouter;
