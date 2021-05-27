const readline = require('readline')

const lines = []
const rl = readline.createInterface({
  input: process.stdin
})

rl.on('line', (line) => {
  lines.push(line)
})

rl.on('close', () => {
  // eslint-disable-next-line
  solve(lines);
})

function solve(n) {
  const input = n[0]
  console.log(input === reverse(input) ? 'True' : 'False')
}

function reverse(str) { // 翻轉字串
  let newStr = ''
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i]
  }
  return newStr
}
