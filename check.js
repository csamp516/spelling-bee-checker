const isWord = require('is-word');
const lettersRaw = process.argv[2];
const first2 = process.argv[3];
const wordLength = parseInt(process.argv[4]);
const fs = require('fs');
const wordListPath = require('word-list');
const wordArray = fs.readFileSync(wordListPath, 'utf8').split('\n');
const cliProgress = require('cli-progress');
const colors = require('colors');
const { get } = require('http');

console.log('Letters raw', lettersRaw);
console.log('First 2', first2);
console.log('wordLength', wordLength);

const TOTAL_POSSIBLE = 7 ** (wordLength - 2);
const bar = new cliProgress.SingleBar(
  {
    format: '{bar}| {percentage}% || {value}/{total} Words Tested || ETA: {eta}s'.brightCyan,
  },
  cliProgress.Presets.shades_classic
);
console.log('TOTAL_POSSIBLE', TOTAL_POSSIBLE);
bar.start(TOTAL_POSSIBLE, 0);
let current = 0;
const letters = [];
const MIDDLE_LETTER = lettersRaw[0];

for (const letter of lettersRaw) {
  letters.push(letter);
}
const words = generateWords(letters, wordLength - 2, '');

function generateWords(input, length, current) {
  if (current.length === length) return [current];
  const output = [];
  for (let i = 0; i < input.length; i++) {
    output.push.apply(output, generateWords(input, length, current + input[i]));
  }
  return output;
}

const results = [];
for (let word of words) {
  const check = first2 + word;
  // console.log('check', check);
  if (wordArray.includes(check) && check.search(MIDDLE_LETTER) > -1) {
    results.push(check);
  }
  current++;
  bar.update(current);
}

bar.stop();
console.log('WORDS!'.rainbow);
for (let result of results) {
  console.log(result.yellow);
}
