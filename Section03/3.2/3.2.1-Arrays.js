// create an Array using an Array literal
const things = ["lamp", 40, false, [5, true, "blue"], "all"];
// access the 1st item in the Array
console.log(things[0]);
// access the last item in the Array
console.log(things[4]);
// print the length of the Array
console.log(things.length);
// use the length property to access the last item in the Array
console.log(things[things.length - 1]);

// with for...of, loop over the Array, modify the value and add to a different Array

let nums = [10, 20, 30, 40];
let sumNum = 0;
let plusFived = [];
let i = 0;
for (let num of nums) {
  // sum all the nums in nums array
  sumNum = num + sumNum;
  // take current iteration and add 5
  let addFive = num + 5;

  // place in plusFived array
  plusFived[i] = addFive;
  // Manually increase value of i by 1 so
  i++;
}

console.log(sumNum); // 100
console.log(plusFived); // [15, 25, 35, 45]
