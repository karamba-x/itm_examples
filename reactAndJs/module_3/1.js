const factorialMemo = (function() {
  const memo = {};
  return function(n) {
    if (n in memo) {
      return memo[n];
    }
    if (n === 0 || n === 1) {
      return 1;
    }
    memo[n] = n * factorialMemo(n - 1);
    return memo[n];
  };
})();

console.log(factorialMemo(5)); // 120
console.log(factorialMemo(3)); // 6