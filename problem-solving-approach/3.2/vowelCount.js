function vowelCount(string) {
  const vowelObj = {
    "a": true,
    "e": true,
    "i": true,
    "o": true,
    "u": true,
  };
  let count=0
  for (let i = 0; i < string.length; i++) {
    if (string[i] in vowelObj) {
        count+=1
    }
  }
  return count;
}

console.log(vowelCount('abceiousssfeAE'))
