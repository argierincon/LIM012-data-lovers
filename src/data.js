export const orderData = (data, property, condition) => {
  let result;
  if (condition === 'a-z') {
    result = data.sort((a, b) => {
      if (a[property] > b[property]) {
        return 1;
      } if (a[property] < b[property]) {
        return -1;
      }
      return 0;
    });
  } else {
    result = data.sort((a, b) => {
      if (a[property] < b[property]) {
        return 1;
      } if (a[property] > b[property]) {
        return -1;
      }
      return 0;
    });
  }
  return result;
};

export const orderMaxCP = (data, property, condition) => {
  let resultcp;
  if (condition === 'ascendente') {
    resultcp = data.sort((a, b) => (a.stats[property] - b.stats[property]));
  } else {
    resultcp = data.sort((a, b) => (b.stats[property] - a.stats[property]));
  }
  return resultcp;
};

export const orderFilter = (data, property, condition) => {
  const pokeType = data.filter(a => (a[property][0] === condition || a[property][1] === condition));
  return pokeType;
};
