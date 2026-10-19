import { Router } from "express";
import { upload } from "../middleware/upload.js";
import { requireAuth } from "../middleware/auth.js";
import { uploadSingle, uploadMultiple, aiTransform, aiOnModel } from "../controllers/uploadController.js";

const uploadRouter = Router();

uploadRouter.post("/single", requireAuth, upload.single("image"), uploadSingle);
uploadRouter.post("/multiple", requireAuth, upload.array("images", 5), uploadMultiple);
uploadRouter.post("/ai-transform", requireAuth, aiTransform);
uploadRouter.post("/ai-on-model", requireAuth, aiOnModel);

export default uploadRouter;
