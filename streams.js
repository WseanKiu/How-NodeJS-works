const server = require("http").createServer();
const fs = require("fs");

server.on("request", (req, res) => {
  // // solution 1 NOT RECOMENDED
  // // for local or small files not in production
  // fs.readFile("test-file.txt", (err, data) => {
  //   if (err) console.log("ERROR reading file: ", err);
  //   res.end(data);
  // });

  // // Solution 2: Streaming the content file and send to client
  // const readable = fs.createReadStream("test-file.txt");
  // readable.on("data", (chunk) => {
  //   res.write(chunk);
  // });
  // readable.on("end", () => {
  //   res.end();
  // });
  // readable.on("error", (err) => {
  //   console.log(err);
  //   res.statusCode = 500;
  //   res.end("File not found!");
  // });
  // BACK PRESSURE - when the server receives data mush faster than sending to the client

  // Solution 3: Streaming and fix Back Pressure
  const readable = fs.createReadStream("test-file.txt");
  readable.pipe(res);
  // readableSource.pipe(writableDistination) pipe fixes BACK PRESSURE
});

// start the server!
server.listen(8000, "127.0.0.1", () => {
  console.log("waiting for requests...");
});
