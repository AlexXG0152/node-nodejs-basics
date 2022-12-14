import { createReadStream } from "fs";
import { stdout } from "process";
import { fileURLToPath } from "url";
import { join, dirname } from "path";

const source = join(
  dirname(fileURLToPath(import.meta.url)),
  "./files/fileToRead.txt"
);
const readableStream = createReadStream(source);

const read = async () => {
  try {
    readableStream.on("open", () => {
      rs.pipe(stdout);
    });
    readableStream.on("end", () => {});
  } catch (error) {
    throw new Error();
  }
};

await read();
