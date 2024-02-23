// 07 Using map() on sparse arrays

// A sparse array remains sparse after map(). The indicess of empty slots are 
// still empty in the returned array, and the callback function
// won't be called on them.

console.log([1, , 3])

console.log(
    [1, , 3].map((x, index)=>{
        console.log(`Visit ${index}`);
        return x * 2
    })
)
