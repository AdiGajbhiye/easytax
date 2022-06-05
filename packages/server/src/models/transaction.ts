import mongoose, { Document, Schema } from "mongoose";

type IFee = {
  cost: Number;
  currency: String;
};

type ITransaction = {
  userId: String;
  symbol: String;
  timestamp: Number;
  tradeId: String;
  order: String;
  price: Number;
  amount: Number;
  cost: Number;
  fee: IFee;
};

const FeeSchema = new Schema<IFee>({
  cost: { type: Number, required: true },
  currency: { type: String, required: true },
});

const TransactionSchema: Schema = new Schema<ITransaction>(
  {
    userId: { type: Schema.Types.ObjectId, required: true },
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

export default mongoose.model<ITransaction>("Transaction", TransactionSchema);
