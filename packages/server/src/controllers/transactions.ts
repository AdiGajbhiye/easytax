import Transaction from "@models/transaction";
import { CronJob } from "cron";
import { Request, Response } from "express";
import dayjs from "dayjs";
import { syncAllTransactions } from "@jobs/syncTransactions";

const syncTransactions = async (req: Request, res: Response) => {
  const cronExpression = dayjs().add(5, "s").toDate();
  new CronJob(
    cronExpression,
    () => {
      console.log("this is job on tick");
      syncAllTransactions();
    },
    () => {
      console.log("this is job on complete");
    },
    true
  );
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
