function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    const results = []
    let completed = 0

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((res) => {
          results[index] = res;
          completed++;

          if (completed === promises.length) {
            resolve(results)
          }
        })
        .catch(reject)
    });
  })
}

const promiseA = new Promise((res) => setTimeout(() => res(123), 1000));
const promiseB = Promise.resolve("a");
const promiseC = new Promise((res) => setTimeout(() => res(true), 100));
const promiseD = new Promise((res, rej) =>
  setTimeout(() => rej("error"), 1000)
);

Promise.all([promiseA, promiseB, promiseC]).then(console.log);
promiseAll([promiseA, promiseB, promiseC]).then(console.log);
Promise.all([promiseA, promiseB, promiseD]).catch(console.error);
promiseAll([promiseA, promiseB, promiseD]).catch(console.error);