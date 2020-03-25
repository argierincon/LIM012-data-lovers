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
      if (a[property] < b[property]) {
        return 1;
      }
      return -1;
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

// FUNCIONES QUE ORDENAN ASCENDENTEMENTE LA DATA FILTRADA POR % DE HUÍDA Y APARICIÓN
const sortFleeRate = (pkm1, pkm2) => pkm1.encounter['base-flee-rate'] - pkm2.encounter['base-flee-rate'];
const sortSpawnChance = (pkm1, pkm2) => pkm1['spawn-chance'] - pkm2['spawn-chance'];


// FUNCIÓN QUE FILTRA POR % DE HUÍDA
export const filterFleeRate = (arrPkm, condition) => {
  let fleeRate = [];
  switch (condition) {
    case 'highRate':
      fleeRate = arrPkm.filter(pkm => parseFloat(pkm.encounter['base-flee-rate']) > 0.21 && parseFloat(pkm.encounter['base-flee-rate']) < 1.00);
      return fleeRate.sort(sortFleeRate);
    case 'mediumRate':
      fleeRate = arrPkm.filter(pkm => parseFloat(pkm.encounter['base-flee-rate']) > 0.11 && parseFloat(pkm.encounter['base-flee-rate']) < 0.2);
      return fleeRate.sort(sortFleeRate);
    case 'lowRate':
      fleeRate = arrPkm.filter(pkm => parseFloat(pkm.encounter['base-flee-rate']) > 0.0 && parseFloat(pkm.encounter['base-flee-rate']) < 0.1);
      return fleeRate.sort(sortFleeRate);
    default:
      fleeRate = arrPkm.filter(pkm => pkm.encounter['base-flee-rate'] === 'not in capture');
      return fleeRate;
  }
};

// FUNCIÓN QUE FILTRA POR % DE APARICIÓN
export const filterSpawn = (arrPkm, condition) => {
  let spawnChance = [];
  switch (condition) {
    case 'highSpawn':
      spawnChance = arrPkm.filter(pkm => parseFloat(pkm['spawn-chance']) > 5.10 && parseFloat(pkm['spawn-chance']) < 8.00);
      return spawnChance.sort(sortSpawnChance);
    case 'mediumSpawn':
      spawnChance = arrPkm.filter(pkm => parseFloat(pkm['spawn-chance']) > 2.51 && parseFloat(pkm['spawn-chance']) < 5.00);
      return spawnChance.sort(sortSpawnChance);
    case 'lowSpawn':
      spawnChance = arrPkm.filter(pkm => parseFloat(pkm['spawn-chance']) > 0.00 && parseFloat(pkm['spawn-chance']) < 2.50);
      return spawnChance.sort(sortSpawnChance);
    default:
      spawnChance = arrPkm.filter(pkm => pkm['spawn-chance'] === null);
      return spawnChance;
  }
};

export const searchText = (data, property, condition) => {
  const searchPkm = data.filter(element => (element[property]).indexOf(condition) !== -1);
  return searchPkm;
};

export const calculateSTAB = (attackType) => {
  const result = attackType.map((elem) => {
    const res = elem['base-damage'];
    return res * 1.2;
  });
  return result;
};

export const calculateDPS = (attackType, stab) => {
  const result = attackType.map((elem) => {
    const res = elem['base-damage'];
    const resTime = elem['move-duration-seg'];
    return (res * stab) / resTime;
  });
  return result;
};

export const calculateEPS = (attackType) => {
  const result = attackType.map(elem => elem.energy / elem['move-duration-seg']);
  return result;
};
