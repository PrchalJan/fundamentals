// Using rest parameters

function myFun1(a, b, ...manyMoreArgs){
    console.log("a: ", a);
    console.log("b: ", b);
    console.log("manyMoreArgs: ", manyMoreArgs);
}

myFun1("one", "two", "three", "four", "five", "six");
console.log("....")


// Even though there is just one value, the last argument still gets put into an array.
myFun1("one", "two", "three")
console.log("....")

// The third argument isn't provided, but manyMoreArgs is still an array (albeit an empty one).
myFun1("one", "two");
console.log("....")

// Only one argument is provided, so b gets the default value undefined, but manyMoreArgs is still an empty array

myFun1("one");
console.log("....");




