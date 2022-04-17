import ccxt, { Order } from "ccxt";
import "dotenv/config";

const listExchanges = () => {
  return ccxt.exchanges;
};

const listTransactions = async () => {
  const exchange = new ccxt.binance({
    apiKey: process.env.BINANCE_API_KEY,
    secret:  process.env.BINANCE_API_SECRET,
  });
  const markets = await exchange.loadMarkets();
  const symbols = Object.keys(markets);
  const transactions: Order[] = [];
  let j = 0;
  for (let i = 0; i < symbols.length; i++) {
    const symbol = symbols[i];
    const result = await exchange.fetchOrders(symbol);
    if (result && result.length > 0) {
      j++;
      transactions.push(...result);
    }
    if (j > 5) {
      break;
    }
  }
  return transactions;
};

export { listExchanges, listTransactions };
