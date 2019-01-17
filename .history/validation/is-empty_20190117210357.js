const isEmpty = value =>
  //Curly bracket dile return dite hobe.
  value === undefined ||
  value == null ||
  (typeof value === "object" && Object.keys(value).length === 0) ||
  (typeof value === "string" && value.trim().length === 0);

module.exports = isEmpty;
