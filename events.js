// Observer pattern

const EventEmitter = require("events");

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
