// 04 reduce: Function sequential piping

// The pipe function takes a sequence of functions and returns a new function.
// When the new function is called with an argument, the sequence of functions
// are called in order, which each one receiving the return value of the previous function.




const pipe = 
    (...functions) =>
    (initialValue) =>
        functions.reduce((acc, fn)=>fn(acc), initialValue)

// Building blocks to use for composition
const double = (x)=>x*2;
const triple = (x)=>x*3;
const quadruple = (x)=>x*4;
const devide = (x)=>x/2;
const add100 = (x)=>x+100;
const magnify = (x)=>x*10

// Composed functions for multiplication of specific values.
const orderOfMagnitute = pipe(magnify);
const twoOrdersOfMagnitute1 = pipe(add100, magnify, devide, magnify);
const twoOrdersOfMagnitute2 = pipe(add100, magnify, devide,  magnify, );


console.log(twoOrdersOfMagnitute1(10));
console.log(twoOrdersOfMagnitute2(10));

























































// const pipe = 
//     (...functions) =>
//     (initialValue) =>
//         functions.reduce((acc, fn) => fn(acc), initialValue);

// // Building blocks to use for composition
// const double = (x) => x * 2;
// const triple = (x) => x * 3;
// const quadruple = (x) => x * 4;

// // Composed functions for multiplication of specific values.
// const multiply6 = pipe(double, triple);
// const multiply9 = pipe(triple, triple);
// const multiply16 = pipe(quadruple, quadruple);
// const multiply24 = pipe(double, triple, quadruple);

// console.log(multiply6(6));
// console.log(multiply9(9));
// console.log(multiply16(16));
// console.log(multiply24(10));