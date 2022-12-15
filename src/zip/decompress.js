import { createUnzip } from "node:zlib";
import { createReadStream, createWriteStream } from "fs";
import { fileURLToPath } from "url";
import { join, dirname } from "path";

const archive = join(
  dirname(fileURLToPath(import.meta.url)),
  "./files/fileToCompress.txt.gz"
);

const file = join(
  dirname(fileURLToPath(import.meta.url)),
  "./files/fileToCompress.txt"
);

const readableStream = createReadStream(archive);
const writableStream = createWriteStream(file);

const unzip = createUnzip();

const decompress = async () => {
  try {
    readableStream.pipe(unzip).pipe(writableStream);
  } catch (error) {
    throw new Error();
  }
};

await decompress();
