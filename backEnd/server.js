import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import ProductRoutes from "./Routes/product.routes.js";
import CartRoutes from "./Routes/cart.route.js";
import UserRoutes from "./Routes/user.route.js";

dotenv.config();

const port = process.env.PORT;
const app = new express();
app.use(express.json());

app.use("/api/products", ProductRoutes);
app.use("/api/cart", CartRoutes);
app.use("/api/user", UserRoutes);

app.listen(port, () => {
  console.log(`Server is Running on port ${port}`);
});

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch((error) => {
    console.error("❌ MongoDB Connection Failed:", error.message);
    process.exit(1);
  });
