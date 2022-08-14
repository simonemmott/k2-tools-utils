var pipe = require("./pipes/pipes.js").pipe;
var cachingPipe = require("./pipes/pipes.js").cachingPipe;
var queue = require("./queues/queues.js").queue;
var captializeFirstLetter = require("./strings/strings").captializeFirstLetter;
var titleCase = require("./strings/strings").titleCase;
var snakeCase = require("./strings/strings").snakeCase;
var kebabCase = require("./strings/strings").kebabCase;
var camelCase = require("./strings/strings").camelCase;
var aliasCase = require("./strings/strings").aliasCase;


const utils = {
  pipes: {
    pipe: pipe,
    cachingPipe: cachingPipe
  },
  queues: {
    queue: queue
  },
  strings: {
    captializeFirstLetter: captializeFirstLetter,
    titleCase: titleCase,
    snakeCase: snakeCase,
    kebabCase: kebabCase,
    camelCase: camelCase,
    aliasCase: aliasCase
  }
};

module.exports = utils;
