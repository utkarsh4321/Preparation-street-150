// Find sum of squares if digit

const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question(`Please enter number?`, name => {
  const num = Number(name);
  let temp = num;
  let sum  = 0;
  while(temp > 0){
    sum += (temp % 10) ** 2;
    temp = parseInt(temp/10);
  }
  console.log(sum);
    
// const sq = parseInt(Math.sqrt(num));
// console.log(sq);
// if(sq * sq == num){
//     console.log(num + "is perfect square");
// }else{
//     console.log(num + "is not perfect square");

// }
  rl.close();
});