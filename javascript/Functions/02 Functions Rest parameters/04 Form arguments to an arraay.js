// Form arguments to an array.

// Array. methods can be used to rest parameters, but not on the arguments object:

function sortRestArgs(...theArgs){
    const sortedArgs = theArgs.sort();
    return sortedArgs;
}


console.log(sortRestArgs(5, 3, 7, 1));


function sortArguments(){
    const sortedArgs = arguments.sort();
    return sortedArgs; // this will never happen
}

// Throws error:
// console.log(sortArguments(5, 3, 7, 1));



// Rest parameters were introduced to reduce the boilerplate code that
// was commonly used for converting a set of arguments to an array.

// Before rest parameters, arguments need to be converted to a normal array
// before calling array methods on them:

function fn(a, b) {
    console.log('arguments: ', arguments);
    console.log("arguments.length: ", arguments.length);
    const normalArray = Array.prototype.slice.call(arguments);
    console.log('normalArray: ', normalArray);

    const normalArray2 = [].slice.call(arguments);
    console.log('normalArray2: ', normalArray2);

    const first = normalArray.shift(); // OK, gives the first argument
    console.log('first: ', first);
    console.log('normalArray: ', normalArray);
    // const firstBad = arguments.shift(); throws error;
}

fn(1, 2, 3)

// Now you can easily gain access to a normal array using a rest parameter.

function fn1(...args){
    const normalArray = args;
    const first = normalArray.shift();
    console.log(normalArray);
    console.log(first);
}

