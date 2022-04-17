import { getAllUsers } from "@controllers/users";
import express from "express";

const router = express.Router();

router.get("/", getAllUsers);

export default router;
