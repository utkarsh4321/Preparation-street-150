
const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`Please enter number?`, name => {
    const num = Number(name);
    let numsum = num;
    while(numsum > 10){
        let sum = 0;
        let temp = numsum;
        while(temp > 0){
            sum += temp % 10;
            temp = parseInt(temp/10);
        }
        numsum = sum;
    }
    console.log(numsum);
    rl.close();
  });