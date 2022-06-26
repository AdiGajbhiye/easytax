import { exchangeConfig } from "@config/testConfig";
import { Trade } from "ccxt";
import { getBalance, consumeTransactions, getSymbols } from "./exchange";

jest.setTimeout(10000);

test("getSymbols", async () => {
  const { exchangeId, config } = exchangeConfig;
  const symbols = await getSymbols(exchangeId, config);
  console.log(symbols);
});

test("consumeTransactions", async () => {
  const { exchangeId, config } = exchangeConfig;
  const result: Trade[] = [];
  await consumeTransactions(exchangeId, config, ["LUNAUSDT"], 0, (r) => {
    result.push(...r);
  });
  console.log(result.length);
});

test("getBalance", async () => {
  const { exchangeId, config } = exchangeConfig;
  const balance = await getBalance(exchangeId, config);
  console.log(balance);
});
