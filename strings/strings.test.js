let captializeFirstLetter = require("./strings.js").captializeFirstLetter;
let titleCase = require("./strings.js").titleCase;
let snakeCase = require("./strings.js").snakeCase;
let kebabCase = require("./strings.js").kebabCase;
let camelCase = require("./strings.js").camelCase;
let aliasCase = require("./strings.js").aliasCase;

describe("captializeFirstLetter", () => {
  
  it("calitalises the first letter of a string", () => {
    expect(captializeFirstLetter("qwertyuio")).toEqual("Qwertyuio");
  });
  
});

describe("titleCase", () => {
  
  it("calitalises the first letter of each word", () => {
    expect(titleCase("a big  brown fox")).toEqual("A Big  Brown Fox");
  });
  
});

describe("snakeCase", () => {
  
  it("replaces blank spaces with underscores in loweer case", () => {
    expect(snakeCase("a Big  brown Fox")).toEqual("a_big__brown_fox");
    expect(snakeCase("  @a Big  brown Fox!  ")).toEqual("a_big__brown_fox");
  });
  
});

describe("kebabCase", () => {
  
  it("replaces blank spaces with hyphens in lower case", () => {
    expect(kebabCase("a Big  brown Fox")).toEqual("a-big--brown-fox");
    expect(kebabCase("  @a Big  brown Fox!  ")).toEqual("a-big--brown-fox");
  });
  
});

describe("camelCase", () => {
  
  it("Captilized the first letter of each word and removed blank spaces", () => {
    expect(camelCase("a Big  brown Fox")).toEqual("ABigBrownFox");
    expect(camelCase("  @a Big  brown Fox!  ")).toEqual("ABigBrownFox");
  });
  
});

describe("aliasCase", () => {
  
  it("Captilized the first letter of each word and removed blank spaces with a lower case first letter", () => {
    expect(aliasCase("a Big  brown Fox")).toEqual("aBigBrownFox");
    expect(aliasCase("  @a Big  brown Fox!  ")).toEqual("aBigBrownFox");
  });
  
});

