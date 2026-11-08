"use strict";

let numbers = [];
let number = parseFloat(prompt("Enter a number (0 to stop): "))
while (number !== 0) {
    numbers.push(number);
    number = parseFloat(prompt("Enter a number (0 to stop): "))
}
numbers.sort((a,b)=>b-a);
console.log(numbers)