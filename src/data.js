
// estas funciones son de ejemplo
// diana: reduje a dos funciones, una que ordena de la a-z/z-a
// y tambien la de ascendente y descendente PD: me dio dolor de cabeza

export const dataCards = (dataPokemon) => {
  let showData = '';
  dataPokemon.forEach((element, idx) => {
    if (idx > 11) return;
    const pokeDat = `
    <section class="card">
      <section class="side front">
        <section id="pokeCard" class="pokeCard">
          <div class="number" id="number">${element.num}</div>
          <div>
            <div class="imgPoke" id="imgPoke"><img src=${element.img} alt="" class="imgPkm"></div>
            <div class="namePoke" id="namePoke">${element.name.toUpperCase()}</div>
          </div>
        </section>
      </section>

      <section class="side back">
        <section id="pokeCard2" class="pokeCard">
          <div class="number" id="number">${element.num}</div>
          <div>
            <div class="maxCP" id="maxCP"><span class="cp">Max-CP: ${element.stats['max-cp']}</span></div>
          </div>
        </section>
      </section>
    </section>   
   `;
    showData += pokeDat;
  });
  return showData;
};

// export const dataMaxCP = (dataPokemon) => {
//   let showData = '';
//   dataPokemon.forEach((element) => {
//     const pokeDat = `
//     <section id="pokeData" class="data contain">
//     <section class="card">
//     <section class="side front">
//       <section id="pokeCard" class="pokeCard">
//         <div class="number" id="number">${element.num}</div>
//         <div class="imgPoke" id="imgPoke"><img src=${element.img} alt="" class="imgPkm"></div>
//         <div class="namePoke" id="namePoke">${element.name.toUpperCase()}</div>
//       </section>
//     </section>

//     <section class="side back">
//       <section id="pokeCard2" class="pokeCard">
//         <div class="number" id="number">${element.num}</div>
//         <div class="maxCP" id="maxCP"><span class="cp">
//            Max-CP: ${element.stats['max-cp']}
//          </span></div>
//       </section>
//     </section>
//   </section>
// </section>
//    `;
//     showData += pokeDat;
//   });
//   return showData;
// };

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
