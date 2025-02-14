function subArray(arr) {
  let result = arr[0][0] * arr[0][1]
  arr.forEach((item) => {
    const composition = item[0] * item[1]
    if (composition > result) {
      result = composition
    }
  })
  return result
}

console.log(subArray([[2,3],[-2,4]]));