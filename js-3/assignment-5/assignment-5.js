"use strict";
const numbers = [];
let number = parseFloat(prompt("Enter a number: "))

while (!numbers.includes(number)) {
    numbers.push(number);
    number = parseFloat(prompt("Enter a number: "))
}
console.log(`The number ${number} has already been entered.`)

numbers.sort((a,b)=>a-b);
for(const n of numbers) {console.log(n);}

 