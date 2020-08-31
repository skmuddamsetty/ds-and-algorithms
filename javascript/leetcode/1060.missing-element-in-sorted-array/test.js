const { missingElement_sol_1 } = require('./index');
it('missingElement_sol_1: should return the kth missing element', () => {
  expect(missingElement_sol_1([4, 7, 9, 10], 1)).toBe(5);
  expect(missingElement_sol_1([4, 7, 9, 10], 3)).toBe(8);
  expect(missingElement_sol_1([1, 2, 4], 3)).toBe(6);
});
