"use strict";
let names = [];

for (let i = 0; i < 6; i++) {
    const name = prompt(`Enter the name of dog ${i+1}`);
    names.push(name);
}
names.sort((a,b)=>a.localeCompare(b));
names.reverse()

let list = `<ul>`;
for (let j = 0; j <6; j++) {
    list += `<li>${names[j]}</li>`;
}
list += `</ul>`;
document.querySelector("#target").innerHTML = list;