import express from "express";
import { urlencoded, json } from "body-parser";
import userRoutes from "@routes/users";
import transactionRoutes from "@routes/transactions";

const app = express();

app.use(urlencoded({ extended: true }));
app.use(json());

app.use("/api/users", userRoutes);
app.use("/api/transactions", transactionRoutes);

export default app;
