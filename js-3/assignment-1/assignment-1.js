"use strict";
const numbers = [];

for (let i=0; i<=4; i++) {
    const number = parseFloat(prompt("Enter a number: "))
    numbers.push(number)
}

for (let j = 4; j >=0; j--) {
    console.log(numbers[j])
}
