import axios from "axios";
import { CMC_API_KEY } from "@config/config";

const CMC_ID_CRYPTO: { [k: string]: number } = {
  AAVE: 7278,
  ATOM: 3794,
  AVAX: 5805,
  BNB: 1839,
  BTC: 1,
  BUSD: 4687,
  CTSI: 5444,
  DOT: 6636,
  ETH: 1027,
  FRONT: 5893,
  HNT: 5665,
  LINK: 1975,
  LUNA: 20314,
  LUNC: 4172,
  TNT: 1923,
  USDC: 3408,
  VET: 3077,
};

const CMC_ID_FIAT = {
  INR: 2796,
  USD: 2781,
};

export const getPricesInFiat = async (currencies: string[]) => {
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
