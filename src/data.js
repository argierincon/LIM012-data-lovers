export const device = () => {
  const dv = /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|SymbianOS|Windows Phone/i.test(window.navigator.userAgent) ? 'Mobile' : 'Desktop';
  return dv;
};

const sortFleeRate = (pkm1, pkm2) => pkm1.encounter['base-flee-rate'] - pkm2.encounter['base-flee-rate'];

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

export const orderAscMaxCP = (arrPkm) => {
  const arrMaxCP = arrPkm.sort((pkm1, pkm2) => pkm1.stats['max-cp'] - pkm2.stats['max-cp']);
  return arrMaxCP;
};

export const orderDesMaxCP = (arrPkm) => {
  const arrMaxCP = arrPkm.sort((pkm1, pkm2) => pkm2.stats['max-cp'] - pkm1.stats['max-cp']);
  return arrMaxCP;
};


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
