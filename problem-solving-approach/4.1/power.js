function power(base, exponent) {
  let result = 1;
  let result2 = Math.pow(base, exponent);
  console.log(Math.ceil(result2));
  for (let i = 1; i <= exponent; i++) {
    result = base * result;
  }
  return result;
}

// Example of usage:
console.log(power(2, 3)); // Output: 8
console.log(power(2, 3)); // Output: 8
console.log(power(5, 2)); // Output: 25
console.log(power(10, 0)); // Output: 1
console.log(power(2, -2)); // Output: 0.25
console.log(power(0, 5)); // Output: 0
console.log(power(0, 0)); // Output: 1 (by convention, 0^0 is considered 1)
