
const captializeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const titleCase = (string) => {
  var lastCharWasBlank = true;
  result = "";
  for (var i = 0; i<string.length; i++) {
    result = result + (lastCharWasBlank ? string[i].toUpperCase() : string[i]);
    lastCharWasBlank = (string[i].match(/\S/) === null);
  }
  return result;
//  return string.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
};

const snakeCase = (string) => {
  return string.replace(/(\W)/g, " ")
    .trim()
    .toLowerCase()
    .replace(/(\W)/g, "_");
  
};

const kebabCase = (string) => {
  return string.replace(/(\W)/g, " ")
    .trim()
    .toLowerCase()
    .replace(/(\W)/g, "-");
};

const camelCase = (string) => {
  return titleCase(string.replace(/(\W)/g, " ")
      .trim()
      .toLowerCase()
    ).replace(/(\W)/g, "");
};

const aliasCase = (string) => {
  string = camelCase(string);
  return string.charAt(0).toLowerCase() + string.slice(1);
};

module.exports = {
  captializeFirstLetter: captializeFirstLetter,
  titleCase: titleCase,
  snakeCase: snakeCase,
  kebabCase: kebabCase,
  camelCase: camelCase,
  aliasCase: aliasCase,
  
}