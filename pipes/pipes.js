const pipe = (consumer) => {
  if (consumer && !(consumer instanceof Function)) {
    throw new TypeError("The consumer supplied to a pipe must be a Function");
  }
  const pipe = {
    accept: (item) => {
      if (pipe.consumer) {
        pipe.consumer(item);
      } else {
        throw "Unable to accept items into a non-chaching pipe which does not have a consumer";
      }
    },
    consumer: consumer,
    setConsumer: (consumer) => {
      if (consumer && !(consumer instanceof Function)) {
        throw new TypeError("The consumer supplied to a pipe must be a Function");
      }
      pipe.consumer = consumer;
    }
  };
  return pipe;
};

const cachingPipe = (consumer) => {
  if (consumer && !(consumer instanceof Function)) {
    throw new TypeError("The consumer supplied to a cachingPipe must be a Function");
  }
  const pipe = {
    items: [],
    accept: (item) => {
      if (pipe.consumer) {
        pipe.consumer(item);
      } else {
        pipe.items.push(item);
      }
    },
    consumer: consumer,
    setConsumer: (consumer) => {
      if (consumer && !(consumer instanceof Function)) {
        throw new TypeError("The consumer supplied to a cachingPipe must be a Function");
      }
      while (pipe.items.length > 0) {
        consumer(pipe.items.shift());
      }
      pipe.consumer = consumer;
    }
  };
  return pipe; 
};

module.exports = {
  pipe: pipe,
  cachingPipe: cachingPipe
}