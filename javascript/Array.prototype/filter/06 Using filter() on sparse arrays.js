// Using filter() on spsarse arrays;
// filter() will skip empty slots

console.log([1, , undefined].filter((x)=> x === undefined));
console.log([1, , undefined].filter((x)=> x !== 2));
console.log([1, , undefined, null].filter((x)=> x === null));