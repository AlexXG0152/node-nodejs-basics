import { createGzip } from "node:zlib";
import { createReadStream, createWriteStream } from "fs";
import { fileURLToPath } from "url";
import { join, dirname } from "path";

const file = join(
  dirname(fileURLToPath(import.meta.url)),
  "./files/fileToCompress.txt"
);

const archive = join(
  dirname(fileURLToPath(import.meta.url)),
  "./files/fileToCompress.txt.gz"
);

const readableStream = createReadStream(file);
const writableStream = createWriteStream(archive);

const gzip = createGzip();

const compress = async () => {
  try {
    readableStream.pipe(gzip).pipe(writableStream);
  } catch (error) {
    throw new Error();
  }
};

await compress();
