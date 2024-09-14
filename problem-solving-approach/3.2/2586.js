var vowelStrings = function (words, left, right) {
  const vowels = "aeiou";
  let count = 0;
  for (let i = left; i <= right; i++) {
    const element = words[i];

    if (
      vowels.includes(words[i][0]) &&
      vowels.includes(words[i][words[i].length - 1])
    ) {
      count += 1;
    }
  }
  return count;
};

console.log(vowelStrings(["are", "amy", "u"], 0, 2));

// Input: words = ["are","amy","u"], left = 0, right = 2
// Output: 2
