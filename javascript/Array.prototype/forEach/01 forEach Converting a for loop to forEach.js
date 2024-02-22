
// Converting a for loop to forEach
const items  = ["item1", "item2", "item3"];
const copyItemsOld = [];
const copyItemsNew = [];

// before


// after


console.log('items: ', items);
console.log('copyItemsOld: ', copyItemsOld);
console.log('copyItemsNew: ', copyItemsNew);














































// solution

// before
// for(let i = 0; i < items.length; i++){
//     copyItemsOld.push(items[i]);
// }

// after
// items.forEach((item)=>{
//     copyItemsNew.push(item);
// })

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#converting_a_for_loop_to_foreach