"use strict";

const year = parseInt(prompt("Enter a year: "))

let isLeapYear;

if (year%400 === 0) {
    isLeapYear = true;
} else if (year%100 === 0) {
    isLeapYear = false;
} else if (year% 4 === 0) {
    isLeapYear = true;
} else {
    isLeapYear = false;
}

if (isLeapYear) {
    document.querySelector("#target").innerHTML=`${year} is a leap year.`
} else {
    document.querySelector("#target").innerHTML=`${year} is not a leap year.`
}