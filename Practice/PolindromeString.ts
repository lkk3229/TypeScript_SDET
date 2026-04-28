let original1: string = "radar";
let rev: string = "";

for (let i = original1.length - 1; i >= 0; i--) {
  rev = rev + original1[i];

}

if (original1 === rev) {
  console.log(`${original1} is a palindrome`);
} else {
  console.log(`${original1} is not a palindrome`);
}