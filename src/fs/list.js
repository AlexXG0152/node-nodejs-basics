import { readdir } from "fs/promises";
import { fileURLToPath } from "url";
import { join, dirname } from "path";

const path = join(dirname(fileURLToPath(import.meta.url)), "./files");

const list = async () => {
  try {
    const fileList = await readdir(path);
    console.log(fileList);
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await list();
