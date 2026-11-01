"use strict";

const name = prompt("Enter your name: ")
const number = Math.floor(Math.random()*4)+1;

let house;
if (number === 1) {
    house = "Gryffindor"
}
if (number === 2) {
    house = "Slytherin"
}
if (number === 3) {
    house = "Hufflepuff"
}
if (number === 4) {
    house = "Ravenclaw"
}

document.querySelector("#target").innerHTML = `${name}, you are ${house}.`