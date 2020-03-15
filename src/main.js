import {
  showCards,
} from './data.js';

import data from './data/pokemon/pokemon.js';

document.querySelectorAll('.menu>ul>li>span').forEach((elem) => {
  elem.addEventListener('click', (e) => {
    e.currentTarget.parentElement.querySelector('.subMenu').classList.toggle('hide');
  });
});

const dataContainer = document.getElementById('dataContainer');
dataContainer.innerHTML = showCards(data.pokemon);
