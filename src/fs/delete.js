import { rm } from "fs/promises";
import { fileURLToPath } from "url";
import { join, dirname } from "path";

const path = join(
  dirname(fileURLToPath(import.meta.url)),
  "./files/fileToRemove.txt"
);

const remove = async () => {
  try {
    await rm(path);
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await remove();
