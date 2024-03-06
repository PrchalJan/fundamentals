// Error Handling



function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

function doSomething(url){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(!url){
                const randomInt = getRandomInt(3);
                console.log('randomInt: ', randomInt);
                if(randomInt === 0) {
                    resolve("https://www.seznam.cz");
                } else if (randomInt === 1){
                    reject("Bad Luck!")
                } else if(randomInt === 2){
                    reject("Horrible Luck!");
                }
            } else {
                resolve(url + "/didSomething")
            }

        }, 2000)
    })
}

function failureCallback(err){
    console.log("failureCallback running");
    console.error(err);
}

let address;
doSomething()
    .then((url)=>{address = url})
    .then((un)=>{console.log('un: ', un);console.log('address: ', address)})
    .then((un)=>{console.log("I ran with in: ", un)})
    .then((un)=>{console.log("I ran with in: ", un)})
    .catch((()=>(err)=>console.log(err, "custom"))())


// You might recall seeing failureCallback three times in the pyramid of doom earlier,
// compared to only once at the end of the promise chain:

doSomething()
    .then((url)=>doSomething(url))
    .then((url)=>doSomething(url))
    .then((finalResult)=>{console.log(`Got the final result: ${finalResult}`)})
    .catch(failureCallback)

// If there's an exception, the browser will look down the chain for .catch() handlers
// or onReject. This is very much modeled after how synchronous code works:

function dooSomething(num){
    return new Promise(resolve=>{
        setTimeout(()=>{
            console.log("next step completed")
            resolve(num + 1)
        }, 1000)
    })
}
function doSomethingElse(num){
    return new Promise(resolve=>{
        setTimeout(()=>{
            console.log("next step completed")
            resolve(num + 1)
        }, 1000)
    })
}
function doThirdThing(num){
    return new Promise(resolve=>{
        setTimeout(()=>{
            console.log("next step completed")
            resolve(num + 1)
        }, 1000)
    })
}

function syncDoSomething(num){
    return num + 1
}
function syncDoSomethingElse(num){
    return num + 1
}
function syncDoThirdThing(num){
    throw new Error("suck it oscar!");
    return num + 1
}

try {
    const result = syncDoSomething(1);
    const newResult = syncDoSomethingElse(result);
    const finalResult = syncDoThirdThing(newResult);
    console.log(`Got the final result: ${finalResult}`);
} catch (error) {
    console.log("catch block running");
    failureCallback(error);
}


// This symetry with asynchronous code culminates in the async / await syntax:

async function foo(num) {
    try {
        const result = await dooSomething(num);
        const newResult = await doSomethingElse(result);
        const finalResult = await doThirdThing(newResult);
        console.log(`Got the final result: ${finalResult}`);
        return finalResult;
    } catch(error){
        failureCallback(error);
    }
}

foo(1);

// Promises solve a fundamental flaw with the callback pyramid of doom, by catching
// all errors, even thrown exceptions and programming errors. THis is essential for
// functional composition of asynchronous operations. All errors are now handled by
// the catch() method at the end of the chain, and you should almost never need to
// use try / catch without using async / await.