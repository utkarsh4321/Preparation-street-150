// Q56 Generating a Matrix with Multiplication Table
// Input: size = 3
// Output: 1 2 3
// 2 4 6
// 3 6 9

const readline = require('node:readline/promises');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function init() {
  let num = +(await rl.question('Enter a string: '));
  for (let i = 1; i <= num; i++) {
    let str = '';
    for (let j = 1; j <= num; j++) {
      str += i * j;
      str += ' ';
    }
    console.log(str);
  }
  rl.close();
}
init();
