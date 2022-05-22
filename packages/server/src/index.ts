import { MONGO_URI, PORT } from "@config/config";
import mongoose from "mongoose";
import app from "./app";

const NAMESPACE = "Server";

mongoose
  .connect(MONGO_URI)
  .then((result) => {
    console.log(NAMESPACE, "Mongo Connected");
  })
  .catch((error) => {
    console.log(NAMESPACE, error.message, error);
  });

app.listen(PORT, () => console.log("Server running"));
