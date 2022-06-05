import { ISignup } from "@easytax/validator";
import mongoose, { Schema } from "mongoose";

type UserModel = Omit<ISignup, "confirmPassword"> & {
  verified: boolean;
};

const UserSchema: Schema = new Schema<UserModel>(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    verified: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model<UserModel>("User", UserSchema);
