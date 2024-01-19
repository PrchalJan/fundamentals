// Using thisArg
// The following (contrived) example updates an object's properties from each entry in the array:

class Counter {
    constructor() {
      this.sum = 0;
      this.count = 0;
    }
    add(array) {
      // Only function expressions have their own this bindings.

    }
  }
  
  const obj = new Counter();
  obj.add([2, 5, 9]);
  console.log(obj.count); // 3
  console.log(obj.sum); // 16






























































//   class Counter {
//     constructor() {
//       this.sum = 0;
//       this.count = 0;
//     }
//     add(array) {
//       // Only function expressions have their own this bindings.
//       array.forEach(function countEntry(entry) {
//         this.sum += entry;
//         ++this.count;
//       }, this);
//     }
//   }
  
//   const obj = new Counter();
//   obj.add([2, 5, 9]);
//   console.log(obj.count); // 3
//   console.log(obj.sum); // 16


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#using_thisarg