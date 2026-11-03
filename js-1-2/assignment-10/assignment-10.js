"use strict";

const diceCount = parseInt(prompt("Enter the number of dice: "))
const targetSum = parseInt(prompt("Enter the sum of the eye: "))

let hits = 0;
for (let i = 1; i <= 10000; i++) {
    let sum = 0;
    for (let j = 0; j<diceCount; j++) {
        sum += Math.floor(Math.random()*6)+1;
    }
    if (sum===targetSum) {hits ++}
}

const probability = (hits/10000)*100;
document.querySelector("#target").innerHTML = `Probability to get sum ${targetSum} with ${diceCount} dice is ${probability.toFixed(2)}%`;