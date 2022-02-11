/**
 * Create three variables with numbers assigned to them.
 * Do not use zero.
 * Make the numbers at least 4 digits long, e.g. 3874, 2398.
 * Create a 4th variable with the number 7 and call it "luckyNumber".
 *
 * After creating the variables, do the
 * following without typing any more numbers.
 * 
 * Output the following to the console:
 *      1. The sum of the numbers.
 *      2. The result of subtracting the two smallest
 *         numbers from the larger one.
 *      3. The result of multiplying all the numbers.
 *      4. The result of the largest number divided
 *         by the difference between the smaller ones.
 *      5. The result of the numbers modulo 7.
 * 
 * Finally, label all of the outputs by using console log in the way
 * that is demonstrated below. For the labels, be sure to come up 
 * with clear and descriptive names.
 */

let first = 64002;
let second = 5442;
let third = 501992;
let luckyNumber = 1337;

let sum = first + second + third + luckyNumber;

let subtract = third - second - luckyNumber;

let product = first * second * third * luckyNumber;

let divide = third / (second - luckyNumber);

let remainder = [(first % 7), (second % 7), (third % 7), (luckyNumber % 7)];
let modulo = first % second % third % luckyNumber % 7
// let result = 0
// console.log("Label", result)

console.log('Sum :', sum);
console.log('Difference :', subtract)
console.log('Product :', subtract)
console.log('Quotient :', divide)
console.log('Remainder of Modulos 7 :', remainder)
console.log('Remainder of Modulo 7 :', modulo)