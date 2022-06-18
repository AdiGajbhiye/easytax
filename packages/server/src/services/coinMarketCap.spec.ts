import { getPricesInFiat } from "./coinMarketCap";
import { getBalance } from "./exchange";

jest.setTimeout(10000);

test("getPricesInFiat", async () => {
  const reponse = await getPricesInFiat([
    "BTC",
    "ETH",
    "BNB",
    "LINK",
    "TNT",
    "VET",
    "USDC",
    "ATOM",
    "BUSD",
    "CTSI",
    "HNT",
    "DOT",
    "LUNA",
    "AVAX",
    "AAVE",
    "FRONT",
    "LUNC",
  ]);
  console.log(reponse);
});
