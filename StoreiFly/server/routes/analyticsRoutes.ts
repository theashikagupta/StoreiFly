import { Router } from "express";
import { getMerchantAnalytics, getPlatformAnalytics } from "../controllers/analyticsController.js";
import { requireAuth, requireRole } from "../middleware/auth.js";

const analyticsRouter = Router();

analyticsRouter.get("/merchant", requireAuth, requireRole(["merchant"]), getMerchantAnalytics);
analyticsRouter.get("/platform", requireAuth, requireRole(["admin"]), getPlatformAnalytics);

export default analyticsRouter;
