// 1. Using JSON.parse() and JSON.stringify():

const originalArray = [1, 2, [3, 4]];

// Deep copy using JSON.parse() and JSON.stringify()
const deepCopyFromJson = JSON.parse(JSON.stringify(originalArray));

// Modify the nested array in the deep copy
deepCopyFromJson[2][0] = 99;

console.log(originalArray); // [1, 2, [3, 4]]
console.log(deepCopyFromJson); // [1, 2, [99, 4]]

// 2. Using a Recursive Function for Objects:

function deepCopy(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return obj; // base case: return non-objects as is
  }

  let copy = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = deepCopy(obj[key]);
    }
  }

  return copy;
}

const originalObject = { a: 1, b: { c: 2 } };

// Deep copy using a recursive function
const deepCopyFromFunction = deepCopy(originalObject);

// Modify the nested object in the deep copy
deepCopyFromFunction.b.c = 99;

console.log(originalObject); // { a: 1, b: { c: 2 } }
console.log(deepCopyFromFunction); // { a: 1, b: { c: 99 } }
