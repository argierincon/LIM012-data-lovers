import data from '../src/data/pokemon/pokemon.js';
import {
  orderData,
  orderMaxCP,
  orderFilterType,
  orderFilterRegion,
  filterFleeRate,
  filterSpawn,
  searchText,
  calculateSTAB,
  calculateDPS,
  calculateEPS,
} from '../src/data.js';

const firstTestExpect = [
  {
    num: 1,
    name: 'bulbasaur',
    stats: { 'base-stamina': 128, 'max-cp': 1115, 'max-hp': 113 },
    type: ['grass', 'poison'],
    generation: { name: 'kanto', num: 'generation i' },
  },
  {
    num: 5,
    name: 'charmeleon',
    stats: { 'base-stamina': 151, 'max-cp': 1653, 'max-hp': 131 },
    type: ['fire'],
    generation: { name: 'kanto', num: 'generation i' },
  },
  {
    num: 10,
    name: 'caterpie',
    stats: { 'base-stamina': 128, 'max-cp': 437, 'max-hp': 113 },
    type: ['bug'],
    generation: { name: 'kanto', num: 'generation i' },
  },
];

const firstTestoBe = [
  {
    num: 1,
    name: 'bulbasaur',
    stats: { 'base-stamina': 128, 'max-cp': 1115, 'max-hp': 113 },
    type: ['grass', 'poison'],
    generation: { name: 'kanto', num: 'generation i' },
  },
  {
    num: 10,
    name: 'caterpie',
    stats: { 'base-stamina': 128, 'max-cp': 437, 'max-hp': 113 },
    type: ['bug'],
    generation: { name: 'kanto', num: 'generation i' },
  },
  {
    num: 5,
    name: 'charmeleon',
    stats: { 'base-stamina': 151, 'max-cp': 1653, 'max-hp': 131 },
    type: ['fire'],
    generation: { name: 'kanto', num: 'generation i' },
  },
];

const secondTestoBe = [
  {
    num: 5,
    name: 'charmeleon',
    stats: { 'base-stamina': 151, 'max-cp': 1653, 'max-hp': 131 },
    type: ['fire'],
    generation: { name: 'kanto', num: 'generation i' },
  },
  {
    num: 10,
    name: 'caterpie',
    stats: { 'base-stamina': 128, 'max-cp': 437, 'max-hp': 113 },
    type: ['bug'],
    generation: { name: 'kanto', num: 'generation i' },
  },
  {
    num: 1,
    name: 'bulbasaur',
    stats: { 'base-stamina': 128, 'max-cp': 1115, 'max-hp': 113 },
    type: ['grass', 'poison'],
    generation: { name: 'kanto', num: 'generation i' },
  },
];

const thirdTestoBe = [
  {
    num: 10,
    name: 'caterpie',
    stats: { 'base-stamina': 128, 'max-cp': 437, 'max-hp': 113 },
    type: ['bug'],
    generation: { name: 'kanto', num: 'generation i' },
  },
  {
    num: 1,
    name: 'bulbasaur',
    stats: { 'base-stamina': 128, 'max-cp': 1115, 'max-hp': 113 },
    type: ['grass', 'poison'],
    generation: { name: 'kanto', num: 'generation i' },
  },
  {
    num: 5,
    name: 'charmeleon',
    stats: { 'base-stamina': 151, 'max-cp': 1653, 'max-hp': 131 },
    type: ['fire'],
    generation: { name: 'kanto', num: 'generation i' },
  },
];

const fourthTestoBe = [
  {
    num: 5,
    name: 'charmeleon',
    stats: { 'base-stamina': 151, 'max-cp': 1653, 'max-hp': 131 },
    type: ['fire'],
    generation: { name: 'kanto', num: 'generation i' },
  },
  {
    num: 1,
    name: 'bulbasaur',
    stats: { 'base-stamina': 128, 'max-cp': 1115, 'max-hp': 113 },
    type: ['grass', 'poison'],
    generation: { name: 'kanto', num: 'generation i' },
  },
  {
    num: 10,
    name: 'caterpie',
    stats: { 'base-stamina': 128, 'max-cp': 437, 'max-hp': 113 },
    type: ['bug'],
    generation: { name: 'kanto', num: 'generation i' },
  },
];

const fifthTestoBe = [
  {
    num: 5,
    name: 'charmeleon',
    stats: { 'base-stamina': 151, 'max-cp': 1653, 'max-hp': 131 },
    type: ['fire'],
    generation: { name: 'kanto', num: 'generation i' },
  },
];

const searchTestExpect = [
  {
    num: 5,
    name: 'charmeleon',
    stats: { 'base-stamina': 151, 'max-cp': 1653, 'max-hp': 131 },
    type: ['fire'],
    generation: { name: 'kanto', num: 'generation i' },
  },
  {
    num: 10,
    name: 'caterpie',
    stats: { 'base-stamina': 128, 'max-cp': 437, 'max-hp': 113 },
    type: ['bug'],
    generation: { name: 'kanto', num: 'generation i' },
  },
];

describe('orderData', () => {
  it('is a function', () => {
    expect(typeof orderData).toBe('function');
  });

  it('Debe retornar los pokemones ordenados de a-z', () => {
    expect(orderData(firstTestExpect, 'name', 'a-z')).toEqual(firstTestoBe);
  });

  it('Debe retornar los pokemones ordenados de z-a', () => {
    expect(orderData(firstTestExpect, 'name', 'z-a')).toEqual(secondTestoBe);
  });
});


