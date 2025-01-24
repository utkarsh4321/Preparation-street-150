// Q66 Finding All Subsets of a Set
// Input: set = [1, 2]
// Output: [[], [1], [2], [1, 2]]
// Explanation: The subsets of [1, 2] are the empty set, [1], [2], and [1, 2].

const readline = require('node:readline/promises');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function init() {
  let str = await rl.question('Enter a string: ');
  let numArr = str.split(' ').map((item) => +item);
  const res = [];
  const subset = [];
  function subsetGen(nums, index, res, subset) {
    res.push([...subset]);

    for (let i = index; i < nums.length; i++) {
      subset.push(nums[i]);
      subsetGen(nums, i + 1, res, subset);
      subset.pop();
    }
  }
  subsetGen(numArr, 0, res, subset);
  console.log(res);
  rl.close();
}
init();
