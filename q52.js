// Q52 Calculating the Sum of a Series (1 + 1/2 + 1/3 + ... + 1/n)
// n = 4
// output Example:
// Input: n = 4
// Output: 2.083333
// Explanation: Sum of the series is 1 + 1/2 + 1/3 + 1/4 ≈ 2.083333.


const readline = require("node:readline/promises");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function init() {
  let num = +(await rl.question("Enter a number: "));
    let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += 1/i;
  }
  console.log(sum.toFixed(4));
  rl.close();
}
init();
