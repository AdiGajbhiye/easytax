import axios from "axios";
import { CMC_API_KEY } from "@config/config";

type CryptoCurrency = "BTC" | "BNB";

const CMC_ID_CRYPTO: { [k: string]: number } = {
  BTC: 1,
  BNB: 1839,
  INR: 2796,
  USD: 2781,
};

const CMC_ID_FIAT = {
  INR: 2796,
  USD: 2781,
};

export const getPricesInFiat = async (currencies: CryptoCurrency[]) => {
  const response = await axios.get(
    "https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest",
    {
      params: {
        id: currencies.map((c) => CMC_ID_CRYPTO[c]).join(","),
        convert_id: CMC_ID_FIAT.INR,
      },
      headers: { "X-CMC_PRO_API_KEY": CMC_API_KEY },
    }
  );

  const { data } = response.data;
  const prices: { [k: string]: number } = {};
  for (const c of currencies)
    prices[c] = data[CMC_ID_CRYPTO[c]].quote[CMC_ID_FIAT.INR].price;
  return prices;
};
