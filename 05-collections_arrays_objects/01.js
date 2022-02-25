/**
 * 1. Create an array of strings with the names of some items in the room you
 *    are sitting in right now. For example "chair", "keyboard" etc
 * 2. Now think of 3 drawers or shelves or boxes that you have nearby. Make an
 *    array with a sub-array for each drawer or box, and add 5 things in each
 *    sub-array. Do this for 3 boxes. You should have a two dimensional array.
 * 3. Pick 5 things from the two dimensional array just created, and log them to
 *    the console using array referencing.
 * 4. Use a for loop to create a array of the numbers from 1 to 100.
 * 5. Use another for loop to go through the array of numbers just created and
 *    log the sum of all the numbers.
 * 6. Use the random number generator from previous labs and another for loop to
 *    create a array of 100 random numbers.
 * 7. Use another for loop to go over each of these random numbers and put them
 *    in one of two arrays. One for odd numbers, and one for even numbers.
 * 8. Make the for loop that logs the sum of all the numbers in an array into a
 *    function that takes an array as an argument and returns the sum. Use this
 *    function to log the sum of the two arrays of odd and even numbers.
 */

let array = [
  "couch",
  "chair",
  "laptop",
  "mug",
  "coffee table",
  "mousepad",
  "water bottle",
];
let boxes = [
  ["headphones", "charger", "pen", "pencil"],
  ["paper", "hdmi", "notepad"],
  ["puzzle", "gamecube", "speaker", "controller"],
];
console.log(boxes[1][1]);
console.log(boxes[0][2]);
console.log(boxes[2][0]);
console.log(boxes[0][0]);
let len = boxes[1].length
console.log(boxes[1][len-1]);
console.log(boxes[1][2]);

let arrayOfInts = [];
for (let num = 1; num <= 100; num++) {
  arrayOfInts.push(num);
}
let sum = 0;
for (let i = 0; i < arrayOfInts.length; i++) {
  sum += arrayOfInts[i];
}
console.log(sum);

function getRandomNumber() {
  return Math.floor(Math.random() * 10 + 1);
}
let randomArray = [];
for (let i = 0; i <= 100; i++) {
  let randInt = getRandomNumber() * getRandomNumber();
  randomArray.push(randInt);
}
console.log(randomArray[1], randomArray[2]);