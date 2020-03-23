import {
  device,
  showCards,
  orderAscMaxCP,
  orderDesMaxCP,
  filterFleeRate,
  filterSpawn,
  alphaOrderAZ,
  alphaOrderZA,
  filterRegion,
  searchPkm,
} from './data.js';

import data from './data/pokemon/pokemon.js';

// PARA EL DESLIZANTE DEL MENU EN MOBILE
if (device() === 'Mobile') {
  document.querySelectorAll('.menu>ul>li>span').forEach((elem) => {
    elem.addEventListener('click', (e) => {
      e.currentTarget.parentElement.querySelector('.subMenu').classList.toggle('hide');
    });
  });
}

// PARA EL BUSCADOR DESPLEGABLE
const iconSearch = document.getElementById('searchToggle');
iconSearch.addEventListener('click', () => {
  document.getElementById('searchBox').classList.toggle('searchBox-opened');
});

// FUNCIÓN QUE MUESTRA A LOS POKEMON
const dataContainer = document.getElementById('dataContainer');
dataContainer.innerHTML = showCards(data.pokemon);

const az = document.getElementById('orderAZ');

az.addEventListener('click', () => {
  dataContainer.innerHTML = showCards(alphaOrderAZ(data.pokemon));
});

const za = document.getElementById('orderZA');

za.addEventListener('click', () => {
  dataContainer.innerHTML = showCards(alphaOrderZA(data.pokemon));
});

// FUNCIONES QUE ORDENAN POR MAX-CP ASCENDENTE
const ascMaxCP = document.getElementById('ascMaxCP');

ascMaxCP.addEventListener('click', () => {
  dataContainer.innerHTML = showCards(orderAscMaxCP(data.pokemon));
});

// FUNCIONES QUE ORDENAN POR MAX-CP DESCENDENTE

const desMaxCP = document.getElementById('desMaxCP');

desMaxCP.addEventListener('click', () => {
  dataContainer.innerHTML = showCards(orderDesMaxCP(data.pokemon));
});

// FUNCIONES QUE FILTRAN POR % DE HUÍDA
const notInCapture = document.getElementById('notInCapture');
const rateHigh = document.getElementById('high');
const rateMedium = document.getElementById('medium');
const rateLow = document.getElementById('low');

notInCapture.addEventListener('click', () => {
  dataContainer.innerHTML = showCards(filterFleeRate(data.pokemon, 'not in capture'));
});

rateHigh.addEventListener('click', () => {
  dataContainer.innerHTML = showCards(filterFleeRate(data.pokemon, 'high'));
});

rateMedium.addEventListener('click', () => {
  dataContainer.innerHTML = showCards(filterFleeRate(data.pokemon, 'medium'));
});

rateLow.addEventListener('click', () => {
  dataContainer.innerHTML = showCards(filterFleeRate(data.pokemon, 'low'));
});

// FUNCIÓN QUE FILTRA POR % APARICIÓN
const nulo = document.getElementById('nulo');
const spawnHigh = document.getElementById('highSpawn');
const spawnMedium = document.getElementById('mediumSpawn');
const spawnLow = document.getElementById('lowSpawn');

nulo.addEventListener('click', () => {
  dataContainer.innerHTML = showCards(filterSpawn(data.pokemon, 'nulo'));
});

spawnHigh.addEventListener('click', () => {
  dataContainer.innerHTML = showCards(filterSpawn(data.pokemon, 'high'));
});

spawnMedium.addEventListener('click', () => {
  dataContainer.innerHTML = showCards(filterSpawn(data.pokemon, 'medium'));
});

spawnLow.addEventListener('click', () => {
  dataContainer.innerHTML = showCards(filterSpawn(data.pokemon, 'low'));
});

const kanto = document.getElementById('kanto');

kanto.addEventListener('click', () => {
  dataContainer.innerHTML = showCards(filterRegion(data.pokemon, 'kanto'));
});

const jhoto = document.getElementById('jhoto');

jhoto.addEventListener('click', () => {
  dataContainer.innerHTML = showCards(filterRegion(data.pokemon, 'jhoto'));
});

const inputSearch = document.getElementById('searchPkm');
inputSearch.addEventListener('keyup', () => {
  const pokeName = inputSearch.value.toLowerCase().trim();
  dataContainer.innerHTML = showCards(searchPkm(data.pokemon, 'name', pokeName));
  if (dataContainer.innerHTML !== data.pokemon.name.indexOF()) {
    dataContainer.innerHTML = `
    <section class="errorMessage">
      <p class="message"> Ningún POKÉMON coincide con tu búsqueda</p>
    </section>
    `;
  }
});

/* const a = data.pokemon.map((elem) => elem.encounter['base-flee-rate']);
 console.log(new Set(a));
const a = data.pokemon.map((elem) => elem['spawn-chance']);
console.log(new Set(a)); */
