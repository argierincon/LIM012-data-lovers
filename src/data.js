export const device = () => {
  const dv = /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|SymbianOS|Windows Phone/i.test(window.navigator.userAgent) ? 'Mobile' : 'Desktop';
  return dv;
};

// PARA ORDENAR ASCENDENTE EL FILTRO DE % DE HUÍDA Y % APARICIÓN
const sortFleeRate = (pkm1, pkm2) => pkm1.encounter['base-flee-rate'] - pkm2.encounter['base-flee-rate'];
const sortSpawnChance = (pkm1, pkm2) => pkm1['spawn-chance'] - pkm2['spawn-chance'];

// FUNCIÓN PARA MOSTRAR LA DATA EN LOS CARDS
export const showCards = (arrPkm) => {
  let cards = '';
  arrPkm.forEach((element) => {
    const templateCard = `<section class="container">
      <section class="card">
        <div class="side front">
          <p class="pokeNumber">${element.num}</p>
          <div class="pokeImgName">
            <img src="${element.img}" alt="Pokémon Image" class="pokeImg">
            <p class="pokeName">${element.name}</p>
          </div>
        </div>
        <div class="side back">
          <p class="pokeNumber">${element.num}</p>
          <div class="pokeInfo">
            <p><span>Tipo: </span>${element.type[0]}</p>
            <p><span>Región: </span>${element.generation.name}</p>
            <p><span>Max-CP: </span>${element.stats['max-cp']}</p>
            <p><span>Huída: </span>${(element.encounter['base-flee-rate'] * 100).toFixed(2)}%</p>
            <p><span>Aparición: </span>${(element['spawn-chance'] * 100).toFixed(2)}%</p>
          </div>
        </div>
      </section>
    </section>`;
    cards += templateCard;
  });
  return cards;
};

export const alphaOrderAZ = (arrPkm) => {
  const orderAZ = arrPkm.sort((pkm1, pkm2) => {
    if (pkm1.name < pkm2.name) return -1;
    if (pkm1.name > pkm2.name) return 1;
    return 0;
  });
  return orderAZ;
};

export const alphaOrderZA = (arrPkm) => {
  const orderZA = arrPkm.sort((pkm1, pkm2) => {
    if (pkm1.name > pkm2.name) return -1;
    if (pkm1.name < pkm2.name) return 1;
    return 0;
  });
  return orderZA;
};

// FUNCIÓN QUE ORDENA POR MAX CP ASCENDENTE
export const orderAscMaxCP = (arrPkm) => {
  const arrMaxCP = arrPkm.sort((pkm1, pkm2) => pkm1.stats['max-cp'] - pkm2.stats['max-cp']);
  return arrMaxCP;
};

// FUNCIÓN QUE ORDENA POR MAX CP DESCENDENTE
export const orderDesMaxCP = (arrPkm) => {
  const arrMaxCP = arrPkm.sort((pkm1, pkm2) => pkm2.stats['max-cp'] - pkm1.stats['max-cp']);
  return arrMaxCP;
};

// FUNCIÓN QUE FILTRA POR % DE HUÍDA
export const filterFleeRate = (arrPkm, condition) => {
  let fleeRate = [];
  switch (condition) {
    case 'high':
      fleeRate = arrPkm.filter(pkm => parseFloat(pkm.encounter['base-flee-rate']) > 0.21 && parseFloat(pkm.encounter['base-flee-rate']) < 1.00);
      return fleeRate.sort(sortFleeRate);
    case 'medium':
      fleeRate = arrPkm.filter(pkm => parseFloat(pkm.encounter['base-flee-rate']) > 0.11 && parseFloat(pkm.encounter['base-flee-rate']) < 0.2);
      return fleeRate.sort(sortFleeRate);
    case 'low':
      fleeRate = arrPkm.filter(pkm => parseFloat(pkm.encounter['base-flee-rate']) > 0.0 && parseFloat(pkm.encounter['base-flee-rate']) < 0.1);
      return fleeRate.sort(sortFleeRate);
    default:
      fleeRate = arrPkm.filter(pkm => pkm.encounter['base-flee-rate'] === 'not in capture');
      return fleeRate;
  }
};

export const filterSpawn = (arrPkm, condition) => {
  let spawnChance = [];
  switch (condition) {
    case 'high':
      spawnChance = arrPkm.filter(pkm => parseFloat(pkm['spawn-chance']) > 5.10 && parseFloat(pkm['spawn-chance']) < 8.00);
      return spawnChance.sort(sortSpawnChance);
    case 'medium':
      spawnChance = arrPkm.filter(pkm => parseFloat(pkm['spawn-chance']) > 2.51 && parseFloat(pkm['spawn-chance']) < 5.00);
      return spawnChance.sort(sortSpawnChance);
    case 'low':
      spawnChance = arrPkm.filter(pkm => parseFloat(pkm['spawn-chance']) > 0.00 && parseFloat(pkm['spawn-chance']) < 2.50);
      return spawnChance.sort(sortSpawnChance);
    default:
      spawnChance = arrPkm.filter(pkm => pkm['spawn-chance'] === null);
      return spawnChance;
  }
};

export const filterRegion = (arrPkm, condition) => {
  let region = [];
  switch (condition) {
    case 'kanto':
      region = arrPkm.filter(pkm => pkm.generation.name === 'kanto');
      return region;
    default:
      region = arrPkm.filter(pkm => pkm.generation.name === 'johto');
      return region;
  }
};

export const searchPkm = (data, property, condition) => {
  const inputSearch = data.filter(element => (element[property]).indexOf(condition) !== -1);
  return inputSearch;
};
