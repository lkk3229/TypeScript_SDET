let num: number = 7;
let isPrime: boolean = num > 1;

for (let i: number = 2; i <= num / 2; i++) {
  if (num % i === 0) {
    isPrime = false;
    break;
  }
}

console.log(isPrime ? "Prime" : "Not Prime");