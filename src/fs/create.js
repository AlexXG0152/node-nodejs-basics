import { writeFile } from "fs/promises";
import { fileURLToPath } from "url";
import { join, dirname } from "path";

const path = join(dirname(fileURLToPath(import.meta.url)), "./files/fresh.txt");

const create = async () => {
  try {
    await writeFile(path, "I am fresh and young", { flag: "wx" });
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await create();
