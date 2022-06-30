import { CronJob } from "cron";
import dayjs from "dayjs";

export const scheduleNow = (fn: () => void) => {
  const scheduledDate = dayjs().add(5, "s");
  const cronExpression = scheduledDate.toDate();
  const job = new CronJob(cronExpression, fn);
  job.start();
  return job;
};
