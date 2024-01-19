
// Filtering invalid entries from JSON

// The following example uses filter() to create a filtered JSON of all elements with non-zero, numeric id.

const arr = [
    {id: 15},
    {id: -1},
    {id: 0},
    {id: 3},
    {id: Infinity},
    {id: 12.2},
    {},
    {id: null},
    {id: NaN},
    {id: "undefined"},
];


function filterByID() {
}

const arrById = [];

console.log("Number of Invalid Entries = ", invalidEntries);
console.log('arrById: ', arrById);



























// const arr = [
//     {id: 15},
//     {id: -1},
//     {id: 0},
//     {id: 3},
//     {id: Infinity},
//     {id: 12.2},
//     {},
//     {id: null},
//     {id: NaN},
//     {id: "undefined"},
// ];

// let invalidEntries = 0;

// function filterByID(item) {
//     if(Number.isFinite(item.id) && item.id !== 0) {
//         return true;
//     }
//     invalidEntries++;
//     console.log(' item.id: ',item.id, ' false: ', item);
//     return false;
// }

// const arrById = arr.filter(filterByID);

// console.log("Number of Invalid Entries = ", invalidEntries);
