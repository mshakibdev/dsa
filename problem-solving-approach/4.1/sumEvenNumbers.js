function sumEvenNumbers(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) total += arr[i];
  }
  return total;
}

// Example of usage:
console.log(sumEvenNumbers([1, 2, 3, 4, 5]));  // Output: 6
console.log(sumEvenNumbers([2, 4, 6, 8]));     // Output: 20
console.log(sumEvenNumbers([1, 3, 5, 7]));     // Output: 0
console.log(sumEvenNumbers([]));               // Output: 0
console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6])); // Output: 12

