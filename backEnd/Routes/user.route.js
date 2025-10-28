import express from "express";
import { adduser, getUsers } from "../Controller/user.controller.js";

const router = express.Router();

router.post("/register", adduser);
router.get("/", getUsers);
export default router;
