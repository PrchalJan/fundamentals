// 05 Running promises in sequence

// Promise sequencing is essentially function piping demonstrated in the previous
// section, except done asynchronously.

// Compare this with pipe: fn(acc) is changed to acc.then(fn),
// and initialValue is ensured to be a promise.
const asyncPipe1 =
    (...functions) =>
    (initialValue) =>
        functions.reduce((acc, fn) => acc.then(fn), Promise.resolve(initialValue));

// Building blocks to use for composition
const p1 = async (a) => a * 5;
const p2 = async (a) => a * 2;
// The composed functions can also return non-promise, because the values are
// all eventually wrapped in promises.
const f3 = (a) => a * 3;
const p4 = async (a) => a * 4;

asyncPipe1(p1, p2, f3, p4)(10).then(console.log);


// asyncPipe can also be implemented using async/await, which better demonstrates
// its similarity with pipe:

const asyncPipe2 = 
    (...functions) =>
    (initialValue) =>
        functions.reduce(async (acc, fn) => fn(await acc), initialValue);

asyncPipe2(p1, p2, f3, p4)(10).then(console.log);
