const {
  findEquilibriumIndexes,
} = require('../15.find-equilibrium-index-array/index');

it('findEquilibriumIndexes: should return all the equilibrium indexes', () => {
  expect(findEquilibriumIndexes([0, -3, 5, -4, -2, 3, 1, 0])).toEqual([
    0,
    3,
    7,
  ]);
  expect(findEquilibriumIndexes([-7, 1, 5, 2, -4, 3, 0])).toEqual([3, 6]);
});
