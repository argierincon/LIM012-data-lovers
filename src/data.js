export const orderData = (data, property, condition) => {
  let result;
  if (condition === 'a-z') {
    result = data.sort((a, b) => {
      if (a[property] > b[property]) {
        return 1;
      }
      return -1;
    });
  } else {
    result = data.sort((a, b) => {
      if (a[property] < b[property]) {
        return 1;
      }
      return -1;
    });
  }
  return result;
};

export const orderMaxCP = (data, property, condition) => {
  let resultcp;
  if (condition === 'ascendente') {
    resultcp = data.sort((a, b) => (a.stats[property] - b.stats[property]));
  } else {
    resultcp = data.sort((a, b) => (b.stats[property] - a.stats[property]));
  }
  return resultcp;
};

export const orderFilterType = (data, property, condition) => {
  const pokeType = data.filter(a => (a[property][0] === condition || a[property][1] === condition));
  return pokeType;
};

export const orderFilterRegion = (data, property, condition) => {
  const pokeRegion = data.filter(element => element.generation[property] === condition);
  return pokeRegion;
};

// FUNCIONES QUE ORDENAN ASCENDENTEMENTE LA DATA FILTRADA POR % DE HUÍDA Y APARICIÓN
const sortFleeRate = (pkm1, pkm2) => pkm1.encounter['base-flee-rate'] - pkm2.encounter['base-flee-rate'];
const sortSpawnChance = (pkm1, pkm2) => pkm1['spawn-chance'] - pkm2['spawn-chance'];


// FUNCIÓN QUE FILTRA POR % DE HUÍDA
export const filterFleeRate = (arrPkm, condition) => {
  let fleeRate = [];
  switch (condition) {
    case 'highRate':
      fleeRate = arrPkm.filter(pkm => parseFloat(pkm.encounter['base-flee-rate']) > 0.21 && parseFloat(pkm.encounter['base-flee-rate']) < 1.00);
      return fleeRate.sort(sortFleeRate);
    case 'mediumRate':
      fleeRate = arrPkm.filter(pkm => parseFloat(pkm.encounter['base-flee-rate']) > 0.11 && parseFloat(pkm.encounter['base-flee-rate']) < 0.2);
      return fleeRate.sort(sortFleeRate);
    case 'lowRate':
      fleeRate = arrPkm.filter(pkm => parseFloat(pkm.encounter['base-flee-rate']) > 0.0 && parseFloat(pkm.encounter['base-flee-rate']) < 0.1);
      return fleeRate.sort(sortFleeRate);
    default:
      fleeRate = arrPkm.filter(pkm => pkm.encounter['base-flee-rate'] === 'not in capture');
      return fleeRate;
  }
};

// FUNCIÓN QUE FILTRA POR % DE APARICIÓN
export const filterSpawn = (arrPkm, condition) => {
  let spawnChance = [];
  switch (condition) {
    case 'highSpawn':
      spawnChance = arrPkm.filter(pkm => parseFloat(pkm['spawn-chance']) > 5.10 && parseFloat(pkm['spawn-chance']) < 8.00);
      return spawnChance.sort(sortSpawnChance);
    case 'mediumSpawn':
      spawnChance = arrPkm.filter(pkm => parseFloat(pkm['spawn-chance']) > 2.51 && parseFloat(pkm['spawn-chance']) < 5.00);
      return spawnChance.sort(sortSpawnChance);
    case 'lowSpawn':
      spawnChance = arrPkm.filter(pkm => parseFloat(pkm['spawn-chance']) > 0.00 && parseFloat(pkm['spawn-chance']) < 2.50);
      return spawnChance.sort(sortSpawnChance);
    default:
      spawnChance = arrPkm.filter(pkm => pkm['spawn-chance'] === null);
      return spawnChance;
  }
};

export const searchText = (data, property, condition) => {
  const searchPkm = data.filter(element => (element[property]).indexOf(condition) !== -1);
  return searchPkm;
};


// FUNCIÓN QUE CALCULA SOLO EL STAB (BONIFICACION POR ATAQUE DEL MISMO TIPO)
const calculateSTAB = (attackType, pkmType) => {
  const result = attackType.map((elem) => {
    let res = elem['base-damage'];
    if (elem.type === pkmType) {
      res *= 0.2;
    }
    return res;
  });
  return result;
};

// AQUI USE EL TEMPLATE STRING PARA LLENAR LA INFO DE LOS POKEMON
export const infoCalculations = (dataPokemon) => {
  let showInfo = '';

  dataPokemon.forEach((elem) => {
    let specialAttack = '';

    // ÉSTO TUVE QUE SACARLO DE LA MAQUETACION PORQUE ALGUNOS TIENEN 3 Y OTROS TIENEN 4 ATAQUES
    elem['special-attack'].forEach((attack, index) => {
      specialAttack += `<tr>
                          <td>${attack.name}</td>
                          <td>${calculateSTAB(elem['special-attack'], elem.type)[index]}</td>
                          <td>234</td>
                          <td>456</td>
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
