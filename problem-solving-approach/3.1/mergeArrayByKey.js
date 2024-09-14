//^ Merged two arrays of object based on a specific keys,
//^ if an object with same keys exist in both arrays their properties should be combined

function mergeArraysByKey(arr1, arr2, key) {
  const mergedArray = [...arr1];

  arr2.forEach((obj2) => {
    const matchingObj = mergedArray.find((obj1) => obj1[key] === obj2[key]);
    if (matchingObj) {
      Object.assign(matchingObj, obj2);
    } else {
      mergedArray.push(obj2);
    }
  });

  return mergedArray;
}

console.log(
  mergeArraysByKey([{ id: 1, name: "john" }], [{ id: 1, age: 30 }], "id")
);

console.log(
  mergeArraysByKey(
    [
      { id: 1, name: "john" },
      { id: 2, name: "jane" },
    ],
    [
      { id: 1, age: 30 },
      { id: 3, name: "joe" },
    ],
    "id"
  )
);
console.log(mergeArraysByKey([], [{ id: 1, age: 30 }], "id"));
console.log(mergeArraysByKey([{ id: 1, name: "john" }], [], "id"));

//^ solution2 by ai
function mergeArraysByKey(arr1, arr2, key) {
  // Create a Map to store merged objects
  const mergedMap = new Map();

  // Process both arrays simultaneously
  [arr1, arr2].forEach((arr) => {
    arr.forEach((obj) => {
      const keyValue = obj[key];
      if (!mergedMap.has(keyValue)) {
        mergedMap.set(keyValue, {});
      }
      // Merge properties
      Object.assign(mergedMap.get(keyValue), obj);
    });
  });

  // Convert Map values back to an array
  return Array.from(mergedMap.values());
}

// Example usage
const array1 = [
  { id: 1, name: "john" },
  { id: 2, name: "jane" },
];
const array2 = [
  { id: 1, age: 30 },
  { id: 2, age: 28 },
  { id: 3, role: "admin" },
];

const result = mergeArraysByKey(array1, array2, "id");
console.log(result);
