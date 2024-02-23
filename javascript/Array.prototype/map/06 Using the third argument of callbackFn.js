// 06 Using the third argument of callbackFn

// The array argument is useful is you want to access another element in the array,
// especially when you don't have an existing variable that refers to the array.
// The following example first uses filter() to extract the positive values and then
// uses map() to create a new array where each element is the average
// of its neighbors and itself.

const numbers = [3, -1, 1, 4, 1, 5, 9, 2, 6];
const averaged = null;

// Without the arr argument, there's no way to easily access the
// intermediate array without saving it to a variable.

// The array argument is not the array that is being built -- there is no way to
// access the array being built from the callback function.

console.log(averaged);





















































// const numbers = [3, -1, 1, 4, 1, 5, 9, 2, 6];
// const averaged = numbers
//     .filter((num)=>num > 0)
//     .map((num, idx, arr)=>{
        // Without the arr argument, there's no way to easily access the
        // intermediate array without saving it to a variable.
    //     const prev = arr[idx - 1];
    //     const next = arr[idx + 1]
    //     let total = num;
    //     let count = 1;
    //     if(prev !== undefined){
    //         count++;
    //         total += prev;
    //     }
    //     if(next !== undefined){
    //         count++;
    //         total += next;
    //     }
    //     const average = total / count;
    //     return Math.round(average *100) / 100;
    // })
// The array argument is not the array that is being built -- there is no way to
// access the array being built from the callback function.

// console.log(averaged);