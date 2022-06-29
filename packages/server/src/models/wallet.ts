import { IWallet } from "@easytax/validator";
import mongoose, { Schema, Types } from "mongoose";

type Wallet = IWallet & { userId: Types.ObjectId; lastSynced: number };

const WalletSchema: Schema = new Schema<Wallet>(
  {
    userId: { type: Schema.Types.ObjectId, required: true, ref: "User" },
    walletType: { type: String, required: true },
    publicAddress: { type: String, required: true },
    secret: { type: String },
    lastSynced: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.model<Wallet>("Wallet", WalletSchema);
