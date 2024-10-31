// Observer pattern

const EventEmitter = require("events");
const http = require("http");
const Emitter = new EventEmitter(); // Listener

class Sales extends EventEmitter {
  // ES6 Class inheritance
  constructor() {
    super(); // Superclass which is the EventEmitter
  }
}

const myEmitter = new Sales(); // Listener updated using a class

// Observer(s)
myEmitter.on("newSale", () => {
  console.log("There was a new Sale!");
});

// Observer(s)
myEmitter.on("newSale", () => {
  console.log("Customer name: Winston");
});

myEmitter.on("newSale", (stock) => {
  console.log(`Remaining stock ${stock} items.`);
});

myEmitter.emit("newSale", 9); // Emits the events

////// server creation
const server = http.createServer();

// server is on and listening for events
server.on("request", (req, res) => {
  console.log("Requrest received!");
  console.log(req.url);
  return res.end("Request received!");
});

server.on("request", (req, res) => {
  console.log("Another Requrest received!");
  console.log(req.url);
  return res.end("Another Request received!");
});

server.on("close", () => {
  return console.log("server closed");
});

// start the server!
server.listen(8000, "127.0.0.1", () => {
  console.log("waiting for requests...");
});
