// Q54 Generating a Diamond Pattern of Stars
// Input: size = 5
//output
//   *  
//  ***  
// *****  
//  ***  
//   * 


const readline = require("node:readline/promises");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function init() {
  let n = +(await rl.question("Enter a number: "));
  for(let i = 1;i<=n;i++){
    let star = (2 * i) - 1;
    if(star > n){
      star = ((n - i) * 2) + 1;
    }
    let spaces = parseInt((n - star)/2);
    let str = '';
    for(let j = 1;j<=spaces;j++){
      str+=' ';
    }
    for(let k = 1;k<=star;k++){
      str+='*'
    }
    console.log(str);
  }

  rl.close();
}
init();
