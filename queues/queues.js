var cachingPipe = require("../pipes/pipes.js").cachingPipe;

function queue () {
  const items = [];
  for (let i=0; i< arguments.length; i++) {
    if (Array.isArray(arguments[i])) {
      arguments[i].forEach(item => items.push(item));
    } else {
      items.push(arguments[i]);
    }
  }
  const queue = cachingPipe();
  queue.items = items;
  queue.accept = (item) => {
    if (queue.resolve || queue.consumer) {
      if (queue.resolve) {
        queue.resolve(item);
        queue.resolve = undefined;
      } else {
        queue.consumer(item);
      }
    } else {
      queue.items.push(item);
    }
  };
  queue.resolve = undefined;
  queue.next = () => {
    if (queue.items.length > 0) {
      return new Promise((resolve) => {
        resolve(queue.items.shift());
      });
    } else {
      return new Promise((resolve) => {
        queue.resolve = resolve;
      });
    }
  };
  queue.size = () => {return queue.items.length;};
  queue.queued = () => {return (queue.items.length > 0);};
  queue.shift = () => {
    if (queue.items.length > 0) {
      return queue.items.shift();
    } 
  };
  queue.flush = () => {
    const items = queue.items;
    queue.items = [];
    return items;
  };
  return queue; 
}

module.exports = {
  queue: queue
}