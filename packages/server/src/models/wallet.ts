import mongoose, { Document, Schema } from "mongoose";

interface IWallet extends Document {
  userId: string;
  type: string;
  name: string;
  publicKey: string;
  secret?: string;
}

const WalletSchema: Schema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, required: true },
    type: { type: String, required: true },
    name: { type: String, required: true },
    publicKey: { type: String, required: true },
    secret: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model<IWallet>("Wallet", WalletSchema);
