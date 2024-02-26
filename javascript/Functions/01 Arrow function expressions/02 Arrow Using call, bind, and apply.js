// 02 Using call, bind, and apply

// The call(), apply(), and bind() methods work as expected with traditional
// functions, because we establish the scope for each of the methods:

const obj1 = {
    num: 100,
}

// Setting "num" on globalThis to show how it is NOT used.
// globalThis.num = 42; // WRONG!!!!!!!

// A simple traditional function to operate on "this"
const add1 = function(a, b, c) {
    return this.num + a + b + c;
};

console.log(add1.call(obj1, 1, 2, 3));
console.log(add1.apply(obj1, [1, 2, 3]));
const boundAdd1 = add1.bind(obj1);
console.log(boundAdd1(1, 2, 3));

// With arrow functions, since our add function is essentially created on the globalThis
// (global) scope, it will assume this is the globalThis.

const obj = {
    num: 100,
  };
  
// Setting "num" on globalThis to show how it gets picked up.
globalThis.num = 42;

// Arrow function
const add2 = (a, b, c) => {
console.log("this: ",  this)
console.log("this.num: ",  this.num)
console.log("a: ", a);
console.log("b: ", b);
console.log("c: ", c);

return this.num + a + b + c; 
}

console.log("add2(1, 2, 3)");
console.log(add2(1, 2, 3))

console.log(add2.call(obj, 1, 2, 3)); // 48
console.log(add2.apply(obj, [1, 2, 3])); // 48
const boundAdd = add2.bind(obj);
console.log(boundAdd(1, 2, 3)); // 48


console.log(globalThis);

// THe code above IS NOT WORKING. I will come to this later.