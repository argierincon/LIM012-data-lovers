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
            <p><span class="typeTitle"><span class="bold1">Tipo:</span> ${element.type}</span></p>
            <p><span class="typeTitle"><span class="bold1">Región:</span> ${element.generation.name}</span></p>
            <p><span class="typeTitle"><span class="bold1">Max-CP:</span> ${element.stats['max-cp']}</span></p>
            <p><span class="typeTitle"><span class="bold1">Huída:</span> ${parseFloat(element.encounter['base-flee-rate'] * 100).toFixed(2)}%</span></p>
            <p><span class="typeTitle"><span class="bold1">Aparición:</span> ${parseFloat(element['spawn-chance'] * 100).toFixed(2)}%</span></p>
            <p class="pokeBack" id="pokeback"><img src="img/pokebola.png" alt="pokebola" class="backPoke"></p>
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

// EVENTO FILTRO HUÍDA
const fleeRate = document.getElementById('fleeRate');
fleeRate.addEventListener('change', () => {
  const rate = fleeRate.value;
  return dataCards(filterFleeRate(data.pokemon, rate));
});

// EVENTO FILTRO APARICIÓN
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
    pokeData.innerHTML = `
    <section class="errorText">
      <p class="text1"> Ningún POKÉMON coincide con tu búsqueda</p>
      <p class="text"> Intenta lo siguiente para encontrar resusltados: </p>
      <p class="text"> - Reduce los parámetros de búsqueda</p>
      <p class="text"> - Ingresa sílabas por nombre de Pokémon</p>
      <p class="text"> - No ingreses números</p>
    </section>
    `;
  }
});

const infoCalculations = (dataPokemon) => {
  const calculateSTAB = (attackType) => {
    const result = attackType.map((elem) => {
      const res = elem['base-damage'];
      return res * 1.2;
    });
    return result;
  };

  const calculateDPS = (attackType, stab) => {
    const result = attackType.map((elem) => {
      const res = elem['base-damage'];
      const resTime = elem['move-duration-seg'];
      return (res * stab) / resTime;
    });
    return result;
  };

  const calculateEPS = (attackType) => {
    const result = attackType.map(elem => elem.energy / elem['move-duration-seg']);
    return result;
  };

  let showInfo = '';

  dataPokemon.forEach((elem) => {
    let specialAttack = '';

    elem['special-attack'].forEach((attack, index) => {
      specialAttack += `<tr>
                          <td>${attack.name}</td>
                          <td>${calculateSTAB(elem['special-attack'])[index]}</td>
                          <td>${calculateDPS(elem['special-attack'], calculateSTAB(elem['special-attack'])[index])[index].toFixed()}</td>
                          <td>${calculateEPS(elem['special-attack'])[index].toFixed()}</td>
                        </tr>`;
    });

    const info = `    
    <section id="infoBox" class="infoBox">
      <p class="num">${elem.num}</p>
      <div class="infoWindow">
        <img src="${elem.img}" alt="Pokémon" class="pokeImgInfo">
        <h4>${elem.name}</h4>
        <p>${elem.about}</p>
        
        <table>
          <tr>
            <th>ATTACKS</th>
            <th>STAB</th>
            <th>DPS</th>
            <th>EPS</th>
          </tr>
          ${specialAttack}
        </table>
        <table>
          <tr>
            <th>RESISTENCIA</th>
            <th>DEBILIDAD</th>
          </tr>
          <tr>
            <td>${elem.resistant}</td>
            <td>${elem.weaknesses}</td>
          </tr>
        </table>

        <table>
          <tr>
            <th>ALTURA</th>
            <th>PESO</th>
          </tr>
          <tr>
            <td>${elem.size.height}</td>
            <td>${elem.size.weight}</td>
          </tr>
        </table>

      </div>
    </section>
    `;
    showInfo += info;
  });
  return showInfo;
};

const pokeData1 = document.getElementById('pokeData1');
pokeData1.innerHTML = infoCalculations(data.pokemon);
