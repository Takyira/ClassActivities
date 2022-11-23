//declare and Invoke, No Return

function helloWorld() {
  console.log("Hello World");
}

helloWorld();

//Declare and Invoke with Return

let weather = "";
let greeting;
function weatherGreeting() {
  let outfit;
  if (weather == "hot and sunny") {
    outfit = "light and cool";
  }
  if (weather == "cold") {
    outfit = "warm";
  }
  if (weather == "rainy") {
    outfit = "wet resistant";
  }

  greeting = `The weather today is ${weather}. Consider wearing ${outfit}.`;
}

//Parameters
function weatherWithParams(weather) {
  let outfit;
  if (weather == "hot and sunny") {
    outfit = "light and cool";
  }
  if (weather == "cold") {
    outfit = "warm";
  }
  if (weather == "rainy") {
    outfit = "wet resistant";
  }

  greeting = `Today it is ${weather}. You should probably wear a ${outfit} outfit.`;
  return greeting;
}

console.log(weatherWithParams("cold"));

//console.log(greeting); will run as undefined

//Rest Parameter
let nums;
function printParams(...params) {
  for (let taco of params) {
    console.log(taco);
  }
  nums = params;
  return params;
}
printParams("First", "Second", "Third", "Apple");

// Using Return Value as a Parameter

function printOtherFunctionReturn(otherFunction) {
  console.log("This is the Param: ", otherFunction);
}
printOtherFunctionReturn(28);

//Callback Function
printOtherFunctionReturn(printParams(1, 2, 3));

//Arrow Syntax - Block body
const sumNums = (...nums) => {
  let sum = 0;

  for (let num of nums) {
    sum += num;
  }
  return sum;
};

console.log(sumNums(1, 2, 3, 4, 5, 6, 7, 8));

//Arrow Syntax - Concise Body

const arr = [
  "dog",
  "cat",
  true,
  false,
  ["This is an array inside of an array", 5, true],
  { object: "I am a value to the key name object" },
  "just kidding, i'm last"
];

console.log("This is the second iteration", arr[1]);
console.log("This is the fourth iteration", arr[3]);
console.log(arr.length);
console.log(arr[0].length);

for (let item of arr) {
  console.log(item);
}

let lastItem = arr.length - 1;

console.log("this is the last item: ", arr[lastItem]);

const books = {
  title: "the last Iteration",
  author: "unknown",
  year: 2022,
  genre: ["comedy", "drama", "romance"],
  award: {
    awardName: "Amazing Book Stuff",
    nominated: 2020,
    won: 2022,
    worthless: true
  },
  promote: function() {
    return `${this.title} is a book written by ${this.author} in ${this.year}. It has won
   an award called ${this.award.awardName} in ${this.award.won} and it is ${this.award.worthless}
   that is worthless`;
  }
};

console.log(books.promote());
