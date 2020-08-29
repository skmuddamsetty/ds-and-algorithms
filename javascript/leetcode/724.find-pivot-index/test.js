const { pivotIndex } = require('./index');
it('pivotIndex: should return the pivot index', () => {
  expect(pivotIndex([1, 7, 3, 6, 5, 6])).toBe(3);
  expect(pivotIndex([1, 2, 3])).toBe(-1);
});
