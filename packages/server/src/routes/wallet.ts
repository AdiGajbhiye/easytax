import express from "express";
import { addWallet } from "@controllers/wallet";
import { authenticate } from "@middleware/auth";

const router = express.Router();
router.use(authenticate);

router.post("/add", addWallet);

export default router;
