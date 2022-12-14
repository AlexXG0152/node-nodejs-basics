import { fork } from "child_process";
import { fileURLToPath } from "url";
import { join, dirname } from "path";

const source = join(
  dirname(fileURLToPath(import.meta.url)),
  "./files/script.js"
);

const spawnChildProcess = async (args) => {
  const child = fork(source, args);
  child.on("data", function (message) {
    console.log(`Message from child.js: ${message}`);
  });
  child.on("close", function (code) {
    console.log("child process exited with code " + code);
  });
  child.send(args);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(["--cat", "--dog", "--parrot"]);
