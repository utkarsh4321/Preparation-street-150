// Generating a Multiplication Table for a Range

//Q50 Finding the Longest Substring Without Repeating Characters

const readline = require("node:readline/promises");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function init() {
  let start = +(await rl.question("Enter start range: "));
  let end = +(await rl.question("Enter end range: "));

  for (let i = start; i <= end; i++) {
    let tempStr = "";
    for (let j = 1; j <= 10; j++) {
      tempStr += `${i} x ${j} = ${i * j}\n`;
    }
    console.log(tempStr);
  }
  rl.close();
}
init();
