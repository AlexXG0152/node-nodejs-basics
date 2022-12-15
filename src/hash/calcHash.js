import { readFile } from "fs/promises";
import { createHash } from "node:crypto";
import { fileURLToPath } from "url";
import { join, dirname } from "path";

const path = join(dirname(fileURLToPath(import.meta.url)), "./files/fileToCalculateHashFor.txt");

const calculateHash = async () => {
  try {
    const data = await readFile(path, "utf-8");
    const hex = createHash("sha256").update(data).digest("hex");
    console.log(hex);
  } catch (error) {
    throw new Error(error);
  }
};

await calculateHash();
