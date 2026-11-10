"use strict";
const form = document.querySelector("#source");
const target= document.querySelector("#target");
// evt = event object when event is happened, JS automatically truyen evt
function submit(evt){
    evt.preventDefault();
    const firstName = form.elements.firstname.value;
    const lastName = form.elements.lastname.value;
    target.innerHTML=`Your name is ${firstName} ${lastName}`;
}
form.addEventListener("submit",submit)