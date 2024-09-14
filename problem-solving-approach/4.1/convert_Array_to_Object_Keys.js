// Scenario 1: Array elements as keys, with null values
function arrayToObjectNull(arr) {
  return Object.fromEntries(arr.map((item) => [item, null]));
}

// Scenario 2: Array elements as keys, with their indices as values
function arrayToObjectIndex(arr) {
  return Object.fromEntries(arr.map((item, index) => [item, index]));
}

// Scenario 3: Array elements as keys, with boolean true as values
function arrayToObjectTrue(arr) {
  return Object.fromEntries(arr.map((item) => [item, true]));
}

// Scenario 4: Array elements as keys, with custom value function
function arrayToObjectCustom(arr, valueFn) {
  return Object.fromEntries(
    arr.map((item, index) => [item, valueFn(item, index)])
  );
}

// Example usage:
const fruits = ["apple", "banana", "cherry"];

console.log(arrayToObjectNull(fruits));
// Output: { apple: null, banana: null, cherry: null }

console.log(arrayToObjectIndex(fruits));
// Output: { apple: 0, banana: 1, cherry: 2 }

console.log(arrayToObjectTrue(fruits));
// Output: { apple: true, banana: true, cherry: true }

console.log(arrayToObjectCustom(fruits, (item, index) => item.length));
// Output: { apple: 5, banana: 6, cherry: 6 }

// Using reduce for more control (Scenario 5)
function arrayToObjectReduce(arr, valueFn = () => true) {
  return arr.reduce((obj, item, index) => {
    obj[item] = valueFn(item, index);
    return obj;
  }, {});
}

console.log(arrayToObjectReduce(fruits, (item) => item.toUpperCase()));
// Output: { apple: 'APPLE', banana: 'BANANA', cherry: 'CHERRY' }
