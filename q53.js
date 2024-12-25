// Q53 Finding All Pairs of Elements in an Array that Add Up to a Given Sum(Two sum)
// Example:
// Input: array = [1, 2, 3, 4, 5], target = 5
// Output: [(1, 4), (2, 3)]



const readline = require("node:readline/promises");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function init() {
  let num = await rl.question("Enter series of number: ");
  let target = +(await rl.question("Enter target: "));
  num =  num.split(',').map(item=>+item)

  let n = num.length;
  let temp = []
  let mm = new Map();
  for(let i = 0;i<n;i++){
    let sub = target - num[i];
    if(mm.has(sub)){
      temp.push([sub,num[i]])
    }else{
      mm.set(num[i],sub);
    }
  }
  
  console.log(temp);
  rl.close();
}
init();

