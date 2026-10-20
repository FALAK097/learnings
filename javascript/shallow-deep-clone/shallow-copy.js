// 1. Using Spread Operator
const originalArray = [1, 2, [3, 4]];

// Shallow copy using spread operator
const shallowCopyFromSpread = [...originalArray];

// Modify the nested array in the shallow copy
shallowCopyFromSpread[2][0] = 99;

console.log(originalArray); // [1, 2, [99, 4]] <- the nested array is shared
console.log(shallowCopyFromSpread); // [1, 2, [99, 4]]

// 2. Using Object.assign() for Objects:
const originalObject = { a: 1, b: { c: 2 } };

// Shallow copy using Object.assign()
const shallowCopyFromAssign = Object.assign({}, originalObject);

// Modify the nested object in the shallow copy
shallowCopyFromAssign.b.c = 99;

console.log(originalObject); // { a: 1, b: { c: 99 } } <- the nested object is shared
console.log(shallowCopyFromAssign); // { a: 1, b: { c: 99 } }
