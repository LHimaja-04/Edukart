import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

import authRoutes from "./routes/auth.routes.js";
import productRoutes from "./routes/products.routes.js";
import orderRoutes from "./routes/orders.routes.js";
import wishlistRoutes from "./routes/wishlist.routes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// connect to DB
connectDB(process.env.MONGODB_URI);

// health check
app.get("/health", (req, res) => res.json({ ok: true }));

// register routes
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/wishlist", wishlistRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✓ API on http://localhost:${PORT}`));
