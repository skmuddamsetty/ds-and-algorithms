const {
  dupElementInArray_sol_1,
  dupElementInArray_sol_2,
  dupElementInArray_sol_3,
} = require('./index');
it('dupElementInArray_sol_1: should return the duplicate element in the array', () => {
  expect(dupElementInArray_sol_1([1, 2, 3, 4, 4])).toBe(4);
  expect(dupElementInArray_sol_1([1, 2, 3, 4, 2])).toBe(2);
});

it('dupElementInArray_sol_2: should return the duplicate element in the array', () => {
  expect(dupElementInArray_sol_2([1, 2, 3, 4, 4])).toBe(4);
  expect(dupElementInArray_sol_2([1, 2, 3, 4, 2])).toBe(2);
});

it('dupElementInArray_sol_3: should return the duplicate element in the array', () => {
  expect(dupElementInArray_sol_3([1, 2, 3, 4, 4])).toBe(4);
  expect(dupElementInArray_sol_3([1, 2, 3, 4, 2])).toBe(2);
});
