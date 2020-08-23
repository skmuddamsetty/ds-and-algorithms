/**
 * https://www.techiedelight.com/bit-hacks-part-1-basic/#P1
 * @param {Number} num
 *
 * Using & operator
 */
const checkEvenOrOdd = (num) => {
  let binaryNumber = num.toString(2);
  console.log(binaryNumber);
  return (num & 1) === 1 ? 'odd' : 'even';
};

module.exports = { checkEvenOrOdd };
