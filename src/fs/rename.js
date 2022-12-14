import { rename } from "fs/promises";
import { fileURLToPath } from "url";
import { join, dirname } from "path";

const wrongFilename = join(
  dirname(fileURLToPath(import.meta.url)),
  "./files/wrongFilename.txt"
);
const properFilename = join(
  dirname(fileURLToPath(import.meta.url)),
  "./files/properFilename.md"
);

const renameF = async () => {
  try {
    await rename(wrongFilename, properFilename);
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await renameF();
