"use strict";

const button = document.querySelector("#start");
function calculate () {
    let result;
    const value = document.querySelector("#calculation").value;
    if (value.includes("+")) {
        const numbers = value.split("+");
        result = Number(numbers[0]) + Number(numbers [1]);
    }
    else if (value.includes("-")) {
        const numbers = value.split("-");
        result = Number(numbers[0]) - Number(numbers [1]);
    }
    else if (value.includes("*")) {
        const numbers = value.split("*");
        result = Number(numbers[0]) * Number(numbers [1]);
    }
    else if (value.includes("/")) {
        const numbers = value.split("/");
        result = Number(numbers[0]) / Number(numbers [1]);
    }
    
    const resultElement = document.querySelector("#result")
    resultElement.innerText = result;
}
button.addEventListener("click", calculate);