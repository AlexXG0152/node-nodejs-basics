import { createWriteStream } from "fs";
import { stdin } from "process";
import { fileURLToPath } from "url";
import { join, dirname } from "path";

const source = join(
  dirname(fileURLToPath(import.meta.url)),
  "./files/fileToWrite.txt"
);

const writableStream = createWriteStream(source, { flags: "a" });

const write = async () => {
  try {
    stdin.pipe(writableStream, { end: false });
  } catch (error) {
    throw new Error();
  }
};

await write();
