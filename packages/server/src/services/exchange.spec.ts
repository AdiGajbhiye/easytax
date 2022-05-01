import { listExchanges, listTransactions } from "./exchange";

test("listExchanges", () => {
  console.log(listExchanges());
});

test("listTransactions", async () => {
  await listTransactions(console.log);
});
