const { addOneToGivenInteger } = require('./index');
it('should add one to the given number', () => {
  expect(addOneToGivenInteger(-5)).toBe(-4);
  expect(addOneToGivenInteger(5)).toBe(6);
});
