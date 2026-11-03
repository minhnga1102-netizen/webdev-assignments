"use strict";
const rolls = parseInt(prompt("Enter the number of dice rolls: "))
let sum = 0;
for (let i = 1; i <= rolls; i++) {
    const random_number = Math.floor(Math.random()*6)+1;
    sum += random_number;
}
document.querySelector("#target").innerHTML = `Sum is ${sum}.`