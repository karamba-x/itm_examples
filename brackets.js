const brackets = {
  ')': '(',
  '}': '{',
  ']': '[',
}

function isValid(str) {
  const stack = [];

  for (let char of str) {
    if (brackets.hasOwnProperty(char)) {
      if (stack.pop() !== brackets[char]) return false;
    } else {
      stack.push(char)
    }
  }

  return stack.length === 0;
}

console.log(isValid("()"));       // true
console.log(isValid("()[]{}"));   // true
console.log(isValid("(]"));       // false
console.log(isValid("([)]"));     // false
console.log(isValid("{[]}"));     // true