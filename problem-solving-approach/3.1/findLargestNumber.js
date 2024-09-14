// function findLargestNumber(arr) {
//   return Math.max(...arr);
// }

// console.log(findLargestNumber([1, 2, 4, 5, 77]));

function findLargestNumber(arr) {
  let largestNum = arr[0];
  for (const element of arr) {
    if (element > largestNum) {
      largestNum = element;
      console.log(largestNum);
    }
  }
  return largestNum;
}

console.log(findLargestNumber([1, 22, 3, 44]));
