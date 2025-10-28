import productModel from "../Model/product.model.js";

export const FetchProducts = async (req, res) => {
  try {
    const products = await productModel.find();
    if (products.length === 0) {
      return res.status(404).json({ message: "No products found" });
    }
    console.log("send request sent");
    res.status(200).json({ result: products.length, data: products });
  } catch (err) {
    console.error("Error fetching products:", err);
    res.status(500).json({ error: err.message || "Internal Server Error" });
  }
};
