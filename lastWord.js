function lastWord (str) {
  return str.trim().split(' ').at(-1).length
}

console.log(lastWord("Hello World"))
console.log(lastWord("   fly me   to   the moon  "))
console.log(lastWord("luffy is still joyboy"))