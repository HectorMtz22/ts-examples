// const multiply = (a, b) => a * b

// * Suma
/* 
const multiply = (a, b) => {
  let suma = 0;
  for (let i = 0; i < b; i++) {
    suma += a;
  }
  console.log(suma);
  return suma;
};
*/

// * Recursion
/*
const multiply = (a, b, times = 0, total = 0) => {
  times !== b ? multiply(a, b, times + 1, (total += a)) : console.log(total);
};
*/

//? El buen Midu
/*
const multiply = (a, b) => {
  console.log(" ".repeat(a).repeat(b).length);
};
*/

multiply(2, 2); // 4
multiply(9, 10); // 90
multiply(3, 0); // 0
multiply(0, 9); // 0
