import data from './data/pokemon/pokemon.js';

const pokeData = document.getElementById('pokeData');

let showData = '';
data.pokemon.forEach((element) => {
  const pokeDat = `
  <section id="pokeCard" class="pokeCard">
  <div class="number" id="number">${element.num}</div>
  <div class="imgPoke" id="imgPoke"><img src=${element.img} alt="" class="imgPkm"></div>
  <div class="namePoke" id="namePoke">${element.name.toUpperCase()}</div>
  </section>
  `;
  showData += pokeDat;
});

pokeData.innerHTML = showData;
