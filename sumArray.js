const sumArray = (arr) => arr.reduce((num, acc) => acc += num, 0);

console.log(sumArray([1, 2, 3, 4, 5]));
// Output: 15

console.log(sumArray([-1, 2, -3, 4, -5]));
// Output: -3

console.log(sumArray([0, 0, 0, 0, 0]));
// Output: 0

console.log(sumArray([]));
// Output: 0