// Q64 Finding the Sum of Numbers in a String
// Input: string = "The numbers are 12 and 34"
// Output: 46
// Explanation: The sum of numbers 12 and 34 is 46.

const readline = require('node:readline/promises');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function init() {
  let str = await rl.question('Enter a string: ');
  let sum = str.split(' ').reduce((prev, curr) => {
    if (!isNaN(curr)) {
      prev += +curr;
    }
    return prev;
  }, 0);
  console.log(sum);
  rl.close();
}
init();
