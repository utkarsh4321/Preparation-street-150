// Q47 Generating a Number Pyramid 
// when row = 3
// 1
// 12
// 123

const readline = require('node:readline/promises');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function init(){
    const str = await rl.question('Enter rows: ');
    if(!isNaN(str)){
        let rows = parseInt(str);
        for(let i = 1;i<=rows;i++){
            let temp = '';
            for(let j = 1;j<=i;j++){
                temp += `${j} `
            }
            console.log(temp);
        }

    }else{
        console.log("Please enter correct number");
    }

    
    rl.close();
}
init()