// console.log(arguments);

// // The Wrapper Function
// console.log(require("module").wrapper); // function (exports, require, module, __filename, __dirname)

// Module.exports
const Calculator = require("./test-module-1"); // if importing Class use UpperCase
const calc1 = new Calculator();
console.log(calc1.add(1, 2));

// exports
const calc2 = require("./test-module-2");
console.log(calc2.multiply(1, 4));
// can be destructure like this
const { add, multiply } = require("./test-module-2");
console.log(add(1, 4));
console.log(multiply(1, 4));
