
const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`Please enter size of square matrix?`, name => {
    const num = Number(name);
    let count = 1;
    for(let i = 1;i<=num;i++){
        let str = '';
        for(let j = 1;j<=num;j++){
            str += count;
            str+=" ";
            count++;
        }
        console.log(str);
    }
    rl.close();
  });