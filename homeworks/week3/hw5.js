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
  for (let i = 1; i <= n.length - 1; i++) {
    const tmp = n[i].split(' ')
    const [A, B, K] = tmp
    console.log(compare(A, B, K))
  }
}

function compare(A, B, K) {
  if (A === B) {
    return 'DRAW'
  }
  if (K === '-1') {
    [A, B] = [B, A]
  }
  if (A.length === B.length) {
    return (A > B) ? 'A' : 'B'
  }
  return (A.length > B.length) ? 'A' : 'B'
}
