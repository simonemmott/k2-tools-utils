var pipe = require("./pipes/pipes.js").pipe;
var cachingPipe = require("./pipes/pipes.js").cachingPipe;
var queue = require("./queues/queues").queue;


const utils = {
  pipes: {
    pipe: pipe,
    cachingPipe: cachingPipe
  },
  queues: {
    queue: queue
  }
}

module.exports = utils;
