import Transaction from "@models/transaction";
import { listTransactions } from "@services/exchange";
import { Request, Response } from "express";

const uploadTransactions = async (req: Request, res: Response) => {
  let total = 0;
  await listTransactions(
    "binance",
    {
      apiKey:
        "f9aCczHftjEdJ7NgmuUiIUPhLgE3VaZyLKx4WOUXeLXNnNSusS2BY53K4n2d081c",
      secret:
        "LixPanbCCFPWdnnuh6G5whm4r7U4rHMLy4OhVcLt22NRBl4NS618bXxokgxMiRI4",
    },
    async (trades) => {
      try {
        await Transaction.create(
          ...trades.map((t) => ({ ...t, tradeId: t.id, userId: "temp" }))
        );
        total += trades.length;
      } catch (error) {
        console.log(error);
      }
    }
  );
  res.status(200).json({ body: { total } });
};

export { uploadTransactions };
