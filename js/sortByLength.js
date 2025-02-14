function sortByLength(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let swapped = false

    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j].length > arr[j + 1].length) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        swapped = true
      }
    }

    if (!swapped) break;
  }

  return arr;
}

console.log(sortByLength(["apple", "banana", "orange", "kiwi", "grape"]));
// Output: ["kiwi", "grape", "apple", "orange", "banana"]

console.log(sortByLength(["a", "bc", "def", "ghij", "klmno"]));
// Output: ["a", "bc", "def", "ghij", "klmno"]

console.log(sortByLength([]));
// Output: []

console.log(sortByLength(["xyz", "pq", "rs", "tuvw"]));
// Output: ["pq", "rs", "xyz", "tuvw"]
