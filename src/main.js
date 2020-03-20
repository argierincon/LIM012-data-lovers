import data from './data/pokemon/pokemon.js';
import {
  orderData,
  orderMaxCP,
  orderFilterType,
  orderFilterRegion,
  filterFleeRate,
  filterSpawn,
  searchText,
} from './data.js';

const pokeData = document.getElementById('pokeData');
const buttonUp = document.querySelector('.buttonUp');

const scrollFunction = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    buttonUp.classList.add('hide');
  } else {
    buttonUp.classList.remove('hide');
  }
};

window.addEventListener('scroll', scrollFunction);

const backTotop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

buttonUp.addEventListener('click', backTotop);

const dataCards = (dataPokemon) => {
  let showData = '';
  dataPokemon.forEach((element) => {
    const pokeDat = `

       <section class="data1"> 
        <section class="card">  
         <section class="side front">    
          <section id="pokeCard" class="pokeCard">
            <p class="number" id="number">${element.num}</p>
            <p class="imgPoke" id="imgPoke"><img src=${element.img} alt="" class="imgPkm"></p>
            <p class="namePoke" id="namePoke">${element.name.toUpperCase()}</p>
          </section>
         </section>
         <section class= "side back">
          <section id="pokeCard2" class="pokeCard">
            <p class="number" id="number">${element.num}</p>
            <section class="container">
            <p><span class="typeTitle"><span class:"bold1">Max-CP:</span> ${element.stats['max-cp']}</span></p>
            <p><span class="typeTitle"><span class:"bold1">Tipo:</span> ${element.type}</span></p>
            <p><span class="typeTitle"><span class:"bold1">Región:</span> ${element.generation.name}</span></p>
            <p class="pokeback" id="pokeback"><img src="" alt="" class=".backPoke"></p>
            </section>
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
  dataCards(orderData(data.pokemon, 'name', orderSelect));
});

const orderMax = document.querySelector('#oderMaxCP');
orderMax.addEventListener('change', () => {
  const orderSelectcp = orderMax.value;
  dataCards(orderMaxCP(data.pokemon, 'max-cp', orderSelectcp));
});

const orderType = document.querySelector('#orderType');
orderType.addEventListener('change', () => {
  const orderSelectType = orderType.value;
  dataCards(orderFilterType(data.pokemon, 'type', orderSelectType));
});

const orderRegion = document.querySelector('#orderRegion');
orderRegion.addEventListener('change', () => {
  const orderSelectRegion = orderRegion.value;
  dataCards(orderFilterRegion(data.pokemon, 'name', orderSelectRegion));
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

const inputText = document.getElementById('inputText');
inputText.addEventListener('keyup', () => {
  const inputTextPkm = inputText.value.toLowerCase();
  dataCards(searchText(data.pokemon, 'name', inputTextPkm));
  if (pokeData.innerHTML === '') {
    // const error = document.querySelector('.error');
    pokeData.innerHTML = `
      <img src="img/error4.png" alt="" class="errorImg">
    `;
  }
});
