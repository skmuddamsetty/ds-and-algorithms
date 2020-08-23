/**
 * https://www.techiedelight.com/bit-hacks-part-1-basic/#P1
 * @param {Number} a
 * @param {Number} b
 */
const swapTwoNumbers = (a, b) => {
  if (a !== b) {
    a = a ^ b;
    b = a ^ b;
    a = a ^ b;
  }
  return [a, b];
};

module.exports = { swapTwoNumbers };
