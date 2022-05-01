import express from "express";
import { MONGO_URI, PORT } from "@config/config";
import mongoose from "mongoose";
import { urlencoded, json } from "body-parser";
import userRoutes from "@routes/users";

const NAMESPACE = "Server";
const app = express();

mongoose
  .connect(MONGO_URI)
  .then((result) => {
    console.log(NAMESPACE, "Mongo Connected");
  })
  .catch((error) => {
    console.log(NAMESPACE, error.message, error);
  });

app.use(urlencoded({ extended: true }));
app.use(json());

app.use("/api/users", userRoutes);

app.listen(PORT, () => console.log("Server running"));
