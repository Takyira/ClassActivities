let x = 5;
let y = [1, 2, 30];
let z = {
  id: 100,
  name: "myName",
  loggedIn: false
};
// reassign x, y, and z to FALSY values


x = 0;
y = false;
z = null;

console.log(x);
console.log(y);
console.log(z);

// print x, y, and z

const a = "name";
const b = [];
const c = {};
// try to reassign a, b, and c to FALSY values

// a = "Takyira";
// b = "city";
// c = "obj";

// using BRACKET NOTATION, assign a value to b
b[0] = "Takyira"
// using DOT NOTATION, assign a PROPERTY to c
c.age = 25;

// using DOT NOTATION, assign a METHOD to c
c.method = function(message) {console.log(message);};
// using BRACKET NOTATION, call the method in c

const word = `method`;
c[word](`hello`);

// print a, b, and c

console.log(a);
console.log(b);
console.log(c);
