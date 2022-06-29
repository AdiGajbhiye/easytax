import mongoose, { Schema, Types } from "mongoose";

type Fee = {
  cost: Number;
  currency: String;
};

type Transaction = {
  userId: Types.ObjectId;
  walletId: Types.ObjectId;
  symbol: String;
  timestamp: Number;
  tradeId: String;
  order: String;
  price: Number;
  amount: Number;
  cost: Number;
  fee: Fee;
};

const FeeSchema = new Schema<Fee>({
  cost: { type: Number, required: true },
  currency: { type: String, required: true },
});

const TransactionSchema: Schema = new Schema<Transaction>(
  {
    userId: { type: Schema.Types.ObjectId, required: true, ref: "User" },
    walletId: { type: Schema.Types.ObjectId, required: true, ref: "Wallet" },
    symbol: { type: String, required: true },
    timestamp: { type: Number, required: true },
    tradeId: { type: String, required: true },
    order: { type: String, required: true },
    price: { type: Number, required: true },
    amount: { type: Number, required: true },
    cost: { type: Number, required: true },
    fee: { type: FeeSchema, required: true },
  },
  { timestamps: true }
);

export default mongoose.model<Transaction>("Transaction", TransactionSchema);
