const { sortArrayUsingOneSwap } = require('./index');
it('sortArrayUsingOneSwap: sort using one swap', () => {
  expect(sortArrayUsingOneSwap([3, 8, 6, 7, 5, 9])).toEqual([3, 5, 6, 7, 8, 9]);
  expect(sortArrayUsingOneSwap([3, 5, 6, 9, 8, 7])).toEqual([3, 5, 6, 7, 8, 9]);
  expect(sortArrayUsingOneSwap([3, 5, 7, 6, 8, 9])).toEqual([3, 5, 6, 7, 8, 9]);
});
