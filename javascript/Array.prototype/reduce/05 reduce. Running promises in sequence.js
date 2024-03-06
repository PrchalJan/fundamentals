// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#running_promises_in_sequence

// Running promises in sequence

// Promise sequencing is essentially function piping demonstrated in the previous
// section, except done asynchronously.

// Compare this with pipe: fn(acc) is changed to acc.then(fn),
// and initialValue is ensured to be a promise.

// const asyncPipe = 
//     (...functions) =>
//     (initialValue) => {
//         console.log("running asyncPipe with initialValue: ", initialValue);
//         return functions.reduce((acc, fn) => acc.then(fn), Promise.resolve(initialValue))
//     }
//         ;




// const asyncPipe = 
//     (...functions) =>
//     (initialValue) =>
//         functions.reduce((acc, fn) => acc.then(fn), Promise.resolve(initialValue));



// asyncPipe can also be implemented using async / await, which better demonstrates
// its similarity with pipe: 

const asyncPipe = 
    (...functions) =>
    (initialValue) =>
        functions.reduce(async (acc, fn)=> fn(await acc), initialValue)








// Building blocks to use for composition
// const p1 = (a) => new Promise((resolve)=>resolve(a*5));
const p1 = (a) => 
    new Promise((resolve)=>{
        setTimeout(()=>{
            const output = a * 5;
            console.log("Resolving p1 a * 5 : ", output)
            resolve(output)
        }, 2000)
        
    })


const p2 = async (a) => {
    await new Promise((resolve)=>setTimeout(resolve, 2000))
    const output = a * 2;
    console.log("Resolving p2: a * 2", output);
    return output;
    
}


// The composed functions can also return non-promises, because the values are
// all eventually wrapped in promises

const f3 = (a) => {console.log("f3 is plain function, but will be automatically wrapped in promise. Returning: a * 3", a*3); return a * 3} ;
const p4 = (a) => new Promise((resolve)=>{setTimeout(()=>{console.log("Resolving p4:  a * 4", a*4); resolve(a*4)}, 2000)})


const asyncPipe1 = 
    async (initialValue) => {
        const functions = [p1, p2, f3, p4];
        const result1 = functions.reduce(async (acc, fn, index) => {
            console.log("..........")
            console.log(`index:${index}, acc: ${acc}, fn: ${fn}`)

            return fn(await acc)
        }, initialValue)


        // let accumulator = await p1(initialValue);
        // console.log("accumulator: ", accumulator);
        // accumulator = await p2(accumulator);
        // console.log("accumulator: ", accumulator);
        // accumulator = await f3(accumulator);
        // console.log("accumulator: ", accumulator);
        // const result = await p4(accumulator);


        return result1;
    }

asyncPipe1(10)
    .then(console.log);

// asyncPipe(p1, p2, f3, p4)(10).then((result)=>console.log(result));



// Promise.reject("stupid error")
//     .then((result)=> result * 2)
//     .then((result)=> result * 2)
//     .then((result)=> result * 2)
//     .then((result)=> result * 2)
//     .then((result)=> {console.log('result: ', result)})
//     .catch((error)=>{console.log("error: ", error)})
//     .then(()=>{console.log("I always run")})


