import data from '../src/data/pokemon/pokemon.js';
import {
  orderData,
  orderMaxCP,
  orderFilterType,
  orderFilterRegion,
  filterFleeRate,
  filterSpawn,
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

  it('Debe retornar [] si no encentra una región', () => {
    expect(orderFilterRegion(firstTestExpect, 'name', 'johto')).toEqual([]);
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
