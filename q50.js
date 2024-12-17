//Q50 Finding the Longest Substring Without Repeating Characters

const readline = require("node:readline/promises");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function init() {
  let str = await rl.question("Enter string: ");
  let n = str.length;
  let longestStr = "";

  for (let i = 0; i < n; i++) {
    let tempStr = "";
    for (let j = i; j < n; j++) {
      if (tempStr.indexOf(str[j]) !== -1) {
        if (tempStr.length > longestStr.length) {
          longestStr = tempStr;
        }
        break;
      } else {
        tempStr += str[j];
      }
    }
  }
  console.log(longestStr);
  rl.close();
}
init();
