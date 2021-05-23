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
  const N = Number(n[0])
  for (let i = 1; i <= N; i++) {
    if (i === 1) {
      return 'Composite'
    } else {
      isPrime(i)
    }
  }
}
function isPrime(num) { // 判斷是否為質數
  const factor = []
  for (let j = 1; j <= num; j++) {
    if (num % j === 0) {
      factor.push(j)
    }
  }
  if (factor.length === 2) {
    return 'Prime'
  } else {
    return 'Composite'
  }
}
