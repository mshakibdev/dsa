// 1. Expanding arrays
const fruits = ["apple", "banana"];
const moreFruits = ["orange", ...fruits, "mango"];
console.log(moreFruits); // ['orange', 'apple', 'banana', 'mango']

// 2. Copying arrays
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];
console.log(copiedArray); // [1, 2, 3]

// 3. Concatenating arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const concatenated = [...arr1, ...arr2];
console.log(concatenated); // [1, 2, 3, 4, 5, 6]

// 4. Spreading elements in function calls
function sum(x, y, z) {
  return x + y + z;
}
const numbers = [1, 2, 3];
console.log(sum(...numbers)); // 6

// 5. Spreading objects (ES2018 and later)
const baseObj = { a: 1, b: 2 };
const newObj = { ...baseObj, c: 3 };
console.log(newObj); // { a: 1, b: 2, c: 3 }

// 6. Merging objects
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj); // { a: 1, b: 3, c: 4 }

// 7. Creating a shallow copy of an object
const original = { a: 1, b: { c: 2 } };
const shallowCopy = { ...original };
console.log(shallowCopy); // { a: 1, b: { c: 2 } }

// 8. Using with strings
const str = "Hello";
const chars = [...str];
console.log(chars); // ['H', 'e', 'l', 'l', 'o']

// 9. Rest parameters in function definitions
function myFunc(firstArg, ...restArgs) {
  console.log(firstArg); // 1
  console.log(restArgs); // [2, 3, 4, 5]
}
myFunc(1, 2, 3, 4, 5);

// 10. Spreading Set into an array
const mySet = new Set([1, 2, 3, 3, 4, 5]);
const uniqueArray = [...mySet];
console.log(uniqueArray); // [1, 2, 3, 4, 5]
