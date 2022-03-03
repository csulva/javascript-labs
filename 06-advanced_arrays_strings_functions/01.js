/**
 * In these questions you will be practicing how to use the forEach syntax.
 *
 * 1. Use a random number generator to generate an array of 100 values.
 * 2. Use forEach on the array to output the sum, count and average.
 * 3. Use forEach to create a new array from the first one that halves all the
 *    values.
 * 4. Use forEach on the new array to output the sum, count and average again.
 * 5. Refactor: define the sum, count and average function as a separate
 *    function and pass it to the forEach functions as a name.
 */

// 1. Use a random number generator to generate an array of 100 values.
function getRandomNumber() {
  return Math.floor(Math.random() * 100 + 1);
}
randomNumbers = [];
for (i = 0; i < 100; i++) {
  x = getRandomNumber();
  randomNumbers.push(x);
}

// 2. Use forEach on the array to output the sum, count and average.
let sum = 0;
let count = 0;
randomNumbers.forEach((num) => (sum += num));
randomNumbers.forEach((num) => (count += 1));
console.log(sum);
console.log(count);
let average = sum / count;
console.log(average);

// 3. Use forEach to create a new array from the first one that halves all the
//    values.

let halves = [];
randomNumbers.forEach((num) => {
  halves.push(num / 2);
});
console.log(randomNumbers[0]);
console.log(halves[0]);

// 4. Use forEach on the new array to output the sum, count and average again.
sum = 0;
count = 0;
halves.forEach((num) => {
  sum += num;
  count += 1;
});
console.log(sum);
console.log(count);
average = sum / count;
console.log(average)

// 5. Refactor: define the sum, count and average function as a separate
//    function and pass it to the forEach functions as a name.
sum = 0;
function calculateSum(num) {
    sum += num;
    return sum;
}
let counter = 0;
function doCount(){
    counter += 1;
    return counter;
}

function getAverage(sum, count) {
    return sum/count;
}
randomNumbers.forEach(calculateSum);
console.log(sum)
randomNumbers.forEach(doCount);
console.log(counter)
let avg2 = 0;
avg2 = getAverage(sum, counter);
console.log(avg2);
