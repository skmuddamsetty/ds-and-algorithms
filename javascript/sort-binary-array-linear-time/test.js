const {
  sortBinaryArray_sol_1,
  sortBinaryArray_sol_2,
  sortBinaryArray_sol_3,
} = require('./index');
it('sortBinaryArray_sol_1: should return sorted array 1', () => {
  const sortedArray = sortBinaryArray_sol_1([1, 0, 1, 0, 1, 0, 0, 1]);
  expect(sortedArray).toEqual([0, 0, 0, 0, 1, 1, 1, 1]);
});

it('sortBinaryArray_sol_1: should return sorted array 2', () => {
  const sortedArray = sortBinaryArray_sol_1([1, 0, 1]);
  expect(sortedArray).toEqual([0, 1, 1]);
});

it('sortBinaryArray_sol_2: should return sorted array 1', () => {
  const sortedArray = sortBinaryArray_sol_2([1, 0, 1, 0, 1, 0, 0, 1]);
  expect(sortedArray).toEqual([0, 0, 0, 0, 1, 1, 1, 1]);
});

it('sortBinaryArray_sol_2: should return sorted array 2', () => {
  const sortedArray = sortBinaryArray_sol_2([1, 0, 1]);
  expect(sortedArray).toEqual([0, 1, 1]);
});

it('sortBinaryArray_sol_3: should return sorted array 1', () => {
  const sortedArray = sortBinaryArray_sol_3([1, 0, 1, 0, 1, 0, 0, 1]);
  expect(sortedArray).toEqual([1, 1, 1, 1, 0, 0, 0, 0]);
});

it('sortBinaryArray_sol_3: should return sorted array 2', () => {
  const sortedArray = sortBinaryArray_sol_3([1, 0, 1]);
  expect(sortedArray).toEqual([1, 1, 0]);
});
