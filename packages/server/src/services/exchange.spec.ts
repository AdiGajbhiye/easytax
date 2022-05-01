import { Trade } from "ccxt";
import { listExchanges, listTransactions } from "./exchange";

test("listExchanges", () => {
  console.log(listExchanges());
});

jest.setTimeout(10000);
test("listTransactions", async () => {
  const result: Trade[] = [];
  await listTransactions(
    "binance",
    {
      apiKey:
        "f9aCczHftjEdJ7NgmuUiIUPhLgE3VaZyLKx4WOUXeLXNnNSusS2BY53K4n2d081c",
      secret:
        "LixPanbCCFPWdnnuh6G5whm4r7U4rHMLy4OhVcLt22NRBl4NS618bXxokgxMiRI4",
    },
    (r) => {
      result.push(...r);
    }
  );
  console.log(result);
  console.log(result.length);
});
