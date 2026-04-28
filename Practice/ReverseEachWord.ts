let input1: string = "This is Ram";
let words: string[] = input1.split(" ");
let result: string = "";

for (let i: number = 0; i < words.length; i++) {
  let word: string = words[i];
  let reversedWord: string = "";

  for (let j: number = word.length - 1; j >= 0; j--) {
    reversedWord += word[j];
  }

  result += reversedWord + " ";
}

console.log(result.trim());
