import Transaction from "@models/transaction";
import { Request, Response } from "express";
import { syncTransactionsByUserId } from "@jobs/syncTransactions";
import { scheduleNow } from "@utils/scheduler";

const syncTransactions = async (req: Request, res: Response) => {
  scheduleNow(() => syncTransactionsByUserId(res.locals.jwt.id));
  res.sendStatus(200);
};

const getTransactions = async (req: Request, res: Response) => {
  try {
    const transactions = await Transaction.find({ userId: res.locals.jwt.id });
    res.status(200).json({ body: transactions });
  } catch (error) {
    console.log(error);
    res.sendStatus(404);
  }
};

export { syncTransactions, getTransactions };
