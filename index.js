/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (
  str,
  left = 0,
  right = str.length - 1,
  numCorrections = 0
) {
  while (left < right) {
    if (str[left] !== str[right]) {
      if (numCorrections > 0) {
        return false;
      }
      return (
        validPalindrome(str, left, right - 1, 1) ||
        validPalindrome(str, left + 1, right, 1)
      );
    }
    left++;
    right--;
  }
  return true;
};

console.log(validPalindrome('deeee'));
