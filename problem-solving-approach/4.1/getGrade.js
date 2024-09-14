function getGrade(scores) {
  gradeObj = {
    A: 90 <= scores,
    B: 80 <= scores && scores <= 89,
    C: 70 <= scores && scores <= 79,
    D: 60 <= scores && scores <= 69,
    F: 0 <= scores && scores <= 59,
  };

  if (gradeObj.A) return "A";
  if (gradeObj.B) return "B";
  if (gradeObj.C) return "C";
  if (gradeObj.D) return "D";
  if (gradeObj.F) return "F";
}

console.log(getGrade(95)); // Output: A
console.log(getGrade(85)); // Output: B
console.log(getGrade(75)); // Output: C
console.log(getGrade(65)); // Output: D
console.log(getGrade(55)); // Output: F
