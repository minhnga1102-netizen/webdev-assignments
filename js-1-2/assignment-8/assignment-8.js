"use strict";
const startYear = parseInt(prompt("Enter the start year: "))
const endYear = parseInt(prompt("Enter the end year: "))

let list = '';

for (let year = startYear; year <= endYear; year ++) {
    let isLeapYear;
    if (year % 400 === 0) {
        isLeapYear = true;
    } else if (year % 100 === 0) {
        isLeapYear = false;
    } else if (year % 4 === 0) {
        isLeapYear = true;
    } else isLeapYear = false;

    if (isLeapYear) {
        list += `<li>${year}</li>`
    }
}

document.querySelector("#target").innerHTML = list;
