// para executar o código tsc ex2/ex2.ts && node ex2/ex2.js

const sequence: number = 6
const fibonacciSequence: number[] = []
let found: boolean = false

for (let i = 0; i < sequence; i++) {
  if (i === 0) {
    fibonacciSequence.push(0)
  } else if (i === 1) {
    fibonacciSequence.push(1)
  } else {
    fibonacciSequence.push(fibonacciSequence[i - 1] + fibonacciSequence[i - 2])
  }
}

console.log(fibonacciSequence)

for (let i = 0; i < sequence; i++) {
  if(fibonacciSequence[i] === sequence) {
    console.log('A sequência de Fibonacci contem o numero ' + sequence)
    found=true
    break
  } 

}

if(!found) {
  console.log('A sequência de Fibonacci não contem o numero ' + sequence)
}