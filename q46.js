// Determining the Length of a String Without Using Built-In Functions

const readline = require('node:readline/promises');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function init(){
    const str = await rl.question('Enter a string: ');
    console.log(str[1]);
    let count = 0;
    let i = 0;
    while(str[i] !== undefined){
        count++;
        i++;
    }
    console.log("The length of an",str,"Is",count)

    
    rl.close();
}
init()