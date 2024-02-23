// 05 Side-effectful mapping

// The callback can have side effects.
const cart1 = [5, 15, 25];

let total1 = null;

// Add tax 20%; The total is WITHOUT tax
const withTax1 = null


console.log(total1);
console.log(withTax1);
// This is not recommended, because copying methods are best used with pure functions. 



// In this case, we can choose to iterate the array twice.
const cart2 = [5, 15, 25];
const total2 = null;
const withTax2 = null;

console.log(total2);
console.log(withTax2);



// Sometimes this pattern goes to its extreme and the only useful thing that map() does is
// causing side effects.
const products = [
    {name: "sports car"},
    {name: "laptop"},
    {name: "phone"},
]

// Anti pattern: (don't do this in real life)
const withPrice = null;

console.log('anti pattern: ', products);
// As mentioned previously, this is an anti-pattern. If you don't use the return value of map(),
// use forEach() or a for...of loop instead.


// Set the price of each product to 200:
// CODE HERE

console.log('products after forEach', products);

// Or, if you want to create a new array instead: 
const productsWithPrice = null;
console.log('productsWithPrice: ', productsWithPrice);



































// const cart1 = [5, 15, 25];

// let total1 = 0;

// const withTax1 = cart1.map((cost)=>{
//     total1 += cost;
//     return cost * 1.2;
// })

// console.log(total1);
// console.log(withTax1);
// This is not recommended, because copying methods are best used with pure functions. 



// In this case, we can choose to iterate the array twice.
// const cart2 = [5, 15, 25];
// const total2 = cart2.reduce((a, b)=>a+b);
// const withTax2 = cart2.map((cost)=>cost * 1.2);

// console.log(total2);
// console.log(withTax2);



// Sometimes this pattern goes to its extreme and the only useful thing that map() does is
// causing side effects.
// const products = [
//     {name: "sports car"},
//     {name: "laptop"},
//     {name: "phone"},
// ]

// const withPrice = products.map((product)=>{
//     product.price = 100;
// })

// console.log('anti pattern: ', products);
// As mentioned previously, this is an anti-pattern. If you don't use the return value of map(),
// use forEach() or a for...of loop instead.
// products.forEach((product)=>{
//     product.price = 200;
// })
// console.log('products after forEach', products);

// Or, if you want to create a new array instead: 
// const productsWithPrice = products.map((product)=>{
//     return {
//         ...product,
//         price: 100,
//     }
// })
// console.log('productsWithPrice: ', productsWithPrice);


