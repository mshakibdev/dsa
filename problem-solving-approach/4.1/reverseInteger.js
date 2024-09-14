function reverseInteger(x) {
  // Convert to string, reverse it, then back to number
  const reversed = parseInt(
    Math.abs(x).toString().split("").reverse().join("")
  );

  // Check for 32-bit integer overflow
  if (reversed > 0x7fffffff) {
    return 0;
  }

  // Return with original sign
  return x < 0 ? -reversed : reversed;
}

console.log(reverseInteger(123));
// Output: 321

console.log(reverseInteger(-123));
// Output: -321

console.log(reverseInteger(120));
// Output: 21

console.log(reverseInteger(1534236469));
// Output: 0 (because reversing it would cause overflow)
