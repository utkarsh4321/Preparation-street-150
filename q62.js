// Q62 Finding the Sum of the First N Prime Numbers
// Input: N = 4
// Output: 17
// Explanation: The sum of the first 4 prime numbers (2 + 3 + 5 + 7) is 17.

const readline = require('node:readline/promises');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function init() {
  let nums = +(await rl.question('Enter a string: '));
  let sum = 0;
  let num = 1;
  let n = nums;
  while (n > 0) {
    let count = 0;
    for (let i = 1; i * i <= num; i++) {
      if (num % i == 0) {
        count++;
        if (parseInt(num / i) !== i) {
          count++;
        }
      }
    }
    if (count == 2) {
      sum += num;
      n--;
    }
    num++;
  }
  console.log(
    'The sum for the first ' + nums + ' ' + 'Prime number are' + ' ' + sum
  );

  rl.close();
}
init();
