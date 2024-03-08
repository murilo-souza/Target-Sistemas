// para executar o código tsc ex5/ex5.ts && node ex5/ex5.js
var word = 'tryber';
var wordSplit = word.split('');
var reverseWord = [];
for (var i = wordSplit.length - 1; i >= 0; i--) {
    reverseWord.push(wordSplit[i]);
}
console.log(reverseWord.join(''));
