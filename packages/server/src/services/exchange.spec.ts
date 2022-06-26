import { Trade } from "ccxt";
import { getBalance, consumeTransactions, getSymbols } from "./exchange";

jest.setTimeout(10000);

const exchangeId = "binance";
const config = {
  apiKey: "W71NdUIxcfuPxk4Sb1Az68htbEHn6HrZlBcnUtGoTWI5pdvOY89NcpdyXDSE56Cz",
  secret: "iB2gz160Opek5lLDWiPrSVKhKnJPkdGGzP46nupLUiFf759opZGUCWY5F7dXJF0S",
};

test("getSymbols", async () => {
  const symbols = await getSymbols(exchangeId, config);
  console.log(symbols);
});

test("consumeTransactions", async () => {
  const result: Trade[] = [];
  await consumeTransactions(exchangeId, config, ["LUNAUSDT"], 0, (r) => {
    result.push(...r);
  });
  console.log(result.length);
});

test("getBalance", async () => {
  const balance = await getBalance(exchangeId, config);
  console.log(balance);
});
