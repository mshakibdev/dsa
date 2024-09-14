// Creating a Map
const myMap = new Map();

// Adding key-value pairs
myMap.set("key1", "value1");
myMap.set(42, "answer");
myMap.set({ a: 1 }, "object as key");

// Getting values
console.log(myMap.get("key1")); // 'value1'
console.log(myMap.get(42)); // 'answer'

// Checking if a key exists
console.log(myMap.has("key1")); // true
console.log(myMap.has("key2")); // false

// Getting the size of the Map
console.log(myMap.size); // 3

// Deleting a key-value pair
myMap.delete(42);
console.log(myMap.size); // 2

// Iterating over a Map
for (let [key, value] of myMap) {
  console.log(key, value);
}

// Clearing all entries
myMap.clear();
console.log(myMap.size); // 0

// Using objects as keys
const objKey1 = { id: 1 };
const objKey2 = { id: 2 };
myMap.set(objKey1, "value for object 1");
myMap.set(objKey2, "value for object 2");

console.log(myMap.get(objKey1)); // 'value for object 1'

// Creating a Map from an array of key-value pairs
const arrayMap = new Map([
  ["key1", "value1"],
  ["key2", "value2"],
]);

console.log(arrayMap.get("key2")); // 'value2'

// Converting Map to array
const mapArray = Array.from(arrayMap);
console.log(mapArray); // [['key1', 'value1'], ['key2', 'value2']]

// Getting all keys or values
const keys = Array.from(arrayMap.keys());
const values = Array.from(arrayMap.values());

console.log(keys); // ['key1', 'key2']
console.log(values); // ['value1', 'value2']
