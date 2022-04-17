import { listExchanges, listTransactions } from "./exchange";

test("listExchanges", () => {
  console.log(listExchanges());
});

test("listTransactions", async () => {
  const transactions = await listTransactions();
  console.log(transactions);
  console.log(transactions.length);
});
