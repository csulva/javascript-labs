/**
 * Create these variables containing strings:
 *      1. One with your name.
 *      2. One with a greeting like "Good day to you".
 *      3. One with a friend's name.
 *      4. One with a family member's name.
 *      5. One with the number of today's date.
 *      6. One with the name of today's month.
 *      7. One with the number of today's year.
 *      8. One with your age.
 *
 * Using the variables created, with both concatenation and interpolation use
 * console.log to output:
 *      1. A greeting to your friend
 *      2. A greeting to your family member
 *      3. A greeting to your friend stating today's date and month
 *      4. A sentence that says something along the lines of "In 20 years I will
 *         be XXX years old". For this, don't use any more variables. That is,
 *         make your script calculate the age with the variable you already have
 *         that contains the year.
 *
 * Do all of these with both concatenation and interpolation. Which do you
 * prefer? Its good to get practice with both because there are some situations
 * in which interpolation won't work, seeing as it's a relatively new method and
 * support for it is not everywhere.
 */

let name = 'Chris';
let greeting = 'Hello there';
let friend = 'Tim';
let familyMember = 'Tony';
let day = 10;
let month = 2;
let year = 2022;
let age = 29;

console.log(greeting + " " + friend)
console.log(`${greeting} ${friend}`)
console.log(greeting + " " + familyMember)
console.log(`${greeting} ${familyMember}`)
console.log(greeting + " " + friend + ', it is the ' + day + ' of ' + month + ' month.')
console.log(`${greeting} ${friend}, it is the ${day} day of ${month} month.`)
console.log('In ' + year + ' years, I will be ' + (age + year))
console.log(`In ${year} years, I will be ${age + year}`)
