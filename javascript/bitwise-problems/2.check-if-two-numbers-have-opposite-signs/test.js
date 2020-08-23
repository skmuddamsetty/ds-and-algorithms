const { checkIfPositiveOrNegative } = require('./index');
it('should tell if two numbers have opposite signs', () => {
  expect(checkIfPositiveOrNegative(1, -2)).toBe(true);
  expect(checkIfPositiveOrNegative(-5, 3)).toBe(true);
  expect(checkIfPositiveOrNegative(5, 1)).toBe(false);
  expect(checkIfPositiveOrNegative(-1, -9)).toBe(false);
  expect(checkIfPositiveOrNegative(-5678, 9765)).toBe(true);
});
