import {
  showCards,
  ascMaxCP,
  desMaxCP,
  // ascFleeRate,
  // desFleeRate,
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

const ascMaxCPd = document.getElementById('ascMaxCP');
const desMaxCPd = document.getElementById('desMaxCP');

ascMaxCPd.addEventListener('click', () => {
  dataContainer = document.getElementById('dataContainer');
  dataContainer.innerHTML = showCards(desMaxCP(data.pokemon));
});

// const ascRate = document.getElementById('ascRate');

// ascRate.addEventListener('click', () => {
//   dataContainer = document.getElementById('dataContainer');
//   dataContainer.innerHTML = showCards(ascFleeRate(data.pokemon));
// });

// const desRate = document.getElementById('desRate');

// desRate.addEventListener('click', () => {
//   dataContainer = document.getElementById('dataContainer');
//   dataContainer.innerHTML = showCards(desFleeRate(data.pokemon));
// });
