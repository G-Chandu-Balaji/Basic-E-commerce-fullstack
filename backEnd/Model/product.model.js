import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: Number,
  description: String,
  Image: String,
});

const productModel = mongoose.model("product", productSchema);

export default productModel;
