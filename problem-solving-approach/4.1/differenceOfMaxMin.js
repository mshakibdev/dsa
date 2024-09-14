function differenceOfMaxMin(arr) {
  let sortedArray = arr.sort((a, b) => a - b);

  return sortedArray.length > 0
    ? sortedArray[sortedArray.length - 1] - sortedArray[0]
    : null;
}
console.log(differenceOfMaxMin([3, 5, 1, 9, 2]));
// Output: 8 (since 9 - 1 = 8)

console.log(differenceOfMaxMin([7]));
// Output: 0 (since the array has only one element)

console.log(differenceOfMaxMin([]));
// Output: null (or "Array is empty")
