"use strict";

const button = document.querySelector("#start");
function calculate () {
    const operation = document.querySelector("#operation").value;
    const num1 = Number(document.querySelector("#num1").value);
    const num2 = Number(document.querySelector("#num2").value);
    let result; 
    if (operation === "add") {
        result =  num1 + num2;
    }
    else if (operation === "sub") {
        result =  num1 - num2;
    }
    else if (operation === "multi") {
        result =  num1 * num2;
    }
    else if (operation === "div") {
        result =  num1 / num2;
    }
    const resultElement = document.querySelector("#result");
    resultElement.innerText=result;
}

button.addEventListener("click",calculate);