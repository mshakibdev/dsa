function countCharacter(inputStr) {
  //^ convert the string to lowercase
  const lowerCaseStr = inputStr.toLowerCase();
  console.log(lowerCaseStr);
  //^ remove spaces and special character
  const cleanStr = lowerCaseStr.replace(/[^a-z0-9]/gi, "");
  console.log("cleanStr");
  //^ create a object to hold the counts or frequency
  const charCount = {};
  //^ looped the cleaned string and count each character
  for (let index = 0; index < lowerCaseStr.length; index++) {
    const char = lowerCaseStr[index];
    // charCount[lowerCaseStr[index]];
    // if (char in charCount) {
    // }
    if ((char >= "a" && char <= "z") || (char >= 0 && char <= 9)) {
      charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
      // alternative soln==> charCount[char] = (charCount[char] || 0) + 1;
      // if (charCount[char]) {
      //   charCount[char] += 1;
      // } else {
      //   charCount[char] = 1;
      // }
      console.log("charCount", charCount);
    }
  }
  console.log("charCount", charCount);

  //^ return the result
}

countCharacter("Hello@ erter4345345345345");
//* output : {h:1,e:1,l:2,o:1}
