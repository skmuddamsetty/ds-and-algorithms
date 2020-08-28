const {
  sortThreeNumbers,
} = require('../9.sort-array-containing-0s-1s-2s-dutch-national-flag-problem/index');

it('sortThreeNumbers: sort three numbers in asceding order', () => {
  expect(sortThreeNumbers([0, 1, 2, 2, 1, 0, 0, 2, 0, 1, 1, 0])).toEqual([
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    2,
    2,
    2,
  ]);
});
