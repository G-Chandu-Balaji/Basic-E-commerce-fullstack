import express from "express";
import {
  AddToCart,
  checkout,
  clearCart,
  getcart,
  removeFromCart,
  updateCartItem,
} from "../Controller/cart.controller.js";

const router = express.Router();

router.post("/add", AddToCart);
router.get("/:userId", getcart);
router.patch("/:userId/update", updateCartItem);
router.delete("/clear/:userId", clearCart);
router.delete("/:userId/:productId", removeFromCart);
router.post("/:userId/checkout", checkout);

export default router;
