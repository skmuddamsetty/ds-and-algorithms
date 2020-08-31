const { findFloorAndCeilOfNumberInArray } = require('./index');
it('findFloorAndCeilOfNumberInArray: should return aray with floor and ceil of a number', () => {
  expect(findFloorAndCeilOfNumberInArray([1, 4, 6, 8, 9], 0)).toEqual([-1, 1]);
  expect(findFloorAndCeilOfNumberInArray([1, 4, 6, 8, 9], 1)).toEqual([1, 1]);
  expect(findFloorAndCeilOfNumberInArray([1, 4, 6, 8, 9], 2)).toEqual([1, 4]);
  expect(findFloorAndCeilOfNumberInArray([1, 4, 6, 8, 9], 3)).toEqual([1, 4]);
  expect(findFloorAndCeilOfNumberInArray([1, 4, 6, 8, 9], 4)).toEqual([4, 4]);
  expect(findFloorAndCeilOfNumberInArray([1, 4, 6, 8, 9], 5)).toEqual([4, 6]);
  expect(findFloorAndCeilOfNumberInArray([1, 4, 6, 8, 9], 6)).toEqual([6, 6]);
  expect(findFloorAndCeilOfNumberInArray([1, 4, 6, 8, 9], 7)).toEqual([6, 8]);
  expect(findFloorAndCeilOfNumberInArray([1, 4, 6, 8, 9], 8)).toEqual([8, 8]);
  expect(findFloorAndCeilOfNumberInArray([1, 4, 6, 8, 9], 9)).toEqual([9, 9]);
  expect(findFloorAndCeilOfNumberInArray([1, 4, 6, 8, 9], 10)).toEqual([9, -1]);
});
