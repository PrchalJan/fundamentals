// 01 Using arrow functions

// An empty arrow function that returns undefined:
const empty = () => {};

// Returns "foobar". This is immediately Invoked Function Expression
console.log((()=>"foobar")())

const simple = (a) => (a > 15 ? 15 : a);

console.log(simple(16));
console.log(simple(10));


const max = (a, b) => (a > b ? a : b);

console.log(max(1, 2));
console.log(max(224, 99));


// Easy array filtering, maping, etc.
const arr = [5, 6, 13, 0, 1, 18, 23];

const sum = arr.reduce((a, c) => (a + c));
console.log("sum: ", sum);

const even = arr.filter((c) => c % 2 === 0);
console.log("even: ", even);

const double = arr.map((c) => c * 2)
console.log("double: ", double);

// More concise promise chains

// Parameterless arrow functions that are visually easier to parse
setTimeout(()=>{
    console.log("I happen sooner");
    setTimeout(()=>{
        // deeper code
        console.log("I happen later")
    }, 1)
}, 1)