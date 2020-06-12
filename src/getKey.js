const getKey = () =>
  Math.random()
    .toString(36)
    .substr(2, 5);

const toLabel = label => ({
  label,
  key: getKey()
});

const toComplex = obj => ({
  ...obj,
  key: getKey()
});

export { getKey, toLabel, toComplex };
