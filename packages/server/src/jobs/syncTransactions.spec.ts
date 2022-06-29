import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import { syncAllTransactions } from "./syncTransactions";
import Wallet from "@models/wallet";
import Transaction from "@models/transaction";
import { exchangeConfig, userConfig } from "@config/testConfig";

jest.setTimeout(10000);
let mongod: MongoMemoryServer;

beforeAll(async () => {
  mongod = await MongoMemoryServer.create();
  await mongoose.connect(mongod.getUri());
});

afterAll(async () => {
  await mongoose.connection.close();
  await mongod.stop();
});

test("syncAllTransactions", async () => {
  await Wallet.create({
    userId: userConfig.userId,
    walletType: exchangeConfig.exchangeId,
    publicAddress: exchangeConfig.config.apiKey,
    secret: exchangeConfig.config.secret,
  });
  await syncAllTransactions();
  const transactions = await Transaction.find();
  console.log(transactions);
});
