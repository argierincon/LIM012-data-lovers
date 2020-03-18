import {
  device,
  showCards,
  orderAscMaxCP,
  orderDesMaxCP,
  filterFleeRate,
  filterSpawn,
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

// FUNCIÓN QUE MUESTRA A LOS POKEMON
let dataContainer = document.getElementById('dataContainer');
dataContainer.innerHTML = showCards(data.pokemon);


// FUNCIONES QUE ORDENAN POR MAX-CP ASCENDENTE
const ascMaxCP = document.getElementById('ascMaxCP');

ascMaxCP.addEventListener('click', () => {
  dataContainer = document.getElementById('dataContainer');
  dataContainer.innerHTML = showCards(orderAscMaxCP(data.pokemon));
});

// FUNCIONES QUE ORDENAN POR MAX-CP DESCENDENTE

const desMaxCP = document.getElementById('desMaxCP');

desMaxCP.addEventListener('click', () => {
  dataContainer = document.getElementById('dataContainer');
  dataContainer.innerHTML = showCards(orderDesMaxCP(data.pokemon));
});

// FUNCIONES QUE FILTRAN POR % DE HUÍDA
const notInCapture = document.getElementById('notInCapture');
const rateHigh = document.getElementById('high');
const rateMedium = document.getElementById('medium');
const rateLow = document.getElementById('low');

notInCapture.addEventListener('click', () => {
  dataContainer = document.getElementById('dataContainer');
  dataContainer.innerHTML = showCards(filterFleeRate(data.pokemon, 'not in capture'));
});

rateHigh.addEventListener('click', () => {
  dataContainer = document.getElementById('dataContainer');
  dataContainer.innerHTML = showCards(filterFleeRate(data.pokemon, 'high'));
});

rateMedium.addEventListener('click', () => {
  dataContainer = document.getElementById('dataContainer');
  dataContainer.innerHTML = showCards(filterFleeRate(data.pokemon, 'medium'));
});

rateLow.addEventListener('click', () => {
  dataContainer = document.getElementById('dataContainer');
  dataContainer.innerHTML = showCards(filterFleeRate(data.pokemon, 'low'));
});


const nulo = document.getElementById('nulo');
const spawnHigh = document.getElementById('highSpawn');
const spawnMedium = document.getElementById('mediumSpawn');
const spawnLow = document.getElementById('lowSpawn');

nulo.addEventListener('click', () => {
  dataContainer = document.getElementById('dataContainer');
  dataContainer.innerHTML = showCards(filterSpawn(data.pokemon, 'nulo'));
});

spawnHigh.addEventListener('click', () => {
  dataContainer = document.getElementById('dataContainer');
  dataContainer.innerHTML = showCards(filterSpawn(data.pokemon, 'high'));
});

spawnMedium.addEventListener('click', () => {
  dataContainer = document.getElementById('dataContainer');
  dataContainer.innerHTML = showCards(filterSpawn(data.pokemon, 'medium'));
});

spawnLow.addEventListener('click', () => {
  dataContainer = document.getElementById('dataContainer');
  dataContainer.innerHTML = showCards(filterSpawn(data.pokemon, 'low'));
});
// const a = data.pokemon.map((elem) => elem.encounter['base-flee-rate']);
// console.log(new Set(a));

const a = data.pokemon.map((elem) => elem['spawn-chance']);
console.log(new Set(a));
