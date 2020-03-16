import { orderData, orderMaxCP } from '../src/data.js';

const firstTestExpect = [
  { num: 1, name: 'bulbasaur', stats: { 'base-stamina': 128, 'max-cp': 1115, 'max-hp': 113 } },
  { num: 5, name: 'charmeleon', stats: { 'base-stamina': 151, 'max-cp': 1653, 'max-hp': 131 } },
  { num: 10, name: 'caterpie', stats: { 'base-stamina': 128, 'max-cp': 437, 'max-hp': 113 } },
];

const firstTestoBe = [
  { num: 1, name: 'bulbasaur', stats: { 'base-stamina': 128, 'max-cp': 1115, 'max-hp': 113 } },
  { num: 10, name: 'caterpie', stats: { 'base-stamina': 128, 'max-cp': 437, 'max-hp': 113 } },
  { num: 5, name: 'charmeleon', stats: { 'base-stamina': 151, 'max-cp': 1653, 'max-hp': 131 } },
];

const secondTestoBe = [
  { num: 5, name: 'charmeleon', stats: { 'base-stamina': 151, 'max-cp': 1653, 'max-hp': 131 } },
  { num: 10, name: 'caterpie', stats: { 'base-stamina': 128, 'max-cp': 437, 'max-hp': 113 } },
  { num: 1, name: 'bulbasaur', stats: { 'base-stamina': 128, 'max-cp': 1115, 'max-hp': 113 } },
];

const thirdTestoBe = [
  { num: 10, name: 'caterpie', stats: { 'base-stamina': 128, 'max-cp': 437, 'max-hp': 113 } },
  { num: 1, name: 'bulbasaur', stats: { 'base-stamina': 128, 'max-cp': 1115, 'max-hp': 113 } },
  { num: 5, name: 'charmeleon', stats: { 'base-stamina': 151, 'max-cp': 1653, 'max-hp': 131 } },
];

const fourthTestoBe = [
  { num: 5, name: 'charmeleon', stats: { 'base-stamina': 151, 'max-cp': 1653, 'max-hp': 131 } },
  { num: 1, name: 'bulbasaur', stats: { 'base-stamina': 128, 'max-cp': 1115, 'max-hp': 113 } },
  { num: 10, name: 'caterpie', stats: { 'base-stamina': 128, 'max-cp': 437, 'max-hp': 113 } },
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
