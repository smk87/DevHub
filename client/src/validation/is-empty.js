const isEmpty = value => {
  return (
    //Curly bracket dile return dite hobe.
    value === undefined ||
    value == null ||
    (typeof value === "object" && Object.keys(value).length === 0) ||
    (typeof value === "string" && value.trim().length === 0)
  );
};

export default isEmpty;
