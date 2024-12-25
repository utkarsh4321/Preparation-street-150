// Q55 Counting the Number of Palindromic Substrings in a String
// Input: string = "aaa"
// Output: 6
// Explanation: Palindromic substrings are "a", "a", "a", "aa", "aa", "aaa".


const readline = require("node:readline/promises");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function init() {
  let str = await rl.question("Enter a string: ")
  let count = 0;
  for(let i = 0;i<str.length;i++){
    let ss = ''
    for(let j = i;j<str.length;j++){
      ss+=str[j];
      let r = ss.length - 1;
      let palindrome = true;
      for(let k = 0;k<r;k++){
        if(ss[k] != ss[r]){
          palindrome = false;
          break;
        }
        r--;
      }
      if(palindrome){
        count++;
      }
    }
    
  }
  console.log("The number of palindrome string present in " + str + ": ",count);
  rl.close();
}
init();
