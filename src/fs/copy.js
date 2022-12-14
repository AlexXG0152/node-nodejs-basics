import { access, cp, mkdir } from "fs/promises";
import { fileURLToPath } from "url";
import { join, dirname } from "path";

const source = join(dirname(fileURLToPath(import.meta.url)), "./files");
const destination = join(
  dirname(fileURLToPath(import.meta.url)),
  "./files_copy"
);

const copy = async () => {
  try {
    await access(source);
    await mkdir(destination);
    await cp(source, destination, { recursive: true });
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await copy();
