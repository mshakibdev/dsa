//(not useful for non-string keys)
//function countItemsWithMap(arr) {
//   let countObj = arr.reduce((count, item) => {
//     count[item] = (count[item] || 0) + 1;
//     return count;
//   }, {});

//   return countObj;
// }

//  Counting with Map object (useful for non-string keys)
function countItemsWithMap(arr) {
  const count = new Map();
  for (const item of arr) {
    console.log(item);
    count.set(item, (count.get(item) || 0) + 1);
  }
  return count;
}

// Example of usage:

console.log(countItemsWithMap([1, 2, 2, 3, 3, 3])); // Output: {1: 1, 2: 2, 3: 3}
console.log(countItemsWithMap(["a", "b", "a", "c", "b", "b"])); // Output: {a: 2, b: 3, c: 1}
console.log(countItemsWithMap([])); // Output: {}
console.log(countItemsWithMap([true, false, true, true])); // Output: {true: 3, false: 1}
console.log(countItemsWithMap([1, "1", 2, "2", 2])); // Output: {1: 1, '1': 1, 2: 2, '2': 1}
