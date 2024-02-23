// 02 How reduce() works with an initial value.

// Here we reduce the same array using the same algorithm, but with an initialValue of 10
// passed as the second argument to reduce():

const array = [15, 16, 17, 18, 19];


const reducedArray = array.reduce(
    (accumulator, currentValue, index)=>{
        const returns = accumulator + currentValue;
        console.log(
            `index: ${index}, accumulator: ${accumulator}, currentValue: ${currentValue}, returns: ${returns}`
        )
        return returns;
    },
    10
)

console.log(reducedArray);

