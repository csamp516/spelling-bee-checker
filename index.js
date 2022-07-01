const letters = ['L', 'N', 'A', 'B', 'V', 'I', 'E'];
const SpellChecker = require('spellchecker');
const isWord = require('is-word');
const fs = require('fs');

// Returns the path to the word list which is separated by `\n`
const wordListPath = require('word-list');

const wordArray = fs.readFileSync(wordListPath, 'utf8').split('\n');

const eng = isWord('american-english');

console.log('is Word?', eng.check('VALVE'));
let word = 'VI';
for (i of letters) {
  for (j of letters) {
    for (k of letters) {
      for (l of letters) {
        for (m of letters) {
          for (n of letters) {
            for (o of letters) {
              for (p of letters) {
                const combo = word + i + j + k + l + m + n; //+ o + p;
                // if (eng.check(combo.toLowerCase())) {
                if (wordArray.includes(combo.toLowerCase())) {
                  console.log(combo.toLowerCase());
                }
              }
            }
          }
        }
      }
    }
  }
}
