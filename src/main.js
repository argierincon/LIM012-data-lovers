//import { example } from './data.js';


import data from './data/pokemon/pokemon.js';

const pokeData = document.getElementById('pokeData');
for (let i=0; i<data.pokemon.length ; i += 1){
    const pokeDat = `
    <section id="pokeCard" class="pokeCard">
        <div class="number" id="number">${data.pokemon[i].num}</div>
        <div class="imgPoke" id="imgPoke"><img src=${data.pokemon[i].img} alt="" class="imgPkm"></div>
        <div class="namePoke" id="namePoke">${data.pokemon[i].name.toUpperCase()}</div>
      </section>
    `;
    pokeData.innerHTML += pokeDat; 
}


console.log( data);
