export const orderData = (data, property, condition) => {
  let result;
  if (condition === 'a-z') {
    result = data.sort((a, b) => {
      if (a[property] > b[property]) {
        return 1;
      }
      return -1;
    });
  } else {
    result = data.sort((a, b) => {
      if (a[property] > b[property]) {
        return -1;
      }
      return 1;
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

export const orderFilterType = (data, property, condition) => {
  const pokeType = data.filter(a => (a[property][0] === condition || a[property][1] === condition));
  return pokeType;
};

export const orderFilterRegion = (data, property, condition) => {
  const pokeRegion = data.filter(element => element.generation[property] === condition);
  return pokeRegion;
};
