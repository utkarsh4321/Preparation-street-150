// Q66 Checking for Perfect Squares in a Range
// Input: start = 1, end = 10
// Output: [1, 4, 9]
// Explanation: Perfect squares between 1 and 10 are 1, 4, and 9.

const readline = require('node:readline/promises');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function init() {
  let start = +(await rl.question('Enter start range: '));
  let end = +(await rl.question('Enter end range: '));

  function checkPerfectSquare(num) {
    if (num < 0) return false;
    let sq = parseInt(Math.sqrt(num));
    return sq * sq === num;
  }
  const res = [];
  for (let i = start; i <= end; i++) {
    if (checkPerfectSquare(i)) {
      res.push(i);
    }
  }
  console.log(res);
  rl.close();
}
init();
