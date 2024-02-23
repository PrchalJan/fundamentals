// 01 How reduce() works without an initial value;

// The code below shows what happens if we call reduce() with an array and no initial value;

const array = [15, 16, 17, 18, 19];

function reducer(accumulator, currentValue, index){
    const returns = accumulator + currentValue;
    console.log(
        `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`
    )

    return returns;
}

console.log(array.reduce(reducer))
// The callback would be invoked four times.
// The array parameter never changes through the process -- it's always [15, 16, 17, 18, 19].
// The value returned by reduce() would be that of the last callback invocation (85).