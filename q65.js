// Q65 Finding the Longest Consecutive Sequence in an Array
// Input: array = [100, 4, 200, 1, 3, 2]
// Output: 4
// Explanation: The longest consecutive sequence is [1, 2, 3, 4].

const readline = require('node:readline/promises');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function init() {
  let str = await rl.question('Enter a string: ');
  let numArr = str.split(' ').map((item) => +item);
  let ss = new Set([...numArr]);
  let maxi = -Infinity;
  ss.forEach((item) => {
    let prev = item - 1;
    let count = 0;
    if (!ss.has(prev)) {
      let nextNum = item + 1;
      count = 1;
      while (ss.has(nextNum)) {
        nextNum++;
        count++;
      }
    }
    maxi = Math.max(maxi, count);
  });
  console.log(maxi);
  rl.close();
}
init();
