// Using the third argument of callbackFn

// The array argument is useful if you want to access another element
// in the array, especially when you don't have an existing variable that 
// refers to the array. 

// The following example first uses map() to extract
// the numerical ID from each name and then uses filter() to select the ones 
// that are greater than its neighbors.

const names = ["JC63", "Bob132", "Ursula89", "Ben96", "Mery126", "Marta200", "Ursula1", "Honza300"];

const greatIDs = names
    .map((name)=> parseInt(name.match(/[0-9]+/)[0], 10))
    .filter(()=>{
        // Without the arr argument, there's no way to easily access the
        // intermediate array without saving it to a variable.
    })

    // The array argument is not the array that is being built -- there is no way to
    // access the array being built from the callback function.

console.log('greatIDs: ', greatIDs);



















































// const names = ["JC63", "Bob132", "Ursula89", "Ben96", "Mery126", "Marta200", "Ursula1", "Honza300"];

// const greatIDs = names
//     .map((name)=> parseInt(name.match(/[0-9]+/)[0], 10))
//     .filter((id, idx, arr)=>{
//         if(idx > 0 && id <= arr[idx-1]) return false;
//         if(idx < arr.length -1 && id <= arr[idx +1]) return false;
//         return true;
//     })
// console.log('greatIDs: ', greatIDs);