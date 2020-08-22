const { zeroSumSubArray } = require('./index');
it('should tell if zero sum sub array exists', () => {
  zeroSumSubArray([3, 4, -7, 3, 1, 3, 1, -4, -2, -2]);
  expect(console.log.mock.calls[0][0]).toEqual(`[0, 2]`);
  expect(console.log.mock.calls[1][0]).toEqual(`[1, 3]`);
  expect(console.log.mock.calls[2][0]).toEqual(`[2, 5]`);
  expect(console.log.mock.calls[3][0]).toEqual(`[5, 7]`);
  expect(console.log.mock.calls[4][0]).toEqual(`[3, 9]`);
});

beforeEach(() => {
  jest.spyOn(console, 'log').mockImplementation(() => {});
});
