// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#when_to_not_use_reduce

// Multiple higher-order functions like reduce() can be powerful but sometimes
// difficult to understand, especially for less-experienced JavaScript developers.
// If code becomes clearer when using other array methods, developers must
// weigh the readability tradeoff against the other benefits of using reduce().

// Note that reduce() is always equivalent to a for...of loop, except that instead
// of mutating a variable in the upper scope, we now return the new value for each iteration:

const initialValue = 0;
function update(value, cur) {
    return value + cur
}
const numbers = [2, 3, 4, 5, 6];

const sum1 = numbers.reduce(update);
console.log(sum1);


let sum2 = 0;
for(const number of numbers) {
    sum2 = update(sum2, number);
}
console.log(sum2);


// As previously StylePropertyMapReadOnly, the reason why people may want to use reduce()
// is to mimic functional programming practices of immutable data.
// Therefore, developers who uphold the immutability of the accumulator often 
// copy the entire accumulator for each iteration, like this: 

const names = ["Alice", "Bob", "Tiff", "Bruce", "Alice", "Bob", "Alice", "Alice"];

const countedNames = names.reduce((acc, curr)=>{
    const currentCount = Object.hasOwn(acc, curr) ? acc[curr] : 0;
    return {
        ...acc,
        [curr]: currentCount + 1
    }
}, {})

console.log("countedNames: ", countedNames);

// This code is ill-performing, because each iteration has to copy the
// entire allNames object, which could be big, depending how many unique names
// there are. This code has worst-case o(N 2) performance, where N is the length
// of names.

// A better alternative is to mutate the allNames object on each iteration. However,
// if allNames gets mutated anyway, you may want to convert the reduce() to a simple
// for loop instead, which is much clearer:


const countedNames1 = names.reduce((acc, cur)=>{
    const currentCount = acc[cur] ?? 0;
    acc[cur] = currentCount + 1;
    return acc;
}, {})



console.log("countedNames1: ", countedNames1);



let countedNames2 = {}
for(const name of names){
    console.log("countednames2", countedNames2)
    const currentCount = countedNames2[name] ?? 0;
    countedNames2[name] = currentCount + 1
}

console.log("countedNames2", countedNames2);


// Therefore, if your accumulator is an array or an object and you are copying
// the array or object on each iteration, you may accidentally introduce quadratic
// complexity into your code, causing performance to quickly degrade on large data.
// This has happened in real-world code -- see for example:
// Making Tanstack Table 1000x faster with a 1 line change
// https://jpcamara.com/2023/03/07/making-tanstack-table.html



// Some of the acceptable use cases of reduce() are given above (most notably,
// summing an array, promise sequencing, and function piping). There are other
// cases where better alternatives than reduce() exist.

// Flattening an array of arrays. Use flat() instead;

const myArray = [1, 2, [3, 4, [5, 6, [7, [7.1, [7.2]] ,8], 9], 10, [11]], 12, 13];
console.log(myArray);

function flatten(myArr){
    const execute = (arr)=>{
        return arr.reduce((acc, cur)=>{
            return acc.concat(cur);
        }, [])
    }
    let result = myArr
    for(let i = 0; i < myArr.length; i++) {
        result = execute(result);
    }

    return result;
}

const flattened1 = flatten(myArray);
console.log("flattened1", flattened1);

const flattened2 = myArray.flat(Infinity);
console.log("flattened2: ", flattened2);



// Grouping objects by a property. Use Object.gropuBy() instead

const myArray2 = [
    {
        name: "plants",
        value: "peas",
    },
    {
        name: "animals",
        value: "chicken",
    },
    {
        name: "plants",
        value: "cabbage",
    },
    {
        name: "plants",
        value: "carrot",
    },
    {
        name: "animals",
        value: "gooose",
    },
    {
        name: "animals",
        value: "dog",
    },
    {
        name: "plants",
        value: "radish",
    },
]

console.log("myArray2",myArray2)


let nms = [];


console.time("nms");
for(let i = 0; i <= 10000; i++){
    nms.push(i);
}
console.timeEnd("nms");

// console.log(nms);

console.time("numobj");
const numobj = nms.reduce((acc, cur)=>{
    acc[cur] = cur;
    return acc 
})
console.timeEnd("numobj");

console.time("numobj1");
const numobj1 = nms.reduce((acc, cur)=>{
    return acc[cur] = cur;
}, {})
console.timeEnd("numobj1");

