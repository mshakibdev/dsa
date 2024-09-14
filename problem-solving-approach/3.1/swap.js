// function swap(a, b) {
// * with temp value
//   const temp = a;
//   a = b;
//   b = temp;
//   return [a, b];
// }

// console.log(swap(1, 3));

// * with exhange value
function swap(a, b) {
  // (5,3) ===>(3,5)
  /* 
    a = 5+3 = 8
    b =a - b = 8-3 =5
    a = a- b = 8-5 =3

*/
  //   a = a + b;
  //   b = a - b;
  //   a = a - b;
  //   console.log([a, b]);

  //   return [a, b];

  //   approach-02
  [b, a] = [a, b];
  return [a, b];
}

console.log(swap(1, 5));
