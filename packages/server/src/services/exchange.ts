import ccxt, { Order } from "ccxt";
import { BINANCE_API_KEY, BINANCE_API_SECRET } from "@config/config";

const listExchanges = () => {
  return ccxt.exchanges;
};

const listTransactions = async (consumer: (o: Order[]) => void) => {
  const exchange = new ccxt.binance({
    apiKey: BINANCE_API_KEY,
    secret: BINANCE_API_SECRET,
  });
  const markets = await exchange.loadMarkets();
  const symbols = Object.keys(markets);
  let j = 0;
  for (let i = 0; i < symbols.length; i++) {
    const symbol = symbols[i];
    const result = await exchange.fetchOrders(symbol);
    if (result && result.length > 0) {
      j++;
      consumer(result);
    }
    if (j > 1) {
      break;
    }
  }
};

export { listExchanges, listTransactions };
