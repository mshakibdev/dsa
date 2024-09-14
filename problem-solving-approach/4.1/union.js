function union(arr1, arr2) {
  const mergedArr = [...arr1];
  for (const item of arr2) {
    !mergedArr.includes(item) ? mergedArr.push(item) : [];
  }
  return mergedArr;
}

console.log(union([1, 2, 3], [3, 4, 5])); // [1, 2, 3, 4, 5]
