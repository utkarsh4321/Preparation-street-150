// Q61 Generating a Matrix of Fibonacci Numbers
// Input: size = 3
// Output:
// 1 1 2
// 3 5 8
// 13 21 34

const readline = require('node:readline/promises');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function init() {
  let num = +(await rl.question('Enter a string: '));
  function fib(n) {
    if (n == 1 || n == 2) {
      return 1;
    }
    return fib(n - 1) + fib(n - 2);
  }
  let count = 0;
  for (let i = 0; i < num; i++) {
    let str = '';
    for (let j = 0; j < num; j++) {
      count++;
      str += fib(count) + ' ';
    }
    console.log(str);
  }

  rl.close();
}
init();
