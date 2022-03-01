/**
 * Remember how you put the temperature converter functions to use when
 * converting a list of values? Well, now you will get to do the same for a
 * large object!
 *
 * Your challenge:
 *
 * 1. You'll find a huge JSON file in this folder it is an object that contains
 *    a large list of objects. Manually copy and paste the contents of that file
 *    below and start writing your script below that.
 * 2. Output to the console all the temperatures in Vancouver in Celsius,
 *    convert if needed.
 * 3. Output to the console all the temperatures in Jerusalem in Fahrenheit,
 *    convert if needed.
 * 4. Get the average temperatures for Vancouver and Jerusalem in both Celsius
 *    and Fahrenheit and output them to the console.
 * 5. Write a function that will return a chosen city's average temperature in
 *    either fahrenheit or celsius defined by two parameters as shown in the
 *    code below.
 *
 */

// let avgTempInCity = getAvgTemp("Vancouver", "C");
// console.log(avgTempInCity);
function fToC(tempInF) {
    let c = (tempInF - 32) * 5/9;
    return c;
}
function cToF(tempInC) {
    let f = (9/5 * tempInC) + 32
    return f;
}

let data = require('./weather.json')
arrays = data['data']
// for (let counter = 0; counter < arrays.length; counter ++){
//     if (arrays[counter]['City'] === 'Vancouver') {
//         if (arrays[counter]['Scale'] === 'Celsius') {
//         console.log(arrays[counter]['Temperature'])
//         }
//         else {
//             console.log(fToC(arrays[counter]['Temperature']))
//         }
//     }
// }
// for (let counter = 0; counter < arrays.length; counter ++){
//     if (arrays[counter]['City'] === 'Jerusalem') {
//         if (arrays[counter]['Scale'] === 'Fahrenheit') {
//         console.log(arrays[counter]['Temperature'])
//         }
//         else {
//             console.log(cToF(arrays[counter]['Temperature']))
//         }
//     }
// }
let avgVancouverInC = [0, 0];
let avgVancouverInF = [0, 0];
let avgJerusalemInC = [0, 0];
let avgJerusalemInF = [0, 0];

for (let counter = 0; counter < arrays.length; counter ++){
    if (arrays[counter]['City'] === 'Vancouver') {
        if (arrays[counter]['Scale'] === 'Fahrenheit') {
        avgVancouverInF[0] += arrays[counter]['Temperature']
        avgVancouverInF[1] += 1
        }
        else {
            avgVancouverInC[0] += arrays[counter]['Temperature']
            avgVancouverInC[1] += 1
        }
    }
    else if (arrays[counter]['City'] === 'Jerusalem') {
        if (arrays[counter]['Scale'] === 'Fahrenheit') {
            avgJerusalemInF[0] += arrays[counter]['Temperature']
            avgJerusalemInF[1] += 1
            }
        else {
                avgJerusalemInC[0] += arrays[counter]['Temperature']
                avgJerusalemInC[1] += 1
            }
    }
    }
avgVancouverInC[0] = avgVancouverInC[0]/avgVancouverInC[1];
avgVancouverInF[0] = avgVancouverInF[0]/avgVancouverInF[1];
avgJerusalemInC[0] = avgJerusalemInC[0]/avgJerusalemInC[1];
avgJerusalemInF[0] = avgJerusalemInF[0]/avgJerusalemInF[1];


// console.log(avgVancouverInC[0])
// console.log(avgVancouverInF[0])
// console.log(avgJerusalemInC[0])
// console.log(avgJerusalemInF[0])

function getAvgTemp(city, scale) {
    let temp = 0;
    let counter = 0;
    for (let elem = 0; elem < arrays.length; elem ++) {
        if (arrays[elem]['City'] === city) {
            if (arrays[elem]['Scale'] === scale) {
                temp += arrays[elem]['Temperature'];
                counter += 1;
            }
            else {
                continue
            }
        }
        else {
                continue
        }
    }
    let average = temp / counter;
    console.log(`The average temp of ${city} is ${average} degrees ${scale}`)
}

getAvgTemp('Jerusalem', 'Fahrenheit')