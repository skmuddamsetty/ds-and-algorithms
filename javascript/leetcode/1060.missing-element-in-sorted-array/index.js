/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var missingElement_sol_1 = function (nums, k) {
  let element;
  for (let i = 0; i < nums.length; i++) {
    element = nums[i] + 1;
    while (i === nums.length - 1 || element < nums[i + 1]) {
      k--;
      if (k === 0) {
        return element;
      }
      element = element + 1;
    }
  }
};

module.exports = { missingElement_sol_1 };
console.log(missingElement_sol_1([1, 2, 4], 3));
