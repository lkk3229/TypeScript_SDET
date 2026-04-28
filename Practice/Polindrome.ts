let num: number = 121;
let original: number = num;
let rev2: number = 0;

while (num > 0) {
  let digit = num % 10;          // get last digit
  rev2 = rev2 * 10 + digit;
  num = Math.floor(num / 10);    // remove last digit
}

if (original === rev2) {
  console.log(`${original} is a palindrome`);
} else {
  console.log(`${original} is not a palindrome`);
}