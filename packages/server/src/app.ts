import express from "express";
import { urlencoded, json } from "body-parser";
import authRoutes from "@routes/auth";
import transactionRoutes from "@routes/transactions";
import walletRoutes from "@routes/wallet";
import cors from "cors";

const app = express();
app.use(cors());

app.use(urlencoded({ extended: true }));
app.use(json());

app.use("/api/auth", authRoutes);
app.use("/api/transaction", transactionRoutes);
app.use("/api/wallet", walletRoutes);

export default app;
