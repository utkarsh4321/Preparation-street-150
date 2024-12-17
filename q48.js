// Q47 Finding the Sum of Prime Factors of a Number
// number = 12 output = 5
// prime factor of 12 are 2 , 3
// sum = 2 + 3 => 5

const readline = require('node:readline/promises');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function init(){
    const str = await rl.question('Enter number: ');
    if(!isNaN(str)){
        let sum = 0;
        let num = parseInt(str);
        for(let i =1;i<=num;i++){
            if((num % i) == 0){
              let count = 0;
              for(let k = 1;k*k<=i;k++){
                if(i%k == 0){
                  count++;
                  if(parseInt(i / k) !== k){
                    count++;
                  }
                }
              }
              if(count == 2){
                sum += i;
              }
            }
          }
          console.log("Sum of prime factor is",sum);

    }else{
        console.log("Please enter correct number");
    }

    
    rl.close();
}
init()