import ccxt, { ExchangeId, Trade, Params } from "ccxt";

interface Config {
  apiKey: string;
  secret: string;
}

const listTransactions = async (
  exhange: ExchangeId,
  config: Config,
  consumer: (o: Trade[]) => void
) => {
  const exchange = new ccxt[exhange](config);
  const markets = await exchange.loadMarkets();
  const symbols = Object.keys(markets);
  let j = 0;
  for (let i = 0; i < symbols.length; i++) {
    const symbol = symbols[i];
    let since = 0;
    let lastTrade: Trade | undefined = undefined;
    while (true) {
      const result: Trade[] = await exchange.fetchMyTrades(
        "LUNAUSDT",
        since,
        10
      );
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
    j++;
    if (j > 1) {
      break;
    }
  }
};

const getBalance = async (exhange: ExchangeId, config: Config) => {
  const exchange = new ccxt[exhange](config);
  console.log(exchange.balance);
  
  const balance = await exchange.fetchTotalBalance();
  return balance;
};

export { listTransactions, getBalance };
