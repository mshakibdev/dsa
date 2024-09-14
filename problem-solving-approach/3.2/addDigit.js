// leetcode-258
// Example 1:

// Input: num = 38
// Output: 2
// Explanation: The process is
// 38 --> 3 + 8 --> 11
// 11 --> 1 + 1 --> 2
// Since 2 has only one digit, return it.
// Example 2:

// Input: num = 0
// Output: 0
function addDigit(num) {
  while (num >= 10) {
    let sum = 0;

    while (num > 0) {
      // added the right most digit to sum
      sum += num % 10;
      // removes the rightmost digit from num
      num = Math.floor(num / 10);
    }
    num = sum;
    console.log(sum);
  }

  console.log(num);

  return num;
}

console.log(addDigit(0));
