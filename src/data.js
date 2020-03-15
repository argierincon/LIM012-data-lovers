// estas funciones son de ejemplo

export const orderData = (data, property, condition) => {
  let result;
  if (condition === 'a-z' || condition === 'z-a') {
    result = data.sort((a, b) => {
      if (a[property] > b[property]) {
        return 1;
      } if (a[property] < b[property]) {
        return -1;
      }
      return 0;
    });
  }
  return result;
};

export const orderMaxCP = (data, property, condition) => {
  let resultcp;
  if (condition === 'ascendente' || condition === 'descendente') {
    resultcp = data.sort((a, b) => (a.stats[property] - b.stats[property]));
  }
  return resultcp;
};
