function longestWord(str) {
  const strArr = str.split(" ");
  let strObj = Object.fromEntries(strArr.map((item) => [item, item.length]));

  const maxEntry = Object.entries(strObj).reduce((max, entry) =>
    entry[1] > max[1] ? entry : max
  );
  const [maxKey] = maxEntry;
  return maxKey;
}

console.log(longestWord("The quick brown fox")); // Output: "quick"
console.log(longestWord("The quick brown fox"));   // Output: "quick"
console.log(longestWord("Jumped over the lazy dog")); // Output: "Jumped"
console.log(longestWord("hello world"));           // Output: "hello"
console.log(longestWord(""));                      // Output: ""
