// Q59 Finding the Number of Perfect Numbers Up to a Given Limit
// Input: limit = 30
// Output: 1
// Explanation: There is only one perfect number (6) up to 30.

const readline = require('node:readline/promises');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function init() {
  let num = +(await rl.question('Enter a string: '));
  let perC = 0;
  for (let i = 1; i <= num; i++) {
    let sum = 0;
    for (let j = 1; j * j <= i; j++) {
      //   console.log(j);

      if (i % j == 0) {
        console.log(j);
        sum += j;
        if (i !== j) {
          if (parseInt(i / j) !== i) {
            sum += parseInt(i / j);
          }
        }
      }
    }
    if (sum == i) {
      console.log(i);
      perC += 1;
    }
  }
  console.log(
    'number of perfect square witing the range 1 to ' +
      num +
      ' ' +
      ' is ' +
      perC
  );
  rl.close();
}
init();
