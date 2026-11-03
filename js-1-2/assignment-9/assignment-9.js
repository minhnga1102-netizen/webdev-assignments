

"use strict";

const number = parseInt(prompt("Enter an integer number: "))

let isPrime = true; 

if (number <=1) {
    isPrime = false;
}
for (let divisor = 2; divisor<number; divisor++) {
    if (number % divisor === 0) {
        isPrime = false;
        break
    }
}

if (isPrime) {
    document.querySelector("#target").innerHTML = `${number} is a prime number.`
} else {
    document.querySelector("#target").innerHTML = `${number} is not a prime number.`
}