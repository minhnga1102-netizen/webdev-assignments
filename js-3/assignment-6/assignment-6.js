"use strict";

function diceRoll () {
    return Math.floor(Math.random()*6+1);
}

const list = document.querySelector("ul");
let diceNumber;

do {
    diceNumber = diceRoll();
    list.innerHTML+= `<li>${diceNumber}</li>`
} while (diceNumber !== 6)




