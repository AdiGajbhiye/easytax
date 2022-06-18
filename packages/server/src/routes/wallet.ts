import express from "express";
import { addWallet, getWallet } from "@controllers/wallet";
import { authenticate } from "@middleware/auth";

const router = express.Router();
router.use(authenticate);

router.post("/add", addWallet);
router.get("/get", getWallet);

export default router;
