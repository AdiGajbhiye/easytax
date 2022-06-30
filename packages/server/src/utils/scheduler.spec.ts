import { scheduleNow } from "./scheduler";

jest.setTimeout(10000);

test("scheduler", async () => {
  const job = scheduleNow(() => console.log("this is log"));
  const dates = job.nextDates(10);
  expect(Array.isArray(dates)).toBe(false)
  console.log(
    Array.isArray(dates) ? dates.map((d) => d.toISO()) : dates.toISO()
  );
  await new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, 5000);
  });
});
