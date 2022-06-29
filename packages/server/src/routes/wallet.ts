import express from "express";
import { addWallet, deleteWallet, getWallet } from "@controllers/wallet";
import { authenticate } from "@middleware/auth";

const router = express.Router();
router.use(authenticate);

router.get("/", getWallet);
router.post("/", addWallet);
router.delete("/:id", deleteWallet);

export default router;
