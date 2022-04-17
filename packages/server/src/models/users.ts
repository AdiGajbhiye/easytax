import mongoose, { Document, Schema } from "mongoose";

interface IUser extends Document {
  username: String;
  password: String;
  fullname: String;
}

const UserSchema: Schema = new Schema(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
    fullname: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model<IUser>("User", UserSchema);
