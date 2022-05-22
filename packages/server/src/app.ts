import express from "express";
import { urlencoded, json } from "body-parser";
import authRoutes from "@routes/auth";
import transactionRoutes from "@routes/transactions";

const app = express();

app.use(urlencoded({ extended: true }));
app.use(json());

app.use("/api/auth", authRoutes);
app.use("/api/transactions", transactionRoutes);

export default app;
