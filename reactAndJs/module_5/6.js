const input = [
  { expired: false, order: 4, value: 'abcd' },
  { expired: true, order: 2, value: 'qwer' },
  { expired: false, order: 1, value: 'xyz1' },
  { expired: false, order: 3, value: 'abx2' }
];

function processInput(data) {
  return [...new Set(
    data
      .filter(item => !item.expired) 
      .sort((a, b) => a.order - b.order)
      .map(item => item.value)
      .join('')
      .split('')
      .reverse() 
  )].join(''); 
}

console.log(processInput(input));