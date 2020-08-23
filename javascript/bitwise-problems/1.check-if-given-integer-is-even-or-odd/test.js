const { checkEvenOrOdd } = require('./index');
it('should return odd or even', () => {
  expect(checkEvenOrOdd(7)).toBe('odd');
  expect(checkEvenOrOdd(4)).toBe('even');
});
