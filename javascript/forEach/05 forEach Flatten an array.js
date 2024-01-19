// Flatten an array
// The following example is only here for learning purpose. If you want to flatten an array using built-in methods, you can use Array.prototype.flat().

const flatten = (arr)=>{
    const result = [];
    arr.forEach((item)=>{
        if (Array.isArray(item)){
            console.log('item')
            result.push(...flatten(item))
        } else{
            result.push(item);
        }
    })
    return result;
}


const nested = [1, [ 2, [ 3, [4, 5, [6, 7], 8, 9]]]];

console.log(nested.flat().flat().flat().flat());
console.log(flatten(nested));