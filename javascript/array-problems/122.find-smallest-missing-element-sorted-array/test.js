const {
  findSmallestMissingElement_sol_1,
  findSmallestMissingElement_sol_2,
} = require('./index');

it('findSmallestMissingElement_sol_1: should return the smallest missing element', () => {
  expect(findSmallestMissingElement_sol_1([0, 1, 2, 6, 9, 11, 15])).toBe(3);
  expect(findSmallestMissingElement_sol_1([1, 2, 3, 46, 9, 11, 15])).toBe(0);
  expect(findSmallestMissingElement_sol_1([0, 1, 2, 3, 4, 5, 6])).toBe(7);
  expect(findSmallestMissingElement_sol_1([0, 1, 2, 6, 9, 11, 15])).toBe(3);
});

it('findSmallestMissingElement_sol_2: should return the smallest missing element', () => {
  expect(findSmallestMissingElement_sol_2([0, 1, 2, 6, 9, 11, 15])).toBe(3);
  expect(findSmallestMissingElement_sol_2([1, 2, 3, 46, 9, 11, 15])).toBe(0);
  expect(findSmallestMissingElement_sol_2([0, 1, 2, 3, 4, 5, 6])).toBe(7);
  expect(findSmallestMissingElement_sol_2([0, 1, 2, 6, 9, 11, 15])).toBe(3);
});
