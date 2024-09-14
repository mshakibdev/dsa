//^ Approach Brute force

//* Time complexity O(n)
//! space complexity O(n)
// function sumOfEvenSquare(inputArr) {
//   const evenArr = [];//! O(n)
//   const squareEvenArr = [];//! O(n)
//   let sumOfSquareEven = 0;//! O(1)
//   //* find out even numbers from an array and return an array
//   for (const arrElement of inputArr) {
//     if (arrElement % 2 === 0) {
//       evenArr.push(arrElement);
//     }
//   }
//   console.log("evenArr", evenArr);

//   //* square the even number and return an array

//   evenArr.forEach((element) => {
//     squareEvenArr.push(element * element);
//   });
//   console.log("squareEvenArr", squareEvenArr);

//   //* summed the even square number from an array and return total sum

//   squareEvenArr.forEach((element) => {
//     sumOfSquareEven += element;
//   });
//   console.log("sumofevenarray", sumOfSquareEven);
// }

// sumOfEvenSquare([1, 2, 3, 4, 6, 8]);

//^ Optimize brute-force soln
// function sumOfEvenSquare(inputArr) {
//   //* find out even numbers from an array and return an array
//   const evenArr = inputArr.filter((element) => element % 2 === 0);
//   console.log("evenArr", evenArr);

//   //* square the even number and return an array
//   const squareEvenArr = evenArr.map((element) => element * element);
//   console.log("squareEvenArr", squareEvenArr);

//   //* summed the even square number from an array and return total sum
//   const sumOfSquareEven = squareEvenArr.reduce(
//     (accumulator, item) => (accumulator += item)
//   );
//   console.log("sumofevenarray", sumOfSquareEven);
// }

// sumOfEvenSquare([1, 2, 3, 4]);

//^ Optimize soln1

//* Time complexity O(n)
//! space complexity O(n)
//^ comment: More readable than previous solution
function sumOfEvenSquare(inputArr) {
  const sumOfSquareEven = inputArr
    .filter((element) => element % 2 === 0)
    .map((element) => element * element)
    .reduce((accumulator, item) => (accumulator += item));

  console.log("sumofevenarray", sumOfSquareEven);
}

sumOfEvenSquare([1, 2, 3, 4]);
