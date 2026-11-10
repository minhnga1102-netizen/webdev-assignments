"use strict";
const target = document.querySelector("#target");
const p = document.querySelector("#trigger");
function hover () {
    target.src = "img/picB.jpg";
}
function back () {
    target.src = "img/picA.jpg";
}
p.addEventListener("mouseenter",hover);
p.addEventListener("mouseleave",back);