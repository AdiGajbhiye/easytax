import express from "express";
import { addWallet, listWallet } from "@controllers/wallet";
import { authenticate } from "@middleware/auth";

const router = express.Router();
router.use(authenticate);

router.post("/add", addWallet);
router.get("/list", listWallet);

export default router;
