// Q44 Finding the Average of Numbers in an Array
const readline = require('node:readline/promises');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function init(){
    const num1 = await rl.question('Enter a number: ');
    let str = [...num1].map(item=>parseInt(item)).reduce((item,acc)=>{
        return acc+=item;
    },0);
    console.log(parseInt(str/num1.length));    
    rl.close();
}
init();
