
const p1 = (a =2)=> new Promise((resolve)=>{

    setTimeout(()=>{
        console.log("Promise1 about to resolve");
        resolve(a*2);
    }, 1500)
})

const p2 = async (a=2) => {

    await new Promise(resolve=>{setTimeout(()=>{resolve()}, 1500)})
    

    return a*2
}

const p3 = (a=2)=> new Promise((resolve)=>{
    setTimeout(()=>{

        resolve(a*2)
    }, 1500)
})

const pipe =  p1(2).then(p2).then(p3).then(console.log);


const asyncPipe = (...functions) => async (initialValue) => {
    
    const promise1 = await functions[0](initialValue);
    console.log("promise1: ", promise1);

    const promise2 = await functions[1](promise1);

    console.log("promise2: ", promise2)

    const promise3 = await functions[2](promise2);
    return promise3;

    // return promise3;
}

asyncPipe(p1, p2, p3)(2).then(console.log);


console.log(__dirname);

// const asyncPipe = (...functions) => (initialValue) => {
//     return functions.reduce((accumulator, fn, idx)=>{
//         console.log("reduce loop with index ", idx, " running")
//         return accumulator.then(fn);
//     }, Promise.resolve(initialValue))
// }

// const value = Promise.resolve(2)
//     .then(p1)
//     .then(p2)
//     .then(p3)
//     .then(console.log)

// const asyncPipe2 = (...functions) => (initialValue) =>
//     functions.reduce(async(accumulator, fn, index) => { console.log("reduce loop with index ", index, "running") ;return fn( await accumulator)}, initialValue)



// const asyncPipe3 = (...functions) => async (initialValue) => {
//     let result = initialValue;
//     for(let i = 0; i < functions.length; i++) {
//         console.log("for loop running with index: ", i)
//         result = functions[i](await result)
//     }  
//     return result;
// }



// asyncPipe(p1, p2, p3)(2).then(console.log);
// asyncPipe2(p1, p2, p3)(2).then(console.log);
// asyncPipe3(p1, p2, p3)(2).then(console.log);