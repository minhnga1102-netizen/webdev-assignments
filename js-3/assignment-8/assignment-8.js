"use strict";

const names = ["Johnny", "DeeDee", "Joey", "Mark"];

function concat (array){
    let result = "";
    for (const name of array) {
        result += name;
    }
    return result;
}
document.querySelector("#target").innerHTML = concat(names);