// para executar o código tsc ex5/ex5.ts && node ex5/ex5.js

const word: string = 'tryber'
const wordSplit: string[] = word.split('')
const reverseWord: string[] = []

for (let i = wordSplit.length - 1; i >= 0; i--) {
  reverseWord.push(wordSplit[i])
}

console.log(reverseWord.join(''))
