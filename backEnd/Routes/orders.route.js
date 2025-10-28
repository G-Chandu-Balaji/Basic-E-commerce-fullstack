import express from "express";
import { fetchOrders } from "../Controller/orders.controller.js";

const router = express.Router();

router.get("/:userId", fetchOrders);
export default router;
