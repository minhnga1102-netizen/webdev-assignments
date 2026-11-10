"use strict";
const numbers = [2,7,4];

function even (array) {
    let evenNumbers = [];
    for (const number of array) {
        if (number % 2 === 0) {
            evenNumbers.push(number)
        }
    }
    return evenNumbers;
}
console.log(numbers)
console.log(even(numbers))