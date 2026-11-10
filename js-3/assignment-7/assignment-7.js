"use strict";

const sides = parseInt(prompt("Enter the number of dice: "));
function diceRoll (sides) {
    return Math.floor(Math.random()*sides +1);
}

const list = document.querySelector("ul");
let roll;

do {
    roll = diceRoll(sides);
    list.innerHTML += `<li>${roll}</li>`
} while (roll !== sides)