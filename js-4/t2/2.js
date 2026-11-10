"use strict";

const ul = document.querySelector("#target");
const li1 = document.createElement("li");
const li2 = document.createElement("li");
const li3 = document.createElement("li");


li1.innerText = "First item";
li2.innerText = "Second item";
li3.innerText = "Third item";
li2.className = "my-item";

ul.appendChild(li1)
ul.appendChild(li2)
ul.appendChild(li3)
