function runInOrder(functions, delays) {
  delays.forEach((delay, index) => {
    setTimeout(() => {
      functions[index]()
    }, delay)
  })
}

const functions = [() => console.log("first"), () => console.log("second"), () => console.log("third")];
const delays = [2000, 1000, 3000];

runInOrder(functions, delays);