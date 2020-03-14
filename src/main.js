import data from './data/pokemon/pokemon.js';
import {
  orderData,
  orderMaxCP,
} from './data.js';

const pokeData = document.getElementById('pokeData');
// diana: no estoy usando los pokedata 1,2,3,4 para nada pero los deje porsiaca
// const pokeData1 = document.getElementById('pokeData1');
// const pokeData2 = document.getElementById('pokeData2');
// const pokeData3 = document.getElementById('pokeData3');
// const pokeData4 = document.getElementById('pokeData4');

// diana: agregue la parte delantera y trasera de la tarjeta, es más eficiente y vi que era
//   más practico para darle el efecto de giro, lo vi en un video x
const dataCards = (dataPokemon) => {
  let showData = '';
  dataPokemon.forEach((element) => {
    const pokeDat = `
            <section id="pokeCard" class="pokeCard">
            <div class="number" id="number">${element.num}</div>
            <div class="imgPoke" id="imgPoke"><img src=${element.img} alt="" class="imgPkm"></div>
            <div class="namePoke" id="namePoke">${element.name.toUpperCase()}</div>
            </section>

            <section id="pokeCard2" class="pokeCard">
            <div class="number" id="number">${element.num}</div>
            <div class="maxCP" id="maxCP"><span class="cp">Max-CP: ${element.stats['max-cp']}</span></div>
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
  if (orderSelect === 'a-z') {
    return dataCards(orderData(data.pokemon, 'name', orderSelect));
  }
  return dataCards(orderData(data.pokemon, 'name', orderSelect).reverse());
});

const orderMax = document.querySelector('#orderMaxCP');
orderMax.addEventListener('change', () => {
  const orderSelectcp = orderMax.value;
  if (orderSelectcp === 'ascendente') {
    return dataCards(orderMaxCP(data.pokemon, 'max-cp', orderSelectcp));
  }
  return dataCards(orderMaxCP(data.pokemon, 'max-cp', orderSelectcp).reverse());
});
// diana: no estoy usando los pokedata 1,2,3,4 para nada pero los deje porsiaca
// pokeData2.innerHTML = dataCards(orderData(data.pokemon).reverse());
// pokeData3.innerHTML = dataMaxCP(orderMaxCP(data.pokemon));
// pokeData4.innerHTML = dataMaxCP(orderMaxCP(data.pokemon).reverse());
