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

export const filterFleeRate = (arrPkm, condition) => {
  let fleeRate = [];
  switch (condition) {
    case 'highRate':
      fleeRate = arrPkm.filter(pkm => parseFloat(pkm.encounter['base-flee-rate']) > 0.21 && parseFloat(pkm.encounter['base-flee-rate']) < 1.00);
      return fleeRate;
    case 'mediumRate':
      fleeRate = arrPkm.filter(pkm => parseFloat(pkm.encounter['base-flee-rate']) > 0.11 && parseFloat(pkm.encounter['base-flee-rate']) < 0.2);
      return fleeRate;
    case 'lowRate':
      fleeRate = arrPkm.filter(pkm => parseFloat(pkm.encounter['base-flee-rate']) > 0.0 && parseFloat(pkm.encounter['base-flee-rate']) < 0.1);
      return fleeRate;
    default:
      fleeRate = arrPkm.filter(pkm => pkm.encounter['base-flee-rate'] === 'not in capture');
      return fleeRate;
  }
};
