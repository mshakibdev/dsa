function missingNumber(nums) {
  const minNum = Math.min(...nums);
  let n = nums.length;
  let totalSumOfAllNumbers = (n * (n + 1)) / 2;
  console.log(totalSumOfAllNumbers);

  let derivedTotal = 0;
  for (let index = minNum; index < n; index++) {
    derivedTotal += nums[index];
  }
  console.log(totalSumOfAllNumbers - derivedTotal);
  console.log(derivedTotal);

  return totalSumOfAllNumbers - derivedTotal;
}

// console.log(missingNumber([3, 0, 1]));
// console.log(missingNumber([0, 1]));
// console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
console.log(missingNumber([1]));
// Input: nums = [3,0,1]
// Output: 2
// Explanation: n = 3
