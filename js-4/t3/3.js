'use strict';
const names = ['John', 'Paul', 'Jones'];

names.forEach(function(name){
    document.querySelector("#target").innerHTML+=`<li>${name}</li>`
})