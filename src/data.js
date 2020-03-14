// estas funciones son de ejemplo

export const dataCards = (dataPokemon) => {
  let showData = '';
  dataPokemon.forEach((element, idx) => {
    if (idx > 5) return;
    const pokeDat = `
  <section class="data">
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
  </section>     
   `;
    showData += pokeDat;
  });
  return showData;
};

export const orderData = (data) => {
  const order = data.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    }
    return -1;
  });
  return order;
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

export const orderMaxCP = (data) => {
  const order = data.sort((a, b) => a.stats['max-cp'] - b.stats['max-cp']);
  return order;
};
