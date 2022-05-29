import {
  ILogin,
  ISignup,
  LoginValidation,
  SignupValidation,
} from "@easytax/validator";
import { Request, Response } from "express";
import User from "@models/users";
import { comparePassword, generateHash } from "@utils/auth";

const login = async (req: Request<{}, {}, ILogin>, res: Response) => {
  const _result = LoginValidation.safeParse(req.body);
  if (!_result.success) {
    console.log(_result.error);
    return;
  }
  const { data } = _result;
  const user = await User.findOne({ email: data.email });
  if (!user) {
    res.status(404).json({ message: "Email is not registered with us." });
    return;
  }
  const equal = await comparePassword(user.password, data.password);
  if (!equal) {
    res.status(404).json({ message: "Password dosn't match." });
    return;
  }
  res.status(200).json({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    verified: user.verified,
  });
};

const signup = async (req: Request<{}, {}, ISignup>, res: Response) => {
  const _result = SignupValidation.safeParse(req.body);
  if (!_result.success) {
    console.log(_result.error);
    return;
  }
  const { data } = _result;
  const _user = await User.findOne({ email: data.email });
  if (_user) {
    res.status(409).json({ message: "Email is already registered." });
    return;
  }
  const hash = await generateHash(data.password);
  const user = await User.create({
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    password: hash,
    verified: false,
  });
  res.status(201).json({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    verified: user.verified,
  });
};

export { login, signup };
