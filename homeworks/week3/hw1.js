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
  const number = Number(n[0])
  console.log(typeof number)
  for (let i = 1; i <= number; i++) {
    prinStars(i)
  }
}
function prinStars(num) {
  let str = ''
  for (let i = 1; i <= num; i++) {
    str += '*'
  }
  console.log(str)
}
