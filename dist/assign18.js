"use strict";
let data = document.getElementById("demo");
let fnam = prompt("Enter your name");
if (data && fnam) {
    data.innerHTML = fnam;
}
