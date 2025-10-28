import express from "express";
import { FetchProducts } from "../Controller/product.controller.js";

const router = express.Router();

router.get("/", FetchProducts);

export default router;
