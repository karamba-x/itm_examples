function getUniqueValues(arr) {
  return arr.reduce((unique, value) => {
      if (!unique.includes(value)) {
          unique.push(value);
      }
      return unique;
  }, []);
}

console.log(getUniqueValues([1, 2, 3, 3, 4, 5, 4, 6]));
// Ожидаемый результат: [1, 2, 3, 4, 5, 6]

console.log(getUniqueValues([5, 5, 5, 5, 5]));
// Ожидаемый результат: [5]

console.log(getUniqueValues([1, 2, 3, 4, 5]));
// Ожидаемый результат: [1, 2, 3, 4, 5]

console.log(getUniqueValues([]));
// Ожидаемый результат: []