// Q63 Checking for a Balanced Bracket Sequence
// Input: string = "{[()]}"
// Output: True
// Explanation: The brackets are balanced

const readline = require('node:readline/promises');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function init() {
  let str = await rl.question('Enter a string: ');
  let matched = ['{', '[', '('];
  let nMatched = ['}', ']', ')'];
  let stack = [];
  let top = -1;
  for (let i = 0; i < str.length; i++) {
    if (matched.includes(str[i])) {
      stack.push(str[i]);
      top++;
    } else {
      if (
        stack.length == 0 ||
        (stack[top] !== '(' && str[i] == ')') ||
        (stack[top] !== '{' && str[i] == '}') ||
        (stack[top] !== '[' && str[i] == ']')
      ) {
        break;
      } else {
        stack.pop();
        top--;
      }
    }
  }
  if (top == -1) {
    console.log('Brackets are balanced');
  } else {
    console.log('Brackets are not balanced');
  }
  rl.close();
}
init();
