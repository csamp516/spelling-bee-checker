const isWord = require('is-word');
const letters = process.argv[2];
const first2 = process.argv[3];
const wordLength = parseInt(process.argv[4]);
const fs = require('fs');
const wordListPath = require('word-list');
const wordArray = fs.readFileSync(wordListPath, 'utf8').split('\n');
const cliProgress = require('cli-progress');
const colors = require('colors');
const { get } = require('http');

console.log('First 2', first2);
console.log('wordLength', wordLength);

for (const word of wordArray) {
  if (word.substring(0, 2) === first2 && word.length === parseInt(wordLength)) {
    let isMatch = true;
    for (const letter of word) {
      if (letters.search(letter) < 0) {
        isMatch = false;
      }
    }
    if (isMatch) {
      console.log(word);
    }
  }
}
