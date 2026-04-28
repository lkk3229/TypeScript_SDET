let n1 : number = 12345;
let rev1 : number = 0;

while (n1 != 0) {
  let digit = n1 % 10;
  rev1 = rev1 * 10 + digit;
  n1 = Math.floor(n1 / 10);
}

console.log(rev1);
