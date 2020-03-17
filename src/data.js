// estas funciones son de ejemplo

export const example = () => 'example';

export const anotherExample = () => 'OMG';


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

export const ascMaxCP = (arrPkm) => {
  const arrMaxCP = arrPkm.sort((pkm1, pkm2) => pkm1.stats['max-cp'] - pkm2.stats['max-cp']);
  return arrMaxCP;
};

export const desMaxCP = (arrPkm) => {
  const arrMaxCP = arrPkm.sort((pkm1, pkm2) => {
    if (pkm1.stats['max-cp'] < pkm2.stats['max-cp']) return 1;
    if (pkm1.stats['max-cp'] === pkm2.stats['max-cp']) return 0;
    return -1;
  });
  return arrMaxCP;
};

// export const ascMaxCP = (arrPkm) => {
//   const arrMaxCP = arrPkm.sort((pkm1, pkm2) => {
//     if (pkm1.stats['max-cp'] > pkm2.stats['max-cp']) return 1;
//     if (pkm1.stats['max-cp'] === pkm2.stats['max-cp']) return 0;
//     return -1;
//   });
//   return arrMaxCP;
// };

// export const desMaxCP = (arrPkm) => {
//   const arrMaxCP = arrPkm.sort((pkm1, pkm2) => {
//     if (pkm1.stats['max-cp'] < pkm2.stats['max-cp']) return 1;
//     if (pkm1.stats['max-cp'] === pkm2.stats['max-cp']) return 0;
//     return -1;
//   });
//   return arrMaxCP;
// };
