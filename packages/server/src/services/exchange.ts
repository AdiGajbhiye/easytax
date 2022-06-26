import ccxt, { ExchangeId, Trade } from "ccxt";

interface Config {
  apiKey: string;
  secret: string;
}

const getSymbols = async (exhangeId: ExchangeId, config: Config) => {
  const exchange = new ccxt[exhangeId](config);
  const markets = await exchange.loadMarkets();
  return Object.keys(markets);
};

const consumeTransactions = async (
  exhangeId: ExchangeId,
  config: Config,
  symbols: string[],
  since: number,
  consumer: (o: Trade[]) => void
) => {
  const exchange = new ccxt[exhangeId](config);
  for (let i = 0; i < symbols.length; i++) {
    const symbol = symbols[i];
    let lastTrade: Trade | undefined = undefined;
    while (true) {
      const result: Trade[] = await exchange.fetchMyTrades(symbol, since, 10);
      if (result.length === 0) break;

      if (!lastTrade) {
        consumer(result);
      } else {
        const index = result.findIndex((t) => t.id === lastTrade?.id);
        if (index === result.length - 1) break;
        consumer(result.slice(index + 1));
      }
      lastTrade = result[result.length - 1];
      since = lastTrade.timestamp;
    }
  }
};

const getBalance = async (exhangeId: ExchangeId, config: Config) => {
  const exchange = new ccxt[exhangeId](config);
  const { total } = await exchange.fetchBalance();
  const balance: { [k: string]: number } = {};
  for (const [k, v] of Object.entries(total)) if (v > 0) balance[k] = v;
  return balance;
};

export { consumeTransactions, getBalance, getSymbols };
