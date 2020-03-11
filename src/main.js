import data from './data/pokemon/pokemon.js';

const pokeData = document.getElementById('pokeData');

let showData = '';
data.pokemon.forEach((elem) => {
  const pokeDat = `
  <section id="pokeCard" class="pokeCard">
  <div class="number" id="number">${elem.num}</div>
  <div class="imgPoke" id="imgPoke"><img src=${elem.img} alt="" class="imgPkm"></div>
  <div class="namePoke" id="namePoke">${elem.name.toUpperCase()}</div>
  </section>
  `;
  showData += pokeDat;
});

pokeData.innerHTML = showData;

console.log(data);
