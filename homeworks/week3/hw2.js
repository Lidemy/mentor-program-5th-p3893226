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
  const tmp = n[0].split(' ')
  const N = Number(tmp[0])
  const M = Number(tmp[1])
  for (let i = N; i <= M; i++) {
    isNarcissistic(i)
  }
}

function isNarcissistic(num) { // 判斷是否為水仙花數
  const arr = num.toString().split('')
  const leng = arr.length
  let count = 0
  arr.forEach((x) => {
    count += Math.pow(Number(x), leng)
  })
  // eslint-disable-next-line no-unused-expressions
  count === num ? console.log(num) : false
}
