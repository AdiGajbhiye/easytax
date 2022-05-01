import ccxt, { ExchangeId, Order } from "ccxt";

const listExchanges = () => {
  return ccxt.exchanges;
};

interface Config {
  apiKey: string;
  secret: string;
}

const listTransactions = async (
  exhange: ExchangeId,
  config: Config,
  consumer: (o: Order[]) => void
) => {
  const exchange = new ccxt[exhange](config);
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
