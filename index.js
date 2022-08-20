var pipe = require("./pipes/pipes.js").pipe;
var cachingPipe = require("./pipes/pipes.js").cachingPipe;
var queue = require("./queues/queues.js").queue;
var captializeFirstLetter = require("./strings/strings").captializeFirstLetter;
var titleCase = require("./strings/strings").titleCase;
var snakeCase = require("./strings/strings").snakeCase;
var kebabCase = require("./strings/strings").kebabCase;
var camelCase = require("./strings/strings").camelCase;
var aliasCase = require("./strings/strings").aliasCase;
var noEffect = require("./effect/effect").noEffect;
var deg2rad = require("./geometry/geometry").deg2rad;
var rad2deg = require("./geometry/geometry").rad2deg;
var polar2cartesian = require("./geometry/geometry").polar2cartesian;
var cartesian2polar = require("./geometry/geometry").cartesian2polar;
var viewBox = require("./svg/svg").viewBox;
var offset = require("./svg/svg").offset;
var cartesian2svg = require("./svg/svg").cartesian2svg;
var describePath = require("./svg/svg").describePath;
var describeArc = require("./svg/svg").describeArc;
var sleep = require("./threads/threads").sleep;


const utils = {
  effects: {
    noEffect: noEffect
  },
  geometry: {
    deg2rad: deg2rad,
    rad2deg: rad2deg,
    polar2cartesian: polar2cartesian,
    cartesian2polar: cartesian2polar
  },
  threads: {
    sleep: sleep
  },
  svg: {
    viewBox: viewBox,
    offset: offset,
    cartesian2svg: cartesian2svg,
    describePath: describePath,
    describeArc: describeArc
  },
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
