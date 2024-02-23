// 00 Array.prototype.reduce()

// The reduce() method of Array instances executes a user-supplied "reducer" callback 
// function on each element of the array, in order, passing in the return value from the 
// calculation on the preceding element. The final result of running the reducer across all 
// elements of the array is a single value.

// The first time that the callback is run there is no "return value of the previous calculation". 
// If supplied, an initial value may be used in its place. Otherwise the array element at 
// index 0 is used as the initial value and iteration starts from the next 
// element (index 1 instead of index 0).

const array1 = [1, 2, 3, 4];

const initialValue = 0;
const sumWithInitial = array1.reduce(
    (accumulator, currentValue, currentIndex, array) => {
        console.log("i: ", currentIndex)
        const result = accumulator + currentValue;
        console.log('result: ', result);
        console.log('array: ', array);
        return result;
    },
    initialValue
)

console.log(sumWithInitial);


console.log('.......................')


const getMax = (accumulator, currentValue) => {
    console.log('callback running with accumulator: ', accumulator);
    console.log('callback running with value: ', currentValue);
    return Math.max(accumulator, currentValue)
};

// callback is invoked for each element in the array starting at index 0
console.log([1, 100].reduce(getMax, 50));
console.log([50].reduce(getMax, 10));


console.log('.........................')
// callback is invoked once for element at index 1
console.log([1, 100].reduce(getMax));


console.log('.........................')
// callback is not invoked
console.log([50].reduce(getMax));
console.log([].reduce(getMax, 1));


// [].reduce(getMax); // TypeError