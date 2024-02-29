// Nesting

// In the examples above involving listOfIngredients, the first one has one promise
// chain nested in the return value of another then() handler, while the second one
// uses an entirely flat chain. Simple promise chains are best kept flat without nesting,
// as nesting can be a result of careless composition.

// Nesting is a control structure to limit the scope of catch statements. Specifically, a 
// nested catch only catches failures in its scope and below, not errors higher up in
// the chain outside the nested scope. When used correctly, this gives greater 
// precision on error recovery:

function doSomethingCritical(num){
    return new Promise((resolve)=>{
        resolve(num+1)
    })
}
function doSomethingOptional(num){
    
    return new Promise((resolve)=>{
        // throw new Error("Error occured at doSomethingOptional");
        resolve(num+1)
    })
}
function doSomethingExtraNice(num){
    console.log("Did something extra nice");
    return "SOMETHING EXTRA NICE" + num
}
function moreCriticalStuff(){
    console.log("DID more critical stuff");
    return "CRITICAL FTUFF"
}




doSomethingCritical(1)
    .then((result)=>
        doSomethingOptional(result)
            .then((optionalResult)=> doSomethingExtraNice(optionalResult))    
            .catch((e)=>{})
    ) // Ignore if optional stuff fails; proceed.
    .then((niceResult)=>{console.log("niceResult: ", niceResult); return moreCriticalStuff()})
    .then((result)=>{console.log('result: ', result)})
    .catch((e)=>console.error(`Critical failure: ${e.message}`))


// Note that the optional steps here are nested -- with the nesting caused not by the
// indentation, but by the placement of the outer ( and ) parentheses around the
// steps.

// The inner error-silencing catch handler only catches failures from 
// doSomethingOptional() and doSomethingExtraNice(), after which the code resumes
// with moreCriticalStuff(). Importantly, if doSomethingCritical() fails, its error is
// caught by the final ( outer ) catch only, and does not get swallowed by the inner
// catch handler.

//In async / await, this code looks like:

async function main(){
    try {
        const result = await doSomethingCritical();
        try{
            const optionalResult = await doSomethingOptional(result);
            const nestedResult = await doSomethingExtraNice(optionalResult);
        } catch(e){
            // Ignore failures in optional steps and proceed.
        }
        const result2 = await moreCriticalStuff(nestedResult);
        console.log(result2);
    } catch(e) {
        console.error(`Critical failure: ${e.message}`);
    }
}


// NOTE: If you don't have sophisticated error handling, you very likely don't
// need nested then handlers. Instead, use a flat chain and put the error
// handling logic at the end


