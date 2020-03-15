import { showCards } from './data.js';
// import data from './data/atletas/atletas.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';

console.log(data.pokemon[0]);

const dataContainer = document.getElementById('dataContainer');
dataContainer.innerHTML = showCards(data.pokemon);
