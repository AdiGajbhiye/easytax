import "dotenv/config";

export const PORT = process.env.PORT;

export const BINANCE_API_KEY = process.env.BINANCE_API_KEY;
export const BINANCE_API_SECRET = process.env.BINANCE_API_SECRET;

export const MONGO_URI = process.env.MONGO_URI || "";
