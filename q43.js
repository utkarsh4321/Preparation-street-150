// Q43 Finding All Divisors of a Number
const readline = require('node:readline/promises');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function init(){
    const num1 = Number(await rl.question('Enter a number: '));
    let str = [];
    for(let i = 1;i*i<=num1;i++){
        if(num1 % i == 0){
            str.push(i);
            if(parseInt(num1/i) !== i ){
                str.push(parseInt(num1/i));
            }
        }
    }
    console.log(str.sort((a,b)=>a-b));
    
    rl.close();
}
init();
