import { Trade } from "ccxt";
import { getBalance, listTransactions } from "./exchange";

jest.setTimeout(10000);
test("listTransactions", async () => {
  const result: Trade[] = [];
  await listTransactions(
    "binance",
    {
      apiKey:
        "W71NdUIxcfuPxk4Sb1Az68htbEHn6HrZlBcnUtGoTWI5pdvOY89NcpdyXDSE56Cz",
      secret:
        "iB2gz160Opek5lLDWiPrSVKhKnJPkdGGzP46nupLUiFf759opZGUCWY5F7dXJF0S",
    },
    (r) => {
      result.push(...r);
    }
  );
  console.log(result.length);
});

test("getBalance", async () => {
  const balance = await getBalance("binance", {
    apiKey: "W71NdUIxcfuPxk4Sb1Az68htbEHn6HrZlBcnUtGoTWI5pdvOY89NcpdyXDSE56Cz",
    secret: "iB2gz160Opek5lLDWiPrSVKhKnJPkdGGzP46nupLUiFf759opZGUCWY5F7dXJF0S",
  });
  console.log(balance);
});
