function countSymbols(str) {
  let count = 1
  let result = ''

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++
    } else {
      suffix = count > 1 ? count : ''
      result += str[i] + suffix
      count = 1
    }
  }

  return result
}

console.log(countSymbols(''))