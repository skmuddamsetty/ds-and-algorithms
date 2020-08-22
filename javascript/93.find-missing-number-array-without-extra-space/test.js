const {
  findMissingNumber_sol_1,
  findMissingNumber_sol_2,
  findMissingNumber_sol_3,
} = require('./index');
it('findMissingNumber_sol_1: should return the missing element in the array', () => {
  expect(findMissingNumber_sol_1([3, 2, 4, 6, 1])).toBe(5);
  expect(findMissingNumber_sol_1([3, 2, 4, 5, 6])).toBe(1);
  expect(findMissingNumber_sol_1([3, 2, 4, 5, 1])).toBe(6);
  expect(findMissingNumber_sol_1([9, 6, 4, 2, 3, 5, 7, 1])).toBe(8);
});

it('findMissingNumber_sol_2: should return the missing element in the array', () => {
  expect(findMissingNumber_sol_2([3, 2, 4, 6, 1])).toBe(5);
  expect(findMissingNumber_sol_2([3, 2, 4, 5, 6])).toBe(1);
  expect(findMissingNumber_sol_2([3, 2, 4, 5, 1])).toBe(6);
  expect(findMissingNumber_sol_2([9, 6, 4, 2, 3, 5, 7, 1])).toBe(8);
});

it('findMissingNumber_sol_3: should return the missing element in the array', () => {
  expect(findMissingNumber_sol_3([3, 2, 4, 6, 1])).toBe(5);
  expect(findMissingNumber_sol_3([3, 2, 4, 5, 6])).toBe(1);
  expect(findMissingNumber_sol_3([3, 2, 4, 5, 1])).toBe(6);
  expect(findMissingNumber_sol_3([9, 6, 4, 2, 3, 5, 7, 1])).toBe(8);
});
