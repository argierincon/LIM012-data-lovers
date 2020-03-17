import {
  showCards,
  orderAscMaxCP,
  orderDesMaxCP,
  filterFleeRate,
} from './data.js';

import data from './data/pokemon/pokemon.js';

// PARA EL DESLIZANTE DEL MENU EN MOBILE
document.querySelectorAll('.menu>ul>li>span').forEach((elem) => {
  elem.addEventListener('click', (e) => {
    e.currentTarget.parentElement.querySelector('.subMenu').classList.toggle('hide');
  });
});

// FUNCIÓN QUE MUESTRA A LOS POKEMON
let dataContainer = document.getElementById('dataContainer');
dataContainer.innerHTML = showCards(data.pokemon);


// FUNCIONES QUE ORDENAN POR MAX-CP ASC Y DESC
const ascMaxCP = document.getElementById('ascMaxCP');

ascMaxCP.addEventListener('click', () => {
  dataContainer = document.getElementById('dataContainer');
  dataContainer.innerHTML = showCards(orderAscMaxCP(data.pokemon));
});

const desMaxCP = document.getElementById('desMaxCP');

desMaxCP.addEventListener('click', () => {
  dataContainer = document.getElementById('dataContainer');
  dataContainer.innerHTML = showCards(orderDesMaxCP(data.pokemon));
});

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

// const a = data.pokemon.map((elem) => elem.encounter['base-flee-rate']);
// console.log(new Set(a));
