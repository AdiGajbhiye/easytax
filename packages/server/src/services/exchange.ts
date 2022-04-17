import ccxt from "ccxt";

const listExchanges = () => {
  return ccxt.exchanges;
};

export { listExchanges };
