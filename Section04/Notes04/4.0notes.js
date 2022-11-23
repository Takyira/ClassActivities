function greet(message) {
  console.log(message);
}

greet("Hi");

const shout = message => {
  console.log(message);
};

shout("hi");

const yell = (message, direction) => {
  console.log(message, direction);
};

//JS ARRAY METHODS
//string is an array of characters
// let ourString = "Welcome to Missouri";

// let splitArray = ourString.split(" ");
//   console.log(splitArray);

//   let splitArray = ourString.split("");
//   console.log(splitArray);

// let splitArray = ourString.split("").reverse().join("");
// console.log(splitArray);

// let splitArray = ourString.split("").length
// ourString.split("").length

const arr = [1, 2, 3];
arr.push(5); //prints 5 because its the length of the new array

// .slice(start, end) copies a portion of the array from the starting index to the end - 1 index. The original array is not altered
// .splice(start, # to remove, item to add, ...) directly mutates/alters the array by removing or replacing items in place

// const arr = ["Jan", "Feb", "Apr", "Mar", "May", "Sept", "Oct", "Nov", "Dec"];

// console.log(arr.slice(6, arr.length));

// console.log(arr.slice(-3));

// console.log(arr.splice(2, 1));

// const april = arr.splice(2, 1);

// console.log(arr);

// arr.splice(5, 0, "Jun", "Jul", "Aug"); //start at place 5, delete 0. add from start jun, jul, aug

// console.log(arr);
