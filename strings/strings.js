
const captializeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const titleCase = (string) => {
  return string.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
};

const snakeCase = (string) => {
  return string.toLowerCase().replace(/(\W)/g, "_");
};

const kebabCase = (string) => {
  return string.toLowerCase().replace(/(\W)/g, "-");
};

const camelCase = (string) => {
  return titleCase(string).replace(/(\W)/g, "");
};

const aliasCase = (string) => {
  string = titleCase(string).replace(/(\W)/g, "");
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