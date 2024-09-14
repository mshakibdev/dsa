function fibonacci(n) {
  // 1. initialize fibArray with 0 and 1
  let fibArray = [0, 1];
  //2. loop till n and push to fibarray with fib formula
  for (let i = 2; i <= n; i++) {
    fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
  }

  return n == 0 || n == 1 ? n : fibArray[n];
}

// Example of usage:
console.log(fibonacci(5)); // Output: 5
console.log(fibonacci(0)); // Output: 0
console.log(fibonacci(1)); // Output: 1
console.log(fibonacci(10)); // Output: 55
console.log(fibonacci(20)); // Output: 6765
