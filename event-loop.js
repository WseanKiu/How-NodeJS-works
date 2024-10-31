const fs = require("fs");
const crypto = require("crypto");

const start = Date.now();

process.env.UV_THREADPOOL_SIZE = 2;

setTimeout(() => console.log("Timer 1 finished!"), 0); // 2nd
setImmediate(() => console.log("Immediate 1 finised")); // 3rd

fs.readFile("test-file.txt", () => {
  console.log("I/O Finished!"); // 4th
  console.log("--------------------"); // 5th

  setTimeout(() => console.log("Timer 2 finished!"), 0); // 8th
  setTimeout(() => console.log("Timer 3 finished!"), 3000);
  setImmediate(() => console.log("Immediate 2 finised")); // 7th

  process.nextTick(() => console.log("Process.nextTick()")); // 6th

  crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
  console.log("Password incrypted!", Date.now() - start, "ms");

  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log("Password incrypted!", Date.now() - start, "ms");
  });
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log("Password incrypted!", Date.now() - start, "ms");
  });
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log("Password incrypted!", Date.now() - start, "ms");
  });
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log("Password incrypted!", Date.now() - start, "ms");
  });
});

console.log("Hello World! (top level code~!)"); // Executes 1st!
