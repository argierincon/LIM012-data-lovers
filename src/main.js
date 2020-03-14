import data from './data/pokemon/pokemon.js';
import {
  dataCards,
  // orderData,
  // dataMaxCP,
  // orderMaxCP,
} from './data.js';

const pokeData = document.getElementById('pokeData');
pokeData.innerHTML = dataCards(data.pokemon);

// const pokeData1 = document.getElementById('pokeData1');
// pokeData1.innerHTML = dataCards(orderData(data.pokemon));

// const pokeData2 = document.getElementById('pokeData2');
// pokeData2.innerHTML = dataCards(orderData(data.pokemon).reverse());

// const pokeData3 = document.getElementById('pokeData3');
// pokeData3.innerHTML = dataMaxCP(orderMaxCP(data.pokemon));

// const pokeData4 = document.getElementById('pokeData4');
// pokeData4.innerHTML = dataMaxCP(orderMaxCP(data.pokemon).reverse());
