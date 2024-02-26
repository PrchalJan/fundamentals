// Rest parameters

// The rest parameter syntax allows a function to accept an indefinite number of
// arguments as an array, providing a way to represent variadic functions in JavaScript



function sum(...numbers){
    return numbers.reduce((acc, curr)=>acc + curr, 0);
}

console.log(sum(1, 2, 3));


function sum2(){
    return Array.prototype.reduce.call(arguments, (acc, curr)=>acc + curr, 0);
}

console.log(sum(1, 2, 3));


function sum3(...theArgs){
    let total = 0;
    for(const arg of theArgs){
        total += arg;
    }
    return total;
}


console.log(sum3(1, 2, 3));


const names = ["Honza", "Pepa", "Marie", "Terezie"];

for(const name of names){
    console.log(name);
}


// Description
// A function definition's last parameter can be prefixed with ... (three U+002E FULL STOP characters),
// which will cause all remaining (user supplied) parameters to be placed within an Array object.

function myFun1(a, b, ...manyMoreArgs) {
    console.log("a: ", a);
    console.log("b: ", b);
    console.log("manyMoreArgs: ", manyMoreArgs);
}

myFun1("one", "two", "three", "four", "five", "six", "seven", "eight", "nine");


// A function definition can only have one rest parameter,
// and the rest parameter must be the last parameter in the function definition

// The rest parameter is not counted towards the function's length property.

// The difference between rest parameters and the arguments object
// There are three main differences between rest parameters and the arguments object:
// 1. The arguments object is not a real array, while rest parameters are Array
//    instances, meaning methods like sort(), map(), forEach() or pop() can be applied
//    on it directly;
// 2. The arguments object has the additional (deprecated) callee property.
// 3. in a non-strict function with simple parameters, the arguments object...
// 4. ... I am too stupid for this right now.