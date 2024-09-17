function ransomeNote(ransomNote, magazine) {
  if (ransomNote.length > magazine.length) return false;

  const charCount = new Map();

  // Count characters in magazine
  for (const char of magazine) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  // Check if ransomNote can be constructed
  for (const char of ransomNote) {
    if (!charCount.has(char) || charCount.get(char) === 0) {
      return false;
    }
    charCount.set(char, charCount.get(char) - 1);
  }

  return true;
}

console.log(ransomeNote((str1 = "aa"), (str2 = "aab")));
