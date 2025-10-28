import express from "express";
import { AddToCart } from "../Controller/cart.controller.js";

const router = express.Router();

router.post("/add", AddToCart);

export default router;
