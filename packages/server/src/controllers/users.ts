import User from "@models/users";
import { Request, Response } from "express";

const createUser = async (req: Request, res: Response) => {
  const user = await User.create(req.body);
  res.status(201).json({ body: user });
};

export { createUser };
