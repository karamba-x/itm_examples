setTimeout(() => {
  for (let i = 0; i < 100000000; i++) {
    // Долгий цикл (эмуляция тяжелой задачи)
  }
  console.log("1 timer");
}, 1000);

setTimeout(() => {
  console.log("2 timer");
}, 1000);

setTimeout(() => {
  console.log("3 timer");
}, 1000);

