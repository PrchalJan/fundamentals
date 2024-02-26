// Argument length

// Since theArgs is an array, a count of its elements is given by the length property.
// If the function's only parameter is a rest parameter, restParams.length will
// be equal to arguments.length.

function myFun1(...theArgs){
    console.log("theArgs: ", theArgs);
    console.log("arguments: ", arguments);
    console.log("theArgs.length: ", theArgs.length);
    console.log("arguments.length: ", arguments.length);
}

myFun1();
console.log('....');
myFun1(1);
console.log('....');
myFun1(1, 2, 3, 4);