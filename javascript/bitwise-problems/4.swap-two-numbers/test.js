const { swapTwoNumbers } = require('./index');
it('should swap two numbers', () => {
  expect(swapTwoNumbers(3, 4)).toEqual([4, 3]);
  expect(swapTwoNumbers(-3, 4)).toEqual([4, -3]);
});
