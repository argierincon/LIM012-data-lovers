// estas funciones son de ejemplo

export const dataCards = (dataPokemon) => {
  let showData = '';
  dataPokemon.forEach((element) => {
    const pokeDat = `
        <section id="pokeCard" class="pokeCard">
        <div class="number" id="number">${element.num}</div>
        <div class="imgPoke" id="imgPoke"><img src=${element.img} alt="" class="imgPkm"></div>
        <div class="namePoke" id="namePoke">${element.name.toUpperCase()}</div>
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

export const dataMaxCP = (dataPokemon) => {
  let showData = '';
  dataPokemon.forEach((element) => {
    const pokeDat = `
        <section id="pokeCard2" class="pokeCard">
        <div class="number" id="number">${element.num}</div>
        <div class="maxCP" id="maxCP"><span class="cp">Max-CP: ${element.stats['max-cp']}</span></div>
        </section>
   `;
    showData += pokeDat;
  });
  return showData;
};

export const orderMaxCP = (data) => {
  const order = data.sort((a, b) => a.stats['max-cp'] - b.stats['max-cp']);
  return order;
};
