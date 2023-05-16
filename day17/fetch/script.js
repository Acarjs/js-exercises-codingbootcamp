const objectA = {
  a: 1,
  b: 2,
};

debugger;

const objectB = objectA; // object is passed as reference!!
objectB.b = 3;

console.log(objectA) // { a: 1, b: 3 }
console.log(objectB) // { a: 1, b: 3 }
