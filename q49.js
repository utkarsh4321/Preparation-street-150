//Q49 Finding the Second Largest Number in an Array
// 

const readline = require('node:readline/promises');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function init(){
    let str = await rl.question('Enter number: ')
   str =  str.split(',').map(item=>+item)
    let largestElement = str[0]
    let secondLargestElement = -Infinity;
    for(let i = 0;i<str.length;i++){
        if(secondLargestElement < str[i] && largestElement > str[i]){
            secondLargestElement = str[i];
        }else if(largestElement < str[i]){
            secondLargestElement = largestElement;
            largestElement = str[i];
        }
    }
    console.log("The largest Element is: ", largestElement);
    console.log("The second largest element is: ",secondLargestElement);
    rl.close();
}
init()