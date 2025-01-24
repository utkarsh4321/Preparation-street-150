// Q56 Finding the GCD of Multiple Numbers
// Input: array = [12, 24, 36]
// Output: 12
//Explanation: The GCD of 12, 24, and 36 is 12.

const readline = require('node:readline/promises');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function init() {
  let num = await rl.question('Enter a string: ');
  num = num.split(',').map((item) => +item);
  console.log(num);
  let minNum = Math.min(...num);
  let gcd = 0;
  while (minNum > 0) {
    for (let i = 0; i < num.length; i++) {
      if (num[i] % minNum !== 0) {
        break;
      }
      if (i == num.length - 1) {
        if (minNum > gcd) {
          gcd = minNum;
        }
      }
    }
    if (minNum > 0) {
      minNum--;
    }
  }
  console.log(gcd);
  rl.close();
}
init();
