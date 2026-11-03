"use strict";
const answer = confirm("Should I calculate the square root?")
// confirm () return True/False
// if answer is OK/True
if (answer) {
    const number = parseFloat(prompt("Enter the number: "))
    if (number<0) {
        document.querySelector("#target").innerHTML = `The square root of a negative number is not defined.`
    } else {
        const result = Math.sqrt(number);
        document.querySelector("#target").innerHTML = `The square root of ${number} is ${result}.`
    }
}
// if answer is Cancel/False
else {
    document.querySelector("#target").innerHTML = `The square root is not calculated.`
}