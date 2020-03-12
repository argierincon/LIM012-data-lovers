import data from './data/pokemon/pokemon.js';
import { dataCards, orderData } from './data.js';


const pokeData = document.getElementById('pokeData');
pokeData.innerHTML = dataCards(data.pokemon);
// console.log(data);

const pokeData1 = document.getElementById('pokeData1');
pokeData1.innerHTML = dataCards(orderData(data.pokemon));

const pokeData2 = document.getElementById('pokeData2');
pokeData2.innerHTML = dataCards(orderData(data.pokemon).reverse());
