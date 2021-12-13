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
 * 4. Instead of outputting all the values as you come across them, build an
 *    array containing all the values, and then log the whole array at the end.
 *    Do this for both 2. and 3.
 * 5. Get the average temperatures for Vancouver and Jerusalem in both Celsius
 *    and Fahrenheit and output them to the console.
 * 
 * Finally, one last one to bring every thing together! You may want to write
 * this function in a new file, or copy this file so you can rearrange and
 * refactor the existing code from the questions above into your function.
 * 
 * 6. Write a function that will return a chosen city's average temperature in
 *    either fahrenheit or celsius defined by two parameters as shown in the
 *    code below.
 * 
 * This will be challening and will test you on many of thie things you have
 * learned so far!
 *
 */

let avgTempInCity = getAvgTemp("Vancouver", "C");
console.log(avgTempInCity);