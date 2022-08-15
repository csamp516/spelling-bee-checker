const isWord = require('is-word');
const first2 = process.argv[2];
const wordLength = parseInt(process.argv[3]);
const fs = require('fs');
const wordListPath = require('word-list');
const wordArray = fs.readFileSync(wordListPath, 'utf8').split('\n');
const cliProgress = require('cli-progress');
const colors = require('colors');
const { get } = require('http');

console.log('First 2', first2);
console.log('wordLength', wordLength);

for(const word of wordArray) {
  if(word.substring(0, 2) === first2 && word.length === parseInt(wordLength)) {
    console.log(word);
  }
}
