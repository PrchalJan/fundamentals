// Calling filter() on non-array objects

// The filter() method reads the length propeprty of this and then accesses
// each property whose key is nonnegative integer less than length;


const arrayLike = {
    length: 4,
    "number": "a",
    "number": "b",
    "number": "c",
    "number": "a", // ignored by filter() since length is 3
    0: "a",
    1: "b",
    // 2: "c",
    3: "d",
}

console.log(Array.prototype.filter.call(arrayLike, (x)=> {
    console.log(x);
}));


