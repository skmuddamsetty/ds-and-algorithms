const { countLastOccurence } = require('./index');
it('countLastOccurence', () => {
  expect(countLastOccurence([2, 5, 5, 5, 6, 6, 8, 9, 9, 9], 5)).toBe(3);
  expect(countLastOccurence([2, 5, 5, 5, 6, 6, 8, 9, 9, 9], 6)).toBe(5);
  expect(countLastOccurence([2, 5, 5, 5, 6, 6, 8, 9, 9, 9], 2)).toBe(0);
  expect(countLastOccurence([2, 5, 5, 5, 6, 6, 8, 9, 9, 9], 9)).toBe(9);
});
