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
  for (let i = 1; i <= n; i++) {
    prinStar(i)
  }
}
function prinStar(num) {
  let str = ''
  for (let i = 1; i <= num; i++) {
    str += '*'
  }
  console.log(str)
}
