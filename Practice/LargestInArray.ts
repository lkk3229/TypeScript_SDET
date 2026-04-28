let arr: number[] = [10, 45, 3, 99, 23];
let max: number = arr[0];

for (let i: number = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}

console.log(max);