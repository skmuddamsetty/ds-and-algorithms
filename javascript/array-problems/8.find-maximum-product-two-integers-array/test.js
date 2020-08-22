const { findMaxProduct_sol_1, findMaxProduct_sol_2 } = require('./index');
it('findMaxProduct_sol_1: should return the maximum product of two integers in the array', () => {
  expect(findMaxProduct_sol_1([-10, -3, 5, 6, -2])).toBe(30);
  expect(findMaxProduct_sol_1([-10, -3])).toBe(30);
  expect(findMaxProduct_sol_1([-10, 3])).toBe(-1);
});

it('findMaxProduct_sol_2: should return the maximum product of two integers in the array', () => {
  expect(findMaxProduct_sol_2([-10, -3, 5, 6, -2])).toBe(30);
});