// console.log(numobj);


// console.time("groups");
// const start = performance.now();

// for(let i = 0; i < 10000; i++){
//     console.log(i);
// }


// const groups = myArray2.reduce((acc, cur)=>{
//     if(!acc[cur.name]) {
//         acc[cur.name] = [cur];
//     } else {
//         acc[cur.name].push(cur);
//     }
//     return acc;
// }, {})

// const end = performance.now();
// console.log(end - start);

// console.timeEnd("groups");

// console.log("groups....: ", groups);

console.time("groups");
const groups = myArray2.reduce((acc, obj) => {
    const group = obj.name;
    if(!acc[group]) { acc[group] = []}
    acc[group].push(obj);
    return acc;
  }, {});

// const groups = myArray2.reduce((acc, obj) => {
//     const key = obj.name;
//     const curGroup = acc[key] ?? [];
//     return { ...acc, [key]: [...curGroup, obj] };
//   }, {});
  


console.timeEnd("groups");

console.log("groups: ", groups);




// Concatenating arrays contained in an array of objects. Use flatMap() instead.

const friends = [
    {name: "Anna", books: ["Bible", "Harry Potter"]},
    {name: "Bob", books: ["War and peace", "Romeo and Juliet"]},
    {name: "Alice", books: ["The Lord of the Rings", "The shining"]},
    {name: "Anna", books: ["Bible", "Harry Potter"]},
    {name: "Bob", books: ["War and peace", "Romeo and Juliet"]},
    {name: "Alice", books: ["The Lord of the Rings", "The shining"]},
    {name: "Anna", books: ["Bible", "Harry Potter"]},
    {name: "Bob", books: ["War and peace", "Romeo and Juliet"]},
    {name: "Alice", books: ["The Lord of the Rings", "The shining"]},
    {name: "Anna", books: ["Bible", "Harry Potter"]},
    {name: "Bob", books: ["War and peace", "Romeo and Juliet"]},
    {name: "Alice", books: ["The Lord of the Rings", "The shining"]},
    {name: "Anna", books: ["Bible", "Harry Potter"]},
    {name: "Bob", books: ["War and peace", "Romeo and Juliet"]},
    {name: "Alice", books: ["The Lord of the Rings", "The shining"]},
    {name: "Anna", books: ["Bible", "Harry Potter"]},
    {name: "Bob", books: ["War and peace", "Romeo and Juliet"]},
    {name: "Alice", books: ["The Lord of the Rings", "The shining"]},
    {name: "Anna", books: ["Bible", "Harry Potter"]},
    {name: "Bob", books: ["War and peace", "Romeo and Juliet"]},
    {name: "Alice", books: ["The Lord of the Rings", "The shining"]},
    {name: "Anna", books: ["Bible", "Harry Potter"]},
    {name: "Bob", books: ["War and peace", "Romeo and Juliet"]},
    {name: "Alice", books: ["The Lord of the Rings", "The shining"]},
    {name: "Anna", books: ["Bible", "Harry Potter"]},
    {name: "Bob", books: ["War and peace", "Romeo and Juliet"]},
    {name: "Alice", books: ["The Lord of the Rings", "The shining"]},
    {name: "Anna", books: ["Bible", "Harry Potter"]},
    {name: "Bob", books: ["War and peace", "Romeo and Juliet"]},
    {name: "Alice", books: ["The Lord of the Rings", "The shining"]},
]

console.time("allBooks");
const allBooks = friends.reduce((acc, cur)=>{
    
    return acc.concat(cur.books);
}, [])

// const allBooks1 = friends.flatMap((person)=>person.books);
const allBooks2 = friends.flatMap((person)=>person.books);

console.timeEnd("allBooks");

console.log(allBooks2);


// Removing duplicate items in an array. Use Set and Array.from(). instead.

const duplicateArray = [1, 2, 3, 4, 3, 5, 6, 4, 3, 2, 4, 6, 7, 4, 3, 2, 1, 2, 3, 4, 5, 4, 2, 3, 1, 3, 3];

console.time("uniqueArray")
// const uniqueArray = duplicateArray.reduce(
//     (acc, cur)=>{
//         if(!acc.includes(cur)) {
//             acc.push(cur)
//         }
//         return acc;
//     }, 
//     []
// )

const uniqueArray = Array.from(new Set(friends));
console.timeEnd("uniqueArray")

console.log("uniqueArray: ", uniqueArray);