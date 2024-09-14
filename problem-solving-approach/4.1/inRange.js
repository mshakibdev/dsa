function inRange(num, min, max) {
  return num >= min && num <= max ? true : false;
}
console.log(inRange(5, 1, 10));  // Output: true
console.log(inRange(5, 6, 10));  // Output: false
console.log(inRange(5, 5, 5));   // Output: true
console.log(inRange(5, 0, 5));   // Output: true
console.log(inRange(5, 10, 1));  // Output: false (assuming the range is min <= max)