describe('orderMaxCP', () => {
  it('is a function', () => {
    expect(typeof orderMaxCP).toBe('function');
  });

  it('Debe retornar los pokemones ordenados de forma ascendente por MAX-CP', () => {
    expect(orderMaxCP(firstTestExpect, 'max-cp', 'ascendente')).toEqual(thirdTestoBe);
  });

  it('Debe retornar los pokemones ordenados de forma descendente por MAX-CP', () => {
    expect(orderMaxCP(firstTestExpect, 'max-cp', 'descendente')).toEqual(fourthTestoBe);
  });
});

describe('orderFilter', () => {
  it('is a function', () => {
    expect(typeof orderFilterType).toBe('function');
  });

  it('Debe retornar los tipo de pokemon fire', () => {
    expect(orderFilterType(firstTestExpect, 'type', 'fire')).toEqual(fifthTestoBe);
  });
});

describe('orderFilterRegion', () => {
  it('is a function', () => {
    expect(typeof orderFilterRegion).toBe('function');
  });

  it('Debe retornar [] al no encontrar coincidencias con la región ', () => {
    expect(orderFilterRegion(firstTestExpect, 'name', 'johto')).toEqual([]);
  });

  it('Debe retornar un arreglo de pokémmons que sean de la región kanto', () => {
    expect(orderFilterRegion(firstTestExpect, 'name', 'kanto')).toEqual(firstTestExpect);
  });
});

// TEST DE LA FUNCIÓN POR % HUÍDA
describe('filterFleeRate', () => {
  it('debería ser una función', () => {
    expect(typeof filterFleeRate).toBe('function');
  });

  it('debería retornar "raikou" para "lowRate"', () => {
    expect(filterFleeRate(data.pokemon, 'lowRate')[0].name).toBe('raikou');
  });

  it('debería retornar "hoppip" para "mediumRate"', () => {
    expect(filterFleeRate(data.pokemon, 'mediumRate')[0].name).toBe('hoppip');
  });

  it('debería retornar "abra" para "highRate"', () => {
    expect(filterFleeRate(data.pokemon, 'highRate')[0].name).toBe('abra');
  });

  it('debería retornar "pichu" para "no en captura"', () => {
    expect(filterFleeRate(data.pokemon, 'no en captura')[0].name).toBe('pichu');
  });
});


// TEST DE LA FUNCIÓN POR % HUÍDA
describe('filterSpawn', () => {
  it('debería ser una función', () => {
    expect(typeof filterSpawn).toBe('function');
  });

  it('debería retornar "chikorita" para "nula"', () => {
    expect(filterSpawn(data.pokemon, 'nula')[0].name).toBe('chikorita');
  });

  it('debería retornar "dragonite" para "lowSpawn"', () => {
    expect(filterSpawn(data.pokemon, 'lowSpawn')[0].name).toBe('dragonite');
  });

  it('debería retornar "psyduck" para "mediumSpawn"', () => {
    expect(filterSpawn(data.pokemon, 'mediumSpawn')[0].name).toBe('psyduck');
  });

  it('debería retornar "zubat" para "highSpawn"', () => {
    expect(filterSpawn(data.pokemon, 'highSpawn')[0].name).toBe('zubat');
  });
});

const arrayInput = [
  {
    type: 'fire',
    'base-damage': 70,
    energy: -33,
    'move-duration-seg': 3,
  },
  {
    type: 'fire',
    'base-damage': 70,
    energy: -50,
    'move-duration-seg': 2,
  },
  {
    type: 'fire',
    'base-damage': 70,
    energy: -50,
    'move-duration-seg': 2,
  }];

const type1 = ['fire'];

// TEST DE LA FUNCIÓN BUSCADOR
describe('searchText', () => {
  it('es una función', () => {
    expect(typeof searchText).toBe('function');
  });

  it('deberia retornar un array de objetos que contengan la letra buscada (e)', () => {
    expect(searchText(firstTestExpect, 'name', 'e')).toEqual(searchTestExpect);
  });
});

// TEST DE LA FUNCIÓN STAB
describe('calculateSTAB', () => {
  it('es una función', () => {
    expect(typeof calculateSTAB).toBe('function');
  });

  it('debe retornar [84, 84, 84] para STAB tipo fire', () => {
    expect(calculateSTAB(arrayInput, type1, arrayInput.type)).toEqual([84, 84, 84]);
  });
});

// TEST DE LA FUNCIÓN DPS
describe('calculateDPS', () => {
  it('es una función', () => {
    expect(typeof calculateDPS).toBe('function');
  });

  it('debe retornar [1960, 2940, 2940]', () => {
    expect(calculateDPS(arrayInput, 84)).toEqual([1960, 2940, 2940]);
  });
});

// TEST DE LA FUNCIÓN EPS
describe('calculateEPS', () => {
  it('es una función', () => {
    expect(typeof calculateEPS).toBe('function');
  });

  it('debe retornar [-11,-25,-25] al calcularEPS', () => {
    expect(calculateEPS(arrayInput)).toEqual([-11, -25, -25]);
  });
});
