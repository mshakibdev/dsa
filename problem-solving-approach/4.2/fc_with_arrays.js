//! Sol-01: Check if two arrays are permutations of each other
//? Time complexity: O(n)

function isPermutation(arr1, arr2) {
  // Create frequency maps for both arrays
  const count1 = {};
  const count2 = {};

  // Count frequencies in first array
  for (let num of arr1) {
    count1[num] = (count1[num] || 0) + 1;
  }

  // Count frequencies in second array
  for (let num of arr2) {
    count2[num] = (count2[num] || 0) + 1;
  }

  // Check if all keys in count1 exist in count2 with same frequency
  for (let key in count1) {
    if (count1[key] !== count2[key]) {
      return false;
    }
  }

  // Check if all keys in count2 exist in count1 with same frequency
  for (let key in count2) {
    if (count2[key] !== count1[key]) {
      return false;
    }
  }

  return true;
}

// Test
console.log(isPermutation([1, 2, 3], [3, 1, 3])); // false

//! Sol-02: Check if two arrays are permutations of each other
//? Time complexity: O(nlogn)

function isPermutation(arr1, arr2) {
  // If lengths are different, they can't be permutations
  if (arr1.length !== arr2.length) return false;

  // Sort both arrays and compare
  return arr1.sort().join("") === arr2.sort().join("");
}

// Test
console.log(isPermutation([1, 2, 3], [3, 1, 3])); // false
