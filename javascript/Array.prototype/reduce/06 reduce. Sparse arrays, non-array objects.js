// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#using_reduce_with_sparse_arrays

// reduce() skips missing elements in sparse arryas, but it does not skip
// undefined values

console.log([1, 2, , 4].reduce((acc, curr)=>acc + curr));

console.log([1, 2, undefined, 4].reduce((acc, curr)=> acc + curr));


// Calling reduce() on non-array objects

// The reduce() method reads the length property of this and then
// accesses each property whose key is a nonnegative integer less
// than length.

const arrayLike = {
    length: 3,
    0: 2,
    1: 3,
    2: 4,
    3: 99, // ignored by reduce() since length is 3
}

console.log(Array.prototype.reduce.call(arrayLike, (a, b)=>a+b));