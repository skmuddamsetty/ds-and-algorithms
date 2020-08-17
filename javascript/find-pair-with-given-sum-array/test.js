const findPairWithGivenSum = require('./index');
test('findPairWithGivenSum function is defined', () => {
  expect(findPairWithGivenSum).toBeDefined();
});

it('returns the expected sum', () => {
  expect(findPairWithGivenSum(1, 2)).toBe(3);
  expect(console.log.mock.calls.length).toEqual(1);
  expect(console.log.mock.calls[0][0]).toEqual(1);
  expect(console.log.mock.calls[0][1]).toEqual(2);
});

beforeEach(() => {
  jest.spyOn(console, 'log').mockImplementation(() => {});
});
