import { IWallet } from "@easytax/validator";
import mongoose, { Schema, Types } from "mongoose";

type WalletModel = IWallet & { userId: Types.ObjectId };

const WalletSchema: Schema = new Schema<WalletModel>(
  {
    userId: { type: Schema.Types.ObjectId, required: true, ref: "User" },
    walletType: { type: String, required: true },
    publicAddress: { type: String, required: true },
    secret: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model<WalletModel>("Wallet", WalletSchema);
