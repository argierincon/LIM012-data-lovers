import data from './data/pokemon/pokemon.js';
import {
  orderData,
  orderMaxCP,
  filterFleeRate,
  filterSpawn,
} from './data.js';

const pokeData = document.getElementById('pokeData');

const dataCards = (dataPokemon) => {
  let showData = '';
  dataPokemon.forEach((element) => {
    const pokeDat = `

       <section class="data1"> 
        <section class="card">  
         <section class="side front">    
          <section id="pokeCard" class="pokeCard">
            <div class="number" id="number">${element.num}</div>
            <div class="imgPoke" id="imgPoke"><img src=${element.img} alt="" class="imgPkm"></div>
            <div class="namePoke" id="namePoke">${element.name.toUpperCase()}</div>
          </section>
         </section>
         <section class= "side back">
          <section id="pokeCard2" class="pokeCard">
            <div class="number" id="number">${element.num}</div>
            <div class="maxCP" id="maxCP"><span class="cp"><span class:"blond">Max-CP:</span> ${element.stats['max-cp']}</span></div>
            <div class="pokeback" id="pokeback"><img src="" alt="" class=".backPoke"></div>
          </section>
         </section> 
        </section>
       </section> 
       `;
    showData += pokeDat;
  });

  pokeData.innerHTML = showData;
};
dataCards(data.pokemon);

const orderAlfabetic = document.querySelector('#order');
orderAlfabetic.addEventListener('change', () => {
  const orderSelect = orderAlfabetic.value;
  return dataCards(orderData(data.pokemon, 'name', orderSelect));
});

const orderMax = document.querySelector('#orderMaxCP');
orderMax.addEventListener('change', () => {
  const orderSelectcp = orderMax.value;
  return dataCards(orderMaxCP(data.pokemon, 'max-cp', orderSelectcp));
});

const fleeRate = document.getElementById('fleeRate');
fleeRate.addEventListener('change', () => {
  const rate = fleeRate.value;
  return dataCards(filterFleeRate(data.pokemon, rate));
});

const spawnChance = document.getElementById('spawnChance');
spawnChance.addEventListener('change', () => {
  const spawn = spawnChance.value;
  return dataCards(filterSpawn(data.pokemon, spawn));
});

const arr = data.pokemon.map((e) => parseFloat(e['spawn-chance']));
const huida = [...new Set(arr)];
console.log(huida.sort());
