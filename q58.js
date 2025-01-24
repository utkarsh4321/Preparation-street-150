// Q58 Finding the Sum of the First N Odd Numbers
// Input: N = 5
// Output: 25
// Explanation: Sum of the first 5 odd numbers (1 + 3 + 5 + 7 + 9) is 25.

const readline = require('node:readline/promises');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function init() {
  let num = +(await rl.question('Enter a string: '));
  let sum = 0;
  let counter = num;
  let t = 1;
  while (counter > 0) {
    if (t % 2 !== 0) {
      console.log(t);
      sum += t;
      counter--;
    }
    t++;
  }
  //   for (let i = 1; i <= num; i++) {
  //     if (i % 3 == 0) {
  //       sum += i;
  //     }
  //   }
  console.log('The sum of first ' + num + ' is' + ' ' + sum);

  rl.close();
}
init();
