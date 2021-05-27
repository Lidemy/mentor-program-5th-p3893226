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
  const total = Number(n[0])
  const arr = []
  for (let i = 1; i <= total; i++) {
    arr.push(Number(n[i]))
  }
  for (let i = 0; i <= arr.length - 1; i++) {
    console.log(isPrime(arr[i]) ? 'Prime' : 'Composite')
  }
}
function isPrime(num) { // 判斷是否為質數
  const factor = []
  if (num === 1) {
    return false
  }
  for (let j = 1; j <= num; j++) {
    if (num % j === 0) {
      factor.push(j)
    }
  }
  return factor.length === 2
}
