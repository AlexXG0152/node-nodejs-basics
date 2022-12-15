import { stdin, stdout } from "process";
import { Transform } from "stream";

async function reverseStream() {
  return Transform({
    transform: function (str, _, next) {
      next(null, str.toString().split("").reverse().join("") + "\n");
    },
  });
}

const transform = async () => {
  try {
    stdin.pipe(await reverseStream()).pipe(stdout);
  } catch (error) {
    throw new Error(error);
  }
};

await transform();
