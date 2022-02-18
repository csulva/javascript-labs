/**
 * You have already made some functions for temperatures. Now you will make some
 * more functions!
 *
 * 1. Research the formula for conversions to and from Kelvin. Write a KtoC,
 *    CtoK, FtoK and a KtoF function. Be sure to return the value so that the
 *    code below functions without error.
 *
 * 2. Research and write a function that uses the pythagorean formula to get the
 *    length of the hypotenuse of a right angled triangle. It should take in two
 *    arguments, the two shorter sides of a triangle, and return the longest
 *    side. Call the function "pythagoras". After writing your function the code
 *    below should work without error.
 *
 * 3. Research and write a functions to convert
 *      - inches to centimeters (inchToCm)
 *      - centimeters to inches (CmToInch)
 *      - miles to kilometers (MToKm)
 *      - kilometers to miles (KmToM)
 *
 */

// Write your code here:

// 1.  0K − 273.15 = -273.1°C

function kToC(k) {
    let c = k - 273.15;
    return c;
}
function cToK(c) {
    let k = c + 273.15;
    return k;
}

//  (0K − 273.15) × 9/5 + 32 = -459.7°F
function kToF(k) {
    let f = (k - 273.15) * 9/5 + 32;
    return f;
}
// (32°F − 32) × 5/9 + 273.15 = 273.15K
function fToK(f) {
    let k = (f - 32) * 5/9 + 273.15
    return k;
}

// a^2 + b^2 == c^2
function pythagoras(a, b) {
    let c = (a ** 2 + b ** 2) ** (1/2);
    return c;
}

function MToKm(m) {
    let km = m * 1.609;
    return km
}
function KmToM(k) {
    let m = k / 1.609;
    return m
}
function inchToCm(inch) {
    let cm = inch * 2.54;
    return cm
}
function CmToInch(cm) {
    let inch = cm / 2.54;
    return inch
}

// Do not modify anything below this line

console.log(kToC(272));
console.log(cToK(0));
console.log(fToK(30));
console.log(kToF(100));

console.log(pythagoras(10, 20));
console.log(pythagoras(30, 100));
console.log(pythagoras(20, 50));

console.log(MToKm(100));
console.log(KmToM(25));

console.log(inchToCm(10));
console.log(CmToInch(425));