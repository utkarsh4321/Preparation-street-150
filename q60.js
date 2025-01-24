// Q60 Finding the Largest Prime Factor of a Number
// Input: number = 28
// Output: 7
// Explanation: The prime factors of 28 are 2 and 7, with the largest being 7.

const readline = require('node:readline/promises');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function init() {
  let num = +(await rl.question('Enter a string: '));
  let finalNum = num;
  let primeFactor = [];
  while (num % 2 == 0) {
    primeFactor.push(2);
    num = parseInt(num / 2);
  }
  for (let i = 3; i * i <= num; i++) {
    if (num % i == 0) {
      primeFactor.push(i);
      num = parseInt(num / i);
    } else {
      i += 2;
    }
  }
  if (num > 2) {
    primeFactor.push(num);
  }
  console.log(
    'The largest prime factor of number ' +
      finalNum +
      ' is ' +
      Math.max(...primeFactor)
  );

  rl.close();
}
init();
