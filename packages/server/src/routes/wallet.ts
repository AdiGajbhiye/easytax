import express from "express";
import { addWallet } from "@controllers/wallet";

const router = express.Router();

router.post("/add", addWallet);

export default router;
