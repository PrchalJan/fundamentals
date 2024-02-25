// 00 Arrow function expressions;

//  An arrow function expression is a compact alternative to a traditional
// function expression, with some semantic differences and deliberate
// limitations in usage:

// Arrow functions don't have their own bindings to this, arguments, or super,
// and should not be used as methods.

// Arrow functions cannot be used as constructors. Calling them with new throws
// a TypeError. They also don't have access to the new.target keyword.

// Arrow functions cannot use yield wihtin their body and cannot be created as
// generator functions.

"use strict";

const materials = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

console.log(materials.map((material)=> material.length));   


(()=>{
    console.log("Hello World");
})()

console.log("===================== func0")
const func0 = (a, b, ...r)=>{
    console.log("a: ", a);
    console.log("b: ", b);
    console.log("r: ", r);

}
func0();
console.log("....")
func0("Jan", "Prchal", "Uhercice 43", "valtice");
console.log("....")
func0(...[,,], "Prchal", "Uhercice 43", "valtice");


console.log("===================== func1")
const func1 = (a = 400, b = 20, c)=>{
    console.log("a: ", a);
    console.log("b: ", b);
    console.log("c: ", c);
}

func1();
console.log("....")
func1(1, 2, 3);
console.log("....")
func1(...Array(2), 99);
console.log("....")
func1(...[,,], 99);


console.log("===================== func2")

const func2 = ([a, b, ...c] = [10, 20, 30, 40, 50])=>{
    console.log("a: ", a);
    console.log("b: ", b);
    console.log("c: ", c);
}

func2();
console.log("....")
func2([1, 2, 3, 4]);


console.log("===================== func3")

const func3 = ({a, b, ...x} = {a: 10, b: 20, c: 30, d: 40, e: 50})=>{
    console.log("a: ", a);
    console.log("b: ", b);
    console.log("x: ", x);
}

func3();
console.log("....")
func3({f: 1, g: 2, h: 3, i: 4, j: 5});

console.log("===================== Spread Array");

console.log("...Array(4): ", ...Array(4));
console.log("....");
console.log('...[1, "Honza", "2", "Prchal", 1989]: ', ...[1, "Honza", "2", "Prchal", 1989]);



console.log("===================== Function Body");


// expresssion body syntax, implied "return"
const func4 = (x) => x * x;

// block body, explicit "return" needed.
const func5 = (x, y) => {
    return x + y
} 


console.log("===================== Returning object literals using expression body syntax");

const func6 = () => ({name: "Honza"});


console.log("===================== Cannot be used as methods");



const obj1 = {
    i: 10,
    b: () => console.log("this.i: ", this.i, "this: ", this),
    c(){
        console.log("this.i: ", this.i, "this: ", this);
    },
    d: 40
}

obj1.b();
console.log("....")
obj1.c();


console.log("===================== Object.defineProperty()");

const obj2 = {
    a: 10,
  };
  
Object.defineProperty(obj2, "b", {
get: () => {
    console.log(this.a, typeof this.a, this); // undefined 'undefined' Window { /* … */ } (or the global object)
    return this.a + 10; // represents global object 'Window', therefore 'this.a' returns 'undefined'
},
});



console.log("===================== Arrow functions with classes");

// Because a class's body has a this context, arrow functions as class fields close
// over the class's this context, and the this inside the arrow function's body will
// correctly point to the instance (or the class itself, for static fields). However,
// because it is a closure, not the function's own binding, the value of this will not
// change based on the execution context.

class C {
    a = 1;
    autoBoundMethod = () => {
        console.log("this.a: ", this.a);
    }
}

const c = new C();
c.autoBoundMethod();

const {autoBoundMethod } = c;
autoBoundMethod();
// If it were a normal method, it should be undefined in this case.


// Arrow function properties are often said to be "auto-bound methods", because the
// equivalent with normal methods is:

class D {
    a = 1;
    constructor(){
        this.method = this.method.bind(this);
    }
    method(){
        console.log("this.a: ", this.a);
    }
}

const d = new D();
d.method();




console.log("===================== No binding arguments");
// Arrow functions do not have their own arguments object. Thus, in this example,
// arguments is a reference to the arguments of the enclosing scope:

function func7(n){
    const f = ()=> arguments[0] + n; // func7's implicit arguments binding.
    // argumentss[0] is n
    return f();
}

console.log(func7(8));
// NOTE you cannot declare a variable called arguments in strict mode, so the
// code aboove would be a syntax error. This makes the scoping effect of arguments
// much easier to comprehend.

// In most cases, using rest parameters is a good alternative to using an arguments object.
function func8(n){
    const f = (...args) => args[0] + n;
    return f(10);
}

console.log(func8(100));


console.log("===================== Formatting");

// An arrow function cannot contain a line break between its parameters and its arrow.

// const func9 = (a, b, c)
//     => 1;
// // SyntaxError: Unexpected token "=>"


// For the purpose of formatting, you may put the line break after the arrow or use
// parentheses/braces around the function body, as shown below. You can also put line
// breaks between parameters.

const func10 = (a, b, c) => 
    1;
console.log(func10());

console.log("....")

const func11 = (a, b, c) => (
    1
);
console.log(func11());

console.log("....")

const func12 = (a, b, c) => {
    return 1;
};
console.log(func12());

console.log("....")

const func13 = (
    a,
    b,
    c,
) => 1;
console.log(func13());




