function findUniqueNumber(arr) {
  const numSet = new Set();

  for (const num of arr) {
    if (numSet.has(num)) {
      numSet.delete(num);
    } else {
      numSet.add(num);
    }
  }

  return [...numSet][0];
}

console.log(findUniqueNumber([1, 2, 3, 2, 1])); // 3
console.log(findUniqueNumber([4, 5, 6, 5, 4])); // 6