import { Worker } from "worker_threads";
import { cpus } from "os";
import { fileURLToPath } from "url";
import { join, dirname } from "path";

const workerFile = join(dirname(fileURLToPath(import.meta.url)), "./worker.js");

const THREAD_COUNT = cpus().length;

function createWorker(num) {
  return new Promise(function (resolve, reject) {
    const worker = new Worker(workerFile, { workerData: { thread: num } });
    worker.on("message", (data) => resolve({ status: "resolved", data }));
    worker.on("error", () => resolve({ status: "error", data: null }));
  });
}

const performCalculations = async () => {
  const workerPromises = [];
  const threadResults = [];
  for (let i = 0; i < THREAD_COUNT; i++) {
    workerPromises.push(createWorker(10 + i));
  }
  await Promise.allSettled(workerPromises).then((results) =>
    results.forEach((result) => threadResults.push(result))
  );
  console.log(threadResults);
};

await performCalculations();
