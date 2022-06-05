import mongoose, { Document, Schema } from "mongoose";

interface IWallet {
  // userId: string;
  walletType: string;
  publicAddress: string;
  secret?: string;
}

const WalletSchema = new Schema<IWallet>(
  {
    // userId: { type: Schema.Types.ObjectId, required: true },
    walletType: { type: String, required: true },
    publicAddress: { type: String, required: true },
    secret: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model<IWallet>("Wallet", WalletSchema);
