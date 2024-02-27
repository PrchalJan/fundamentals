// Chaining promises

// A common need is to execute two or more asynchronous operations back to back,
// where each subsequent operation starts when the previous operation succeeds,
// with the result from the previous step. In the old days, doing several asynchronous
// operations in a row would lead to the classic callback pyramid of doom:





// doSomething(function(result){
//     doSomethingElse(result, function(newResult){
//         doThirdThing(newResult, function(finalResult){
//             console.log(`Got the final result: ${finalResult}`)
//         }, failureCallback)
//     }, failureCallback)
// }, failureCallback)


// With promises, we accomplish this by creating a promise chain.
// The API desing of promises makes this great, because callbacks
// are attached to the returned promise object, instead of beaing
// passed into a function.

// Here's the magic: the then() function returns a new promise, 
// different from the original:

// const promise = doSomething();
// const promise2 = promise.then(successCallback, failureCallback);

//This second promise (promise2) represents the completion not just
// doSomething(), but also of the successCallback or failureCallback
// you passed in -- which can be other asynchronous functions returning
// a promise. When that's the case, any callbacks added to promise2
// get queued behind he promise returned by either successCallback or failureCallback.


// Note: If you want a working example to play with, you can use the following
// template to create any function returning a promise:


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function doSomething(){
    return new Promise((resolve)=>{
        console.log("just before timeout");
        setTimeout(()=>{
            // Other things to do before completion of the promise.
            // The fulfillment value of the promise
            resolve("https://example.com/");
        }, 2000)
    })
}

function doSomethingElse(result){
    return result;
};

function doThirdThing(result){
    return result;
}

function failureCallback(error){
    console.log("error.message", error.message);
}


let address;

function doFuckAll(result){
    console.log("did fuck all")
    return new Promise(resolve=> resolve(result))
}

doSomething()
    .then((result)=>result)
    .then((result)=>result)
    .then((result)=>doFuckAll(result))
    .then((result)=>((amigo)=>new Promise((resolve)=>resolve(amigo)))(result))
    .then(result=>
        new Promise((resolve, reject)=>{
            console.log("next step completed")
            setTimeout(()=>{
                const randomNumber = getRandomInt(3);
                if(randomNumber === 0 || randomNumber === 1) {
                    resolve(result)
                } else if (randomNumber === 2) {
                    reject("Bad Luck!")
                }
                
            }, 2000)
        }))
    .then(result=>
        new Promise((resolve, reject)=>{
            console.log("next step completed")
            setTimeout(()=>{
                const randomNumber = getRandomInt(3);
                if(randomNumber === 0 || randomNumber === 1) {
                    resolve(result)
                } else if (randomNumber === 2) {
                    reject("Bad Luck!")
                }
                
            }, 2000)
        }))
    .then(result=>
        new Promise((resolve, reject)=>{
            console.log("next step completed")
            setTimeout(()=>{
                const randomNumber = getRandomInt(3);
                if(randomNumber === 0 || randomNumber === 1) {
                    resolve(result)
                } else if (randomNumber === 2) {
                    reject("Bad Luck!")
                }
                
            }, 2000)
        }))
    .then(result=>
        new Promise((resolve, reject)=>{
            console.log("next step completed")
            setTimeout(()=>{
                const randomNumber = getRandomInt(3);
                if(randomNumber === 0 || randomNumber === 1) {
                    resolve(result)
                } else if (randomNumber === 2) {
                    reject("Bad Luck!")
                }
                
            }, 2000)
        }))

    .then((result)=>{
        console.log(result);
        address = result;
    })
    .catch((error)=>{
        console.error(error);
    })


console.log('just chilling');


    
// With this pattern, you can create longer chains of processing, where each
// promise represents the completion of one asynchronous step in the chain.
// In addition, the arguments to then are optional, and catch(failureCallback) is
// short for then(null, failureCallback) -- so if your error handling code is
// the same for all steps, you can attach it to the end of the chain

doSomething()
    .then(function(result){
        return doSomethingElse(result);
    })
    .then(function(result){
        return doThirdThing(newResult);
    })
    .then(function(finalResult){
        console.log(`Got the final result: ${finalResult}`)
    })
    .catch(failureCallback)

// You might see this expressed with aroow functions instead:

doSomething()
    .then((result)=>doSomethingElse(result))
    .then((result)=>doThirdThing(result))
    .then((finalResult)=>{
        console.log(`Got the final result: ${finalResult}`)
    })
    .catch(failureCallback);

// doSomethingElse and doThirdThing can return any value -- if they return promises,
// that promise is first waited until it settles, and the next callback receives the
// fulfillment value, not the promise itself. It is important to always return promises
// from then callbacks, even if the promise always resolves to undefined.
// If the previous handler started a promise but did not return it, there's no way to
// track its settlement anymore, and the promise is said to be "floating".

doSomething()
    .then((url)=> {
        // Missing 'return' keyword in front of fetch(url)
        fetch(url)
    })
    .then((result)=> {
        // result is undefined, because nothing is returned from the previous
        // handler. There's no way to know the return value of the fetch()
        // call anymore, or whether it succeeded at all.
    });


// By returning the result of the fetch call (which is a promise), we can both track its
// completion and receive its value when it completes.

doSomething()
    .then((url)=>{
        return fetch(url);
    })
    .then((result)=>{
        // result is a Response object
    });


// Floating promises could be worse if you have race conditions -- if the promise from
// the last handler is not returned, the next then handlerr will be called early, and any
// value it reads may be incomplete.

const listOfIngredients = [];

doSomething()
    .then((url)=>{
        // Missing 'return' keyword in front of fetch(url).
        fetch(url)
            .then((res)=>"flower")
            .then((data)=> {
                listOfIngredients.push(data);
            })
    })
    .then(()=>{
        console.log(listOfIngredients);
        // listOfIngredients will always be [], because the fetch request hasn't completed yet.
    })


// Therefore, as a rule of thumb, whenever your operation encounters a promise,
// return it and defer its handling to the next then handler.

doSomething()
    .then((url)=>{
        // 'return' keyword now included in front of fetch call.
        return fetch(url)
            .then(response=>"avocado")
            .then((data)=>{
                listOfIngredients.push(data);
            })
    })
    .then(()=>{
        console.log('listOfIngredients: ', listOfIngredients);
        // listOfIngredients will now contain data from fetch call.
    })


// Even better, you can flatten the nested chain into a single chain, which is simpler
// and makes error handling easier. The details are discussed in the Nesting section below.

doSomething()
    .then((url)=>fetch(url))
    .then((res)=> "Carrot")
    .then(data=>{
        listOfIngredients.push(data);
    })
    .then(()=>{
        console.log(listOfIngredients);
    })
