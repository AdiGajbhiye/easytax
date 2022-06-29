import { getTransactions, syncTransactions } from "@controllers/transactions";
import express from "express";

const router = express.Router();

router.get("/sync", syncTransactions);
router.get("/get", getTransactions);

export default router;
