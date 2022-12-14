import { readFile } from "fs/promises";
import { fileURLToPath } from "url";
import { join, dirname } from "path";

const path = join(
  dirname(fileURLToPath(import.meta.url)),
  "./files/fileToRead.txt"
);

const read = async () => {
  try {
    const data = await readFile(path, "utf-8");
    console.log(data);
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await read();
