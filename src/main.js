import data from './data/pokemon/pokemon.js';
import { orderAZ } from './data.js';


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

const pokeData1 = document.getElementById('pokeData1');
pokeData1.innerHTML = orderAZ.sortData(data);
// console.log(data);
