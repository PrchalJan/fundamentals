// Chaining after a catch

// It's possible to chain after a failure, e.e. a catch, which is useful to accomplish new
// actions even after an action failed in the chain. Read the following example:

function doSomething(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve();
        }, 2000)
    })
}

doSomething()
    .then(()=>{
        throw new Error("Something failed");

        console.log("Do this");
    })
    .catch(()=>{
        console.error("Do that");
    })
    .then(() => {
        console.log("Do this, no matter what happened before");
    })

    // NOTE: The text "Do this" is not displayed because the "Something failed" 
    // error caused a rejection;


    // 2 seconds nothing happens
    // "Do that"
    // "Do this, no matter what happened before"


// IN async / await, this code looks like: 

async function main(){
    try {
        await doSomething();
        throw new Error("Something failed");
        console.log("Do this");
    } catch(e){
        console.error("Do that");
    } finally {
        console.log("Do this, no matter what happened before");
    }
}