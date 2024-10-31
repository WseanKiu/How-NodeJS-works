# How-NodeJS-works

How Node JS works in the background
Single threaded app that works in event loop but has 4 default Thread pool for offloading blocking codes...
`process.env.UV_THREADPOOL_SIZE = 4;`

### Event-loop

The heart of the nodejs architecture

```
- Node.js is build around callback functions
- All the application code that is inside callback funtions(Non-top-level-code)
- Event-driven architechture
  * Events emitted
  * Event loops picks them up
  * Callbacks are called
- Event loop does the orchestration
```

#### Event-loop phases

```
start*
Expired timer callbacks
  e.g. setTimeout(() => {...})
I/O polling and callbacks
  e.g. Input/Output Events, Networking, File Access
setImmediate callbacks
  e.g. setImmediate(() => {...})
close-callbacks
  e.g. server shotdown callbacks
repeat* or end*

process.nexttick*() -> (Microtask(s)) after & before the callback phase(inbetween each phase(s))
```

WRAPPER / DEFUALT / GLOBAL VARIABLES

### The Wrapper Function

console.log(require("module").wrapper); // function (exports, require, module, **filename, **dirname)
