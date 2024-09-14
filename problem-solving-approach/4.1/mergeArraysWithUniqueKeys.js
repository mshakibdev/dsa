// // time comoplexit  : n^2
// function mergeArraysWithUniqueKeys(arr1, arr2, key1, key2) {
//   //1. loop in both arrays
//   const mergedArray = [...arr1];

//   arr2.forEach((obj2) => {
//     const matchingObj = mergedArray.find(
//       (obj1) => obj1[key1] === obj2[key1] && obj1[key2] === obj2[key2]
//     );
//     if (matchingObj) {
//       Object.assign(matchingObj, obj2);
//     } else {
//       mergedArray.push(obj2);
//     }
//   });

//   return mergedArray;
// }

// console.log(
//   mergeArraysWithUniqueKeys(
//     [{ id: 1, type: "A", name: "John" }],
//     [{ id: 1, type: "A", age: 30 }],
//     "id",
//     "type"
//   )
// );
// Output: [{ id: 1, type: "A", name: "John", age: 30 }];

// console.log(
//   mergeArraysWithUniqueKeys(
//     [
//       { id: 1, type: "A", name: "John" },
//       { id: 2, type: "B", name: "Jane" },
//     ],
//     [
//       { id: 1, type: "A", age: 30 },
//       { id: 2, type: "B", gender: "female" },
//     ],
//     "id",
//     "type"
//   )
// );
// Output: [{ id: 1, type: "A", name: "John", age: 30 }, { id: 2, type: "B", name: "Jane", gender: "female" }]

function mergeArraysByKey(arr1, arr2, key) {
  const arrayObj = [];
  const arrayObj2 = [];

  arr1.forEach((profileObject) => {
    profileObject.hasOwnProperty(`${key}`) ? arrayObj.push(profileObject) : {};
  });

  arr2.forEach((profileObject) => {
    // console.log(profileObject);
    arrayObj.filter((obj) => {
      if (obj[key] === profileObject[key]) {
        Object.assign(obj, profileObject);
        arrayObj2.push(obj);
      }
    });
    // console.log(arrayObj2);
    // console.log(arr2);
  });

  // console.log(arrayObj);
  return arrayObj;
}

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

console.log(
  mergeArraysByKey(
    [{ id: 1, type: "A", name: "John" }],
    [{ id: 1, type: "A", age: 30 }],
    "id",
    "type"
  )
);

// Output: [{ id: 1, type: "A", name: "John", age: 30 }];

console.log(
  mergeArraysByKey(
    [
      { id: 1, type: "A", name: "John" },
      { id: 2, type: "B", name: "Jane" },
    ],
    [
      { id: 1, type: "A", age: 30 },
      { id: 2, type: "B", gender: "female" },
    ],
    "id",
    "type"
  )
);
// Output: [
//   { id: 1, type: "A", name: "John", age: 30 },
//   { id: 2, type: "B", name: "Jane", gender: "female" },
// ];


const mergeArraysWithUniqueKeys = (arr1, arr2, key1, key2) => {
  if (arr1.length === 0 || arr2.length === 0) {
    return null;
  }

  const mapArr = {};

  arr1.forEach((element) => {
    const key = element[key1].toString() + element[key2].toString();
    mapArr[key] = element;
  });

  const map2Arr = {};

  arr2.forEach((element) => {
    const key = element[key1].toString() + element[key2].toString();
    map2Arr[key] = element;
  });

  const reslutArr = [];

  for (let key in mapArr) {
    const mergedObj = { ...mapArr[key], ...map2Arr[key] };
    reslutArr.push(mergedObj);
  }

  return reslutArr;
};

console.log(
  mergeArraysWithUniqueKeys(
    [{ id: 1, type: "A", name: "John" }],
    [{ id: 1, type: "A", age: 30 }],
    "id",
    "type"
  )
);
// Output: [{ id: 1, type: "A", name: "John", age: 30 }]

console.log(
  mergeArraysWithUniqueKeys(
    [
      { id: 1, type: "A", name: "John" },
      { id: 2, type: "B", name: "Jane" },
    ],
    [
      { id: 1, type: "A", age: 30 },
      { id: 2, type: "B", gender: "female" },
    ],
    "id",
    "type"
  )
);