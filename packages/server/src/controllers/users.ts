import User from "@models/users";
import { Request, Response } from "express";

const getAllUsers = async (req: Request, res: Response) => {
  const users = await User.find().catch(console.log);
  res.status(200).json({ body: users });
};

export { getAllUsers };
