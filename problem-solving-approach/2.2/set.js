// Creating a Set
const mySet = new Set();

// Adding values to a Set
mySet.add(1);
mySet.add(5);
mySet.add(5); // This won't be added, as 5 already exists in the Set
mySet.add("some text");
const obj = { a: 1, b: 2 };
mySet.add(obj);

console.log(mySet.size); // 4

// Checking if a value exists in the Set
console.log(mySet.has(1)); // true
console.log(mySet.has(3)); // false

// Removing a value from the Set
mySet.delete(5);

// Iterating over a Set
for (let item of mySet) {
  console.log(item);
}

// Converting Set to Array
const myArray = Array.from(mySet);
// or
const myArray2 = [...mySet];

// Use case: Removing duplicates from an array
const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = [...new Set(numbers)];
console.log(uniqueNumbers); // [1, 2, 3, 4, 5]

// Use case: Efficient lookup
const blacklist = new Set(["spam@example.com", "bad@example.com"]);
function isBlacklisted(email) {
  return blacklist.has(email);
}
console.log(isBlacklisted("spam@example.com")); // true
console.log(isBlacklisted("good@example.com")); // false

// Use case: Maintaining a list of unique items
class UniqueList {
  constructor() {
    this.items = new Set();
  }

  add(item) {
    this.items.add(item);
  }

  remove(item) {
    this.items.delete(item);
  }

  has(item) {
    return this.items.has(item);
  }

  get size() {
    return this.items.size;
  }
}

const uniqueList = new UniqueList();
uniqueList.add("apple");
uniqueList.add("banana");
uniqueList.add("apple"); // Won't be added again
console.log(uniqueList.size); // 2
console.log(uniqueList.has("banana")); // true
