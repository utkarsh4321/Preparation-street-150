// Q42 Generating a Fibonacci Sequence Using Recursion
const readline = require('node:readline/promises');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function init(){
    const num1 = Number(await rl.question('Enter a number: '));
    let prev = 0;
    let next = 1;
    let str = " ";
    function rec(){
        if(prev == 0){
            str += 0;
            str += " ";
        }
        str += next;
        str += " ";

        let sum = prev + next;
        if(sum < num1){
            prev = next;
            next = sum;
            rec();
        }
    }
    rec()
    console.log(str);
    
    rl.close();
}
init();
