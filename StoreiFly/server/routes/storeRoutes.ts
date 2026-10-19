import { Router } from "express";
import {
    createStore,
    getMyStore,
    updateMyStore,
    onboardMerchant,
    getStoreBySlug,
    getPublicStores,
    getAllStores,
    getAllMerchants,
    toggleStoreStatus,
} from "../controllers/storeController.js";
import { requireAuth, requireRole } from "../middleware/auth.js";

const storeRouter = Router();

// Public routes
storeRouter.get("/public/featured", getPublicStores);
storeRouter.get("/slug/:slug", getStoreBySlug);

// Merchant routes
storeRouter.post("/", requireAuth, createStore);
storeRouter.post("/onboard-merchant", requireAuth, onboardMerchant);
storeRouter.get("/me", requireAuth, getMyStore);
storeRouter.put("/me", requireAuth, updateMyStore);

// Platform Admin routes
storeRouter.get("/admin/all", requireAuth, requireRole(["admin"]), getAllStores);
storeRouter.get("/admin/merchants", requireAuth, requireRole(["admin"]), getAllMerchants);
storeRouter.patch("/admin/:storeId/status", requireAuth, requireRole(["admin"]), toggleStoreStatus);

export default storeRouter;
