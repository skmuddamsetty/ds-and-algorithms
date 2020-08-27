const {
  moveAllZerosToEnd_sol_1,
  moveAllZerosToEnd_sol_2,
} = require('../18.move-zeros-present-array-end/index');

it('moveAllZerosToEnd_sol_1: should move all zeros to the end of the array', () => {
  expect(moveAllZerosToEnd_sol_1([6, 0, 8, 2, 3, 0, 4, 0, 0])).toEqual([
    6,
    8,
    2,
    3,
    4,
    0,
    0,
    0,
    0,
  ]);
});

it('moveAllZerosToEnd_sol_2: should move all zeros to the end of the array', () => {
  expect(moveAllZerosToEnd_sol_2([6, 0, 8, 2, 3, 0, 4, 0, 0])).toEqual([
    6,
    8,
    2,
    3,
    4,
    0,
    0,
    0,
    0,
  ]);
});
