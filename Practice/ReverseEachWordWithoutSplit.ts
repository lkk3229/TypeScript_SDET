let input2: string = "This is Ram";
let result2: string = "";
let word: string = "";

for (let i: number = 0; i <= input2.length; i++) {
  if (i < input2.length && input2[i] !== ' ') {
    // build the current word
    word += input2[i];
  } else {
    // reverse the collected word
    for (let j: number = word.length - 1; j >= 0; j--) {
      result2 += word[j];
    }
    if (i < input2.length) {
      result2 += " "; // add space after each word
    }
    word = ""; // reset for next word
  }
}
console.log(result2);
