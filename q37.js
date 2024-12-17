// Find perfect sprt

const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question(`Please enter number?`, name => {
  const num = Number(name);
  if(num == 0){
      console.log(num + "is perfect square");
        return;
  }
  let odd = 1;
  let temp = num;
  while(temp>0){
    temp-=odd;
    odd+=2;
  }
  if(temp == 0){
    console.log(num + "is perfect square")
  }else{
    console.log(num + "is not perfect square")

  }
    
// const sq = parseInt(Math.sqrt(num));
// console.log(sq);
// if(sq * sq == num){
//     console.log(num + "is perfect square");
// }else{
//     console.log(num + "is not perfect square");

// }
  rl.close();
});