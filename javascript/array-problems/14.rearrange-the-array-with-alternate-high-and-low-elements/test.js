const {
  rearrangeArray,
} = require('../14.rearrange-the-array-with-alternate-high-and-low-elements/index');
it('rearrangeArray: should re-arrange the array with high and low elements', () => {
  expect(rearrangeArray([1, 2, 3, 4, 5, 6, 7])).toEqual([1, 3, 2, 5, 4, 7, 6]);
  expect(rearrangeArray([9, 6, 8, 3, 7])).toEqual([6, 9, 3, 8, 7]);
  expect(rearrangeArray([6, 9, 2, 5, 1, 4])).toEqual([6, 9, 2, 5, 1, 4]);
});
