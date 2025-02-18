function findDuplicate(arr) {
  const seen = new Set();
  for (const num of arr) {
    if (seen.has(num)) {
      return num;
    }
    seen.add(num);
  }
}

console.log(findDuplicate([1, 2, 3, 4, 2])); // 2
console.log(findDuplicate([5, 3, 1, 2, 3, 4])); // 3