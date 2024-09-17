function findMissingLetter(sequence) {
  // Ensure the sequence is in uppercase for consistency
  sequence = sequence.toUpperCase();

  for (let i = 0; i < sequence.length - 1; i++) {
    // Get the current character code and the next character code
    let currentCharCode = sequence.charCodeAt(i);
    let nextCharCode = sequence.charCodeAt(i + 1);

    // If the difference between the next and current char code is more than 1,
    // we've found our missing letter
    if (nextCharCode - currentCharCode > 1) {
      // Return the missing letter
      return String.fromCharCode(currentCharCode + 1);
    }
  }

  // If we've gone through the whole sequence without finding a gap,
  // return null or some indicator that no letter is missing
  return null;
}

// Test cases
console.log(findMissingLetter("ABCDEFGHJKLMNO")); // Should return "I"
console.log(findMissingLetter("OPQRSTVWXY")); // Should return "U"
console.log(findMissingLetter("ABCDEFGHIJKLMNOPQRSTUVWXYZ")); // Should return null
console.log(findMissingLetter("abcdefghjklmno")); // Should return "i"

function missingLetter02(arr) {
  for (let index = 0; index < arr.length; index++) {
    let currentCharCode = arr[index].charCodeAt(0);
    let nextCharCode = arr[index + 1].charCodeAt(0);
    if (nextCharCode - currentCharCode > 1) {
      return String.fromCharCode(currentCharCode + 1);
      }
  }
}

console.log(missingLetter02(["a", "b", "d"]));
