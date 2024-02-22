// Using parseInt() with map()

// it is common to use the callback with one argument (the element being traversed).
// Certain functions are also commonly usued with one argument, even though they take
// additional optional arguments. These habits may lead to confusing behaviours.

const arr = ["1", "2", "3"];

const numbersFalse = null;
// While one might expect [1, 2, 3], the actual result is [1, NaN, NaN].

const numbersCorrect = null;

console.log(arr);
console.log("numbersFalse: ", numbersFalse);
console.log("numbersCorrect: ", numbersCorrect);

// You can also use the Number function, which only takes one argument:
const nums = null;
console.log('nums: ', nums);

// But unlike parseInt(), Number() will also return a float or (resolved)
// exponential notation:
console.log(["1.1", "2.2e2", "3e300"]);
console.log(["1.1", "2.2e2", "3e300"]);
























































// const arr = ["1", "2", "3"];

// const numbersFalse = arr.map(parseInt);

// const numbersCorrect = arr.map((str)=>parseInt(str, 10));

// console.log(arr);
// console.log("numbersFalse: ", numbersFalse);
// console.log("numbersCorrect: ", numbersCorrect);

// You can also use the Number function, which only takes one argument:
// const nums = arr.map(Number);
// console.log('nums: ', nums);

// But unlike parseInt(), Number() will also return a float or (resolved)
// exponential notation:
// console.log(["1.1", "2.2e2", "3e300"].map(Number));
// console.log(["1.1", "2.2e2", "3e300"].map((str)=>parseInt(str, 10)));