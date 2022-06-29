import { consumeTransactions, getSymbols } from "@services/exchange";
import Transaction from "@models/transaction";
import Wallet from "@models/wallet";

export const syncAllTransactions = async () => {
  try {
    const wallets = await Wallet.find();
    console.log("1 -> ", wallets);

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
        let lastSynced = 0;
        await consumeTransactions(
          w.walletType,
          { apiKey: w.publicAddress, secret: w.secret },
          symbolsMap[w.walletType],
          w.lastSynced,
          async (trades) => {
            console.log("3 -> ", trades);

            try {
              await Transaction.create(
                trades.map((t) => ({
                  ...t,
                  userId: w.userId,
                  walletId: w._id,
                  tradeId: t.id,
                }))
              );
              lastSynced = trades[trades.length - 1].timestamp;
            } catch (error) {
              console.log(error);
            }
          }
        );

        await Wallet.findByIdAndUpdate(w._id, { $set: { lastSynced } });
        console.log("4 -> done ");
      }
    }
  } catch (error) {
    console.log(error);
  }
};
