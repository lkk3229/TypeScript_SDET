// string - Text value or a combination of characters
/*
String Declaration:
1. Using double quotes ("") 
2. Using single quotes ('')
3. Using backticks (``) - Template literals, allows for multi-line strings and string interpolation

// index in string start with 0

'' or " " or ` `(backticks)

*/

// declaration of strings
let name1: string = "Alice"; // Using double quotes
let name2: string = 'Bob'; // Using single quotes
let greeting: string = `Hello, ${name1}!`; // Using backticks with string interpolation

console.log(name1); // Outputs: Alice
console.log(name2); // Outputs: Bob 
console.log(greeting); // Outputs: Hello, Alice!

// When to use backtick

let num:number=10;

console.log("Number is:", num); // Outputs: Number is: 10  // valid
console.log("Number is: ${num}"); // Outputs: Number is: ${num}  // invalid, it will not evaluate the expression and will treat it as a normal string
console.log('Number is: ${num}'); // Outputs: Number is: ${num}  // invalid
console.log(`Number is: ${num}`); // Outputs: Number is: 10  // valid, it will evaluate the expression and will give the output

// String properties and methods
let str: string = "Hello, TypeScript!";

// 1. length - attribute
console.log("Length of string:", str.length); // Outputs: 18

// 2. toUpperCase() - method to convert string to uppercase
console.log("Uppercase string:", str.toUpperCase()); // Outputs: HELLO, TYPESCRIPT!

// toLowerCase() - method to convert string to lowercase
console.log("Lowercase string:", str.toLowerCase()); // Outputs: hello, typescript!

// 3. charAt(index) and indexOf(string) - methods to access characters and find index of a substring
console.log("Character at index 7:", str.charAt(7)); // Outputs: T
console.log("Index of 'Type':", str.indexOf("Type")); // Outputs: 7

// 4. substring(start, end) - method to extract a portion of the string
// It takes two parameters: start index and end index (optional). If end index is not provided, it will extract till the end of the string.
// end index is exclusive, it will not include the character at end index in the result
console.log("Substring from index 7 to 11:", str.substring(7, 11)); // Outputs: Type
console.log("Substring from index 7 to end:", str.substring(7)); // Outputs: TypeScript!

// 5. includes(substring) - method to check if a substring is present in the string
console.log("Does the string include 'Script'?", str.includes("Script")); // Outputs: true
console.log("Does the string include 'Java'?", str.includes("Java")); // Outputs: false

// 6. startsWith(substring) and endsWith(substring) - methods to check if the string starts or ends with a specific substring
console.log("Does the string start with 'Hello'?", str.startsWith("Hello")); // Outputs: true
console.log("Does the string end with '!'?", str.endsWith("!")); // Outputs: true
 
// 7. replace(searchValue, newValue) - method to replace a substring with a new value
console.log("String after replacement:", str.replace("TypeScript", "JavaScript")); // Outputs: Hello, JavaScript!

// 8. split(separator) - method to split the string into an array of substrings based on a specified separator
let words: string[] = str.split(", "); // Splits the string into an array of words using ", " as the separator
console.log("Array of words:", words); // Outputs: ["Hello", "TypeScript!"]

// 9. trim(), trimStart(), trimEnd() - methods to remove whitespace from the string
let strWithWhitespace: string = "   Hello, TypeScript!   ";
console.log("String with whitespace:", `"${strWithWhitespace}"`); // Outputs: "   Hello, TypeScript!   "
console.log("Trimmed string:", `"${strWithWhitespace.trim()}"`); // Outputs: "Hello, TypeScript!"
console.log("Trimmed start string:", `"${strWithWhitespace.trimStart()}"`);  // Outputs: "Hello, TypeScript!   "
console.log("Trimmed end string:", `"${strWithWhitespace.trimEnd()}"`); // Outputs: "   Hello, TypeScript!"

// 10. concat(string1, string2, ...) - method to concatenate multiple strings into one
let str1: string = "Hello";
let str2: string = "World";
let concatenatedString: string = str1.concat(", ", str2, "!");
console.log("Concatenated string:", concatenatedString); // Outputs: Hello, World!

// concept of immutability of strings
let originalString: string = "Hello";
let modifiedString: string = originalString + ", World!";
console.log("Original string:", originalString); // Outputs: Hello
console.log("Modified string:", modifiedString); // Outputs: Hello, World!

// Multiline strings using backticks
let multilineString: string = `This is a multiline string.
It can span multiple lines without needing special characters.`;
console.log("Multiline string:", multilineString);  // Outputs: This is a multiline string.
// It can span multiple lines without needing special characters.






