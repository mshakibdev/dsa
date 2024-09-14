//  "repeated division" or "modulo and divide" algorithm
function sumOfdigits(num) {
  //1.0 => put the last digit of number into sum
  let sum = 0;
  while (num > 0) {
    //1.1 => find the last number and store it in sum
    sum += num % 10;
    //2.0 find the other digtits and put it in num
    num = Math.floor(num / 10);
  }

  return sum;
}

console.log(sumOfdigits(123));
