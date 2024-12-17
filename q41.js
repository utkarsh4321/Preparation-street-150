// Q1 Finding the Count of Specific Digits in a Number
const readline = require('node:readline/promises');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function init(){
    const num1 = Number(await rl.question('Enter a number: '));
    const num2 = Number(await rl.question("Enter a digit for which you want to find the occurence: "));
    let temp  = num1;
    let count = 0;
    while(temp>0){
        let lastDig = temp % 10;
        if(lastDig == num2){
            count++;
        }
        temp = parseInt(temp / 10);
    }
    console.log("The count of the occurence of digit " + num2 + " is " + count);
    rl.close();
}
init();
// rl.question(`Please enter number? and digit for which you want occurence`, name => {
//     console.log(name);
//     // const num = Number(name);
//     // let numsum = num;
//     // while(numsum > 10){
//     //     let sum = 0;
//     //     let temp = numsum;
//     //     while(temp > 0){
//     //         sum += temp % 10;
//     //         temp = parseInt(temp/10);
//     //     }
//     //     numsum = sum;
//     // }
//     // console.log(numsum);
//     rl.close();
//   });