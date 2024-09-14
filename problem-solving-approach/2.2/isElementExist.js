// function isElementExist(arr1, arr2) {
//   for (let index1 = 0; index1 < arr1.length; index1++) {
//     for (let index2 = 0; index2 < arr2.length; index2++) {
//       if (arr1[index1] == arr2[index2]) {
//         return true;
//       }
//     }
//   }
//   return false;
// }

// console.log(isElementExist(['a'], [3, "a", 0]));

// *optimized solution
// * time complexity -O(n+n)==>O(n)
function isElementExist(arr1, arr2) {
  // const trackObj = {};
  // for (const element of arr1) {
  //   trackObj[element] = true;
  // }

  //^ alternative of object
  const arr1Set = new Set(arr1);

  
  for (const element of arr2) {
    console.log(element);
    if (arr1Set.has(element)) {
      return true;
    }
    // way:01
    // if (trackObj.hasOwnProperty(element)) {
    //   console.log(trackObj.hasOwnProperty(element));
    //   return true;
    // }

    // way:02
    // if (element in trackObj) {
    //   return true;
    // }
    console.log(trackObj);
  }
  return false;
}
isElementExist(["a", "v", 4], ["g", "u", 4]);
console.log(isElementExist(["a", "v", 4], ["g", "v", 4]));
