/*
необходимо реализовать функцию сортировочного центра,
которая на вход принимает какой-то вес посылок и отправляет их самым оптимальным транспортом,
под оптимальностью мы понимаем, что транспорт едет полностью загруженный, минимальное количество раз.
У каждого транспорта есть грузоподъемность, которая записана в переменной transportsDefault.
*/

export const transportsDefault = [
  5000, // Поезд
  2000, // Грузовик
  1000, // Фургон
  100, // Легковой автомобиль
  10, // Почтальон
];

/**
 *
 * @param {number} weight Вес посылок
 * @param {number[]} transports Массив транспортов с грузоподъемностью
 *
 * @returns {Object}
 */
export const transSort = (weight, transports = transportsDefault) => {
  const result = {};

  for (let i = 0; i < transports.length; i++) {
    const capacity = transports[i];
    const numVehicles = Math.floor(weight / capacity);
    weight -= numVehicles * capacity;
    result[capacity] = numVehicles;
  }

  return result;
};

// Примеры вызовов
console.log(transSort(10410)); // { 5000: 2, 2000: 0, 1000: 0, 100: 4, 10: 1 }
console.log(transSort(2100)); // { 5000: 0, 2000: 1, 1000: 0, 100: 1, 10: 0 }
