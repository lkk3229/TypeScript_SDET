let input: string = "Hello World 123";
let vowels: number = 0;
let consonants: number = 0;
let digits: number = 0;
let spaces: number = 0;

for (let i: number = 0; i < input.length; i++) {
  let ch: string = input[i];

  if (ch >= '0' && ch <= '9') {
    digits++;
  } else if (ch === ' ') {
    spaces++;
  } else if ("aeiouAEIOU".includes(ch)) {
    vowels++;
  } else if (
    (ch >= 'a' && ch <= 'z') ||
    (ch >= 'A' && ch <= 'Z')
  ) {
    consonants++;
  }
}

console.log("Vowels:", vowels);
console.log("Consonants:", consonants);
console.log("Digits:", digits);
console.log("Spaces:", spaces);
