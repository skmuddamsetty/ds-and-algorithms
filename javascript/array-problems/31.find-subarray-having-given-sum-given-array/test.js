const {
  findSubArrayWithGivenSum_sol_1,
  findSubArrayWithGivenSum_sol_2,
  findSubArrayWithGivenSum_sol_3,
} = require('./index');
it('findSubArrayWithGivenSum_sol_1: return the array with sub array having given sum', () => {
  // expect(
  //   findSubArrayWithGivenSum_sol_1([2, 6, 0, 9, 7, 3, 1, 4, 1, 10], 15)
  // ).toEqual([1, 3]);
  // expect(
  //   findSubArrayWithGivenSum_sol_1([0, 5, -7, 1, -4, 7, 6, 1, 4, 1, 10], 15)
  // ).toEqual([8, 10]);
  // expect(
  //   findSubArrayWithGivenSum_sol_1([0, 5, -7, 1, -4, 7, 6, 1, 4, 1, 10], -3)
  // ).toEqual([3, 4]);
});

it('findSubArrayWithGivenSum_sol_2: return the array with sub array having given sum', () => {
  expect(
    findSubArrayWithGivenSum_sol_2([2, 6, 0, 9, 7, 3, 1, 4, 1, 10], 15)
  ).toEqual([1, 3]);
  expect(
    findSubArrayWithGivenSum_sol_2([0, 5, -7, 1, -4, 7, 6, 1, 4, 1, 10], 15)
  ).toEqual([3, 8]);
  expect(
    findSubArrayWithGivenSum_sol_2([0, 5, -7, 1, -4, 7, 6, 1, 4, 1, 10], -3)
  ).toEqual([2, 5]);
  expect(findSubArrayWithGivenSum_sol_2([1, 4, 20, 3, 10, 5], 33)).toEqual([
    2,
    4,
  ]);
  expect(findSubArrayWithGivenSum_sol_2([1, 4, 0, 0, 3, 10, 5], 7)).toEqual([
    1,
    4,
  ]);
  expect(findSubArrayWithGivenSum_sol_2([1, 4], 0)).toEqual(-1);
});

it('findSubArrayWithGivenSum_sol_3: return the array with sub array having given sum', () => {
  expect(
    findSubArrayWithGivenSum_sol_3([2, 6, 0, 9, 7, 3, 1, 4, 1, 10], 15)
  ).toEqual([1, 3]);
  expect(findSubArrayWithGivenSum_sol_3([1, 4, 20, 3, 10, 5], 33)).toEqual([
    2,
    4,
  ]);
  expect(findSubArrayWithGivenSum_sol_3([1, 4, 0, 0, 3, 10, 5], 7)).toEqual([
    1,
    4,
  ]);
});
