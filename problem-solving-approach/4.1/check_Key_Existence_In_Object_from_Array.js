// Sample object
const obj = {
  10: "Ten",
  20: "Twenty",
  30: "Thirty",
};

// Sample array of numbers
const numbers = [5, 10, 15, 20, 25, 30];

// Method 1: Using Object.hasOwnProperty()
function checkKeyExistsMethod1(obj, numbers) {
  return numbers.map((num) => obj.hasOwnProperty(num));
}

// Method 2: Using 'in' operator
function checkKeyExistsMethod2(obj, numbers) {
  return numbers.map((num) => num in obj);
}

// Method 3: Using Object.keys() and includes()
function checkKeyExistsMethod3(obj, numbers) {
  const keys = Object.keys(obj).map(Number); // Convert string keys to numbers
  return numbers.map((num) => keys.includes(num));
}

// Method 4: Using Object.keys() and Set for better performance with large arrays
function checkKeyExistsMethod4(obj, numbers) {
  const keySet = new Set(Object.keys(obj).map(Number));
  return numbers.map((num) => keySet.has(num));
}

// Usage
console.log(checkKeyExistsMethod1(obj, numbers));
// Output: [false, true, false, true, false, true]

console.log(checkKeyExistsMethod2(obj, numbers));
// Output: [false, true, false, true, false, true]

console.log(checkKeyExistsMethod3(obj, numbers));
// Output: [false, true, false, true, false, true]

console.log(checkKeyExistsMethod4(obj, numbers));
// Output: [false, true, false, true, false, true]

// Bonus: Finding which numbers exist as keys
const existingKeys = numbers.filter((num) => num in obj);
console.log(existingKeys);
// Output: [10, 20, 30]
