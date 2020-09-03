/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
  let open = 0;
  let results = [];
  let finalResults = [];
  for (let char of s) {
    if (char === '(') {
      open++;
    } else if (char === ')') {
      // this condition removes the braces that are opened without closing
      if (open === 0) continue;
      open--;
    }
    results.push(char);
  }
  // logic to remove extra open braces
  for (let i = results.length - 1; i >= 0; i--) {
    if (open-- > 0) continue;
    finalResults.push(results[i]);
  }

  return finalResults.reverse().join('');
};

console.log(minRemoveToMakeValid('lee(t(c)o)de)'));
console.log(minRemoveToMakeValid('a)b(c)d'));
console.log(minRemoveToMakeValid('))(('));
console.log(minRemoveToMakeValid('(a(b(c)d)'));
