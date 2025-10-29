import express from "express";
import { fetchOrders, specificOrder } from "../Controller/orders.controller.js";

const router = express.Router();

router.get("/user/:orderId", specificOrder);
router.get("/:userId", fetchOrders);
export default router;
