import "dotenv/config";

export const PORT = process.env.PORT;
export const MONGO_URI = process.env.MONGO_URI || "";
export const JWT_SECRET = process.env.JWT_SECRET || "";
export const CMC_API_KEY = process.env.CMC_API_KEY || "";
