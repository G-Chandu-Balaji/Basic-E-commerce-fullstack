import express from "express";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT;
const app = new express();
app.use(express.json());

app.use("/api/products", ProductRoutes);
app.use("/api/cart", CartRoutes);
app.use("/api/user", authRoutes);

app.listen(port, () => {
  console.log(`Server is Running on port ${port}`);
});
