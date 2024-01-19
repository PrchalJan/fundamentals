// The following code creates a copy of a given object

const copy = (obj)=>{
    const copy = Object.create(Object.getPrototypeOf(obj));
    console.log('copy: ', copy)
    const propNames = Object.getOwnPropertyNames(obj);
    console.log('propNames: ', propNames);

    propNames.forEach((name, index)=>{
        const desc = Object.getOwnPropertyDescriptor(obj, name);
        console.log('index: ', index, 'desc: ', desc);
        Object.defineProperty(copy, name, desc);
    });
    return copy;
};

const obj1 = {a: 1, b: 2, c: 3};
const obj2 = copy(obj1);

console.log('obj1: ', obj1);
console.log('obj2: ', obj2);


// probably bullshit (complicated)


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#an_object_copy_function