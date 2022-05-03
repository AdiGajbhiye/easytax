import { createUser } from "@controllers/users";
import express from "express";

const router = express.Router();

router.post("/", createUser);

export default router;
