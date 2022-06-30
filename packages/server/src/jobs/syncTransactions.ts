import { consumeTransactions, getSymbols } from "@services/exchange";
import Transaction from "@models/transaction";
import Wallet from "@models/wallet";
import { Trade } from "ccxt";

export const syncTransactionsByUserId = async (userId: string) => {
  try {
    const wallets = await Wallet.find({ userId });

    const symbolsMap: { [k: string]: string[] } = {};
    for (const w of wallets) {
      if (w.walletType === "binance" && w.secret) {
        const symbols = await getSymbols(w.walletType, {
          apiKey: w.publicAddress,
          secret: w.secret,
        });
        symbolsMap[w.walletType] = symbols;
      }
    }

    for (const w of wallets) {
      if (!symbolsMap[w.walletType]) return;
      if (w.walletType === "binance" && w.secret) {
        const trades: Trade[] = [];
        await consumeTransactions(
          w.walletType,
          { apiKey: w.publicAddress, secret: w.secret },
          symbolsMap[w.walletType],
          w.lastSynced,
          (ts) => trades.push(...ts)
        );

        try {
          await Transaction.create(
            trades.map((t) => ({
              ...t,
              userId: w.userId,
              walletId: w._id,
              tradeId: t.id,
            }))
          );
          await Wallet.findByIdAndUpdate(w._id, {
            $set: { lastSynced: trades[trades.length - 1].timestamp },
          });
        } catch (error) {
          console.log(error);
        }
      }
    }
  } catch (error) {
    console.log(error);
  }
};
