import { getPricesInFiat } from "./coinMarketCap";
import { getBalance } from "./exchange";

jest.setTimeout(10000);

test("getPricesInFiat", async () => {
  const reponse = await getPricesInFiat(["BTC", "BNB"]);
  console.log(reponse);
});
