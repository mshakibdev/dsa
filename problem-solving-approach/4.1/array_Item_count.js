// Sample array
const fruits = [
  "apple",
  "banana",
  "apple",
  "cherry",
  "apple",
  "banana",
  "date",
];

// Method 1: Using reduce
function countItemsReduce(arr) {
  return arr.reduce((count, item) => {
    count[item] = (count[item] || 0) + 1;
    return count;
  }, {});
}

// Method 2: Using forEach
function countItemsForEach(arr) {
  const count = {};
  arr.forEach((item) => {
    count[item] = (count[item] || 0) + 1;
  });
  return count;
}

// Method 3: Using Object.fromEntries and map
function countItemsMap(arr) {
  return Object.fromEntries(
    [...new Set(arr)].map((item) => [
      item,
      arr.filter((i) => i === item).length,
    ])
  );
}

// Method 4: Using for...of loop
function countItemsForOf(arr) {
  const count = {};
  for (const item of arr) {
    count[item] = (count[item] || 0) + 1;
  }
  return count;
}

// Usage
console.log(countItemsReduce(fruits));
console.log(countItemsForEach(fruits));
console.log(countItemsMap(fruits));
console.log(countItemsForOf(fruits));

// Output for all methods:
// { apple: 3, banana: 2, cherry: 1, date: 1 }

// Bonus: Counting with Map object (useful for non-string keys)
function countItemsWithMap(arr) {
  const count = new Map();
  for (const item of arr) {
    count.set(item, (count.get(item) || 0) + 1);
  }
  return count;
}

console.log(countItemsWithMap(fruits));
// Output: Map(4) { 'apple' => 3, 'banana' => 2, 'cherry' => 1, 'date' => 1 }
