let arr1: number[] = [1, 2, 2, 3, 4, 4];
let unique: number[] = [];

for (let i: number = 0; i < arr1.length; i++) {
  if (!unique.includes(arr1[i])) {
    unique.push(arr1[i]);
  }
}

console.log(unique);