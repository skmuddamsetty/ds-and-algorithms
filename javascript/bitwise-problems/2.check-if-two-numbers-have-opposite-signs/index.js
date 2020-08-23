/**
 * https://www.techiedelight.com/bit-hacks-part-1-basic/#P1
 * @param {Number} a
 * @param {Number} b
 */
const checkIfPositiveOrNegative = (a, b) => {
  let result = (a ^ b) < 0;
  return result;
};

module.exports = { checkIfPositiveOrNegative };
