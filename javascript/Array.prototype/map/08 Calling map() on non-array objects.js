// 08 Calling map() on non-array objects;

// The map() method reads the length property of this and then accesses
// each property whose key is a nonnegative integer less than length.

const arrayLike = {
    length: 3,
    0: 2,
    1: 3,
    2: 4,
    3: 5, // ignored by map() since length is 3
}

// log an array of square roots of the indexes
console.log()


























































// const arrayLike = {
//     length: 3,
//     0: 2,
//     1: 3,
//     2: 4,
//     3: 5, // ignored by map() since length is 3
// }

// console.log(Array.prototype.map.call(arrayLike, (num, index)=>{
//     console.log(index);
//     return num ** 2;
// }))