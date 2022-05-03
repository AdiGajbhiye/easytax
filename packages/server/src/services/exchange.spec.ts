import { Trade } from "ccxt";
import { listTransactions } from "./exchange";

jest.setTimeout(10000);
test("listTransactions", async () => {
  const result: Trade[] = [];
  await listTransactions(
    "binance",
    {
      apiKey:
        "BZsn6iTHBcFdvQ6f5qaVCvmDUsMsgJKKXMPXF26TLcjfHY1O7DH9q7pGY2ACEDUx",
      secret:
        "JG40vX4poc5rybQqMciGHIxiyFSQRGhmIVVptdu21AUcPiapnRS6GD7wiR3JSB9E",
    },
    (r) => {
      result.push(...r);
    }
  );
  console.log(result.length);
});
