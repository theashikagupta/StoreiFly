import "dotenv/config";
import express, { Request, Response } from "express";
import cors from "cors";

import storeRouter from "./routes/storeRoutes.js";
import productRouter from "./routes/productRoutes.js";
import categoryRouter from "./routes/categoryRoutes.js";
import orderRouter from "./routes/orderRoutes.js";
import analyticsRouter from "./routes/analyticsRoutes.js";
import uploadRouter from "./routes/uploadRoutes.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json({ limit: "15mb" }));
app.use(express.urlencoded({ extended: true, limit: "15mb" }));

// Configs
const port = process.env.PORT || 3000;

// API Routes
app.use("/api/stores", storeRouter);
app.use("/api/products", productRouter);
app.use("/api/categories", categoryRouter);
app.use("/api/orders", orderRouter);
app.use("/api/analytics", analyticsRouter);
app.use("/api/upload", uploadRouter);

// Health check
app.get("/", (_req: Request, res: Response) => {
    res.json({ status: "ok", message: "StoreiFly API is live and healthy" });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
