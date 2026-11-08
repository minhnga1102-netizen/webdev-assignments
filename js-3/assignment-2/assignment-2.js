"use strict";

const number = parseInt(prompt("Enter the number of participants: "))
const names = [];
for (let i = 0; i < number; i++) {
    const name = prompt(`Enter the name of participant ${i+1}: `)
    names.push(name)
}
names.sort((a,b)=>a.localeCompare(b));

let list = `<ol>`;
for (let j = 0; j< number; j++) {
    list += `<li>${names[j]}</li>`;
}
list += `</ol>`
document.querySelector("#target").innerHTML = list;
