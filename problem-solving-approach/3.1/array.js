// Sample array for demonstrations
const numbers = [1, 2, 3, 4, 5];
const fruits = ["apple", "banana", "cherry", "date"];

// 1. forEach()
// Executes a provided function once for each array element
numbers.forEach((num) => console.log(num));

// 2. map()
// Creates a new array with the results of calling a provided function on every element
const doubled = numbers.map((num) => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// 3. filter()
// Creates a new array with all elements that pass the test implemented by the provided function
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // [2, 4]

// 4. reduce()
// Executes a reducer function on each element of the array, resulting in a single output value
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 15

// 5. find()
// Returns the first element in the array that satisfies the provided testing function
const found = numbers.find((num) => num > 3);
console.log(found); // 4

// 6. findIndex()
// Returns the index of the first element in the array that satisfies the provided testing function
const foundIndex = numbers.findIndex((num) => num > 3);
console.log(foundIndex); // 3

// 7. some()
// Tests whether at least one element in the array passes the test implemented by the provided function
const hasEven = numbers.some((num) => num % 2 === 0);
console.log(hasEven); // true

// 8. every()
// Tests whether all elements in the array pass the test implemented by the provided function
const allPositive = numbers.every((num) => num > 0);
console.log(allPositive); // true

// 9. includes()
// Determines whether an array includes a certain value among its entries
console.log(fruits.includes("banana")); // true

// 10. indexOf()
// Returns the first index at which a given element can be found in the array
console.log(fruits.indexOf("cherry")); // 2

// 11. slice()
// Returns a shallow copy of a portion of an array
const sliced = fruits.slice(1, 3);
console.log(sliced); // ['banana', 'cherry']

// 12. splice()
// Changes the contents of an array by removing or replacing existing elements and/or adding new elements
const removed = fruits.splice(2, 1, "coconut");
console.log(fruits); // ['apple', 'banana', 'coconut', 'date']
console.log(removed); // ['cherry']

// 13. push()
// Adds one or more elements to the end of an array
fruits.push("elderberry");
console.log(fruits); // ['apple', 'banana', 'coconut', 'date', 'elderberry']

// 14. pop()
// Removes the last element from an array
const lastFruit = fruits.pop();
console.log(lastFruit); // 'elderberry'
console.log(fruits); // ['apple', 'banana', 'coconut', 'date']

// 15. unshift()
// Adds one or more elements to the beginning of an array
fruits.unshift("apricot");
console.log(fruits); // ['apricot', 'apple', 'banana', 'coconut', 'date']

// 16. shift()
// Removes the first element from an array
const firstFruit = fruits.shift();
console.log(firstFruit); // 'apricot'
console.log(fruits); // ['apple', 'banana', 'coconut', 'date']

// 17. concat()
// Merges two or more arrays
const moreFruits = ["fig", "grape"];
const allFruits = fruits.concat(moreFruits);
console.log(allFruits); // ['apple', 'banana', 'coconut', 'date', 'fig', 'grape']

// 18. join()
// Joins all elements of an array into a string
const fruitString = fruits.join(", ");
console.log(fruitString); // 'apple, banana, coconut, date'

// 19. reverse()
// Reverses the order of the elements in an array in place
fruits.reverse();
console.log(fruits); // ['date', 'coconut', 'banana', 'apple']

// 20. sort()
// Sorts the elements of an array in place
fruits.sort();
console.log(fruits); // ['apple', 'banana', 'coconut', 'date']

// 21. flat()
// Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth
const nestedArray = [1, [2, 3], [[4, 5]]];
const flatArray = nestedArray.flat(2);
console.log(flatArray); // [1, 2, 3, 4, 5]

// 22. flatMap()
// Maps each element using a mapping function, then flattens the result into a new array
const sentences = ["Hello World", "Good Morning"];
const words = sentences.flatMap((sentence) => sentence.split(" "));
console.log(words); // ['Hello', 'World', 'Good', 'Morning']
