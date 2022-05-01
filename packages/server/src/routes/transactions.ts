import { uploadTransactions } from "@controllers/transactions";
import express from "express";

const router = express.Router();

router.get("/", uploadTransactions);

export default router;
