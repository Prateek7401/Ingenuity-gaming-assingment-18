"use strict";
function add1(...num) {
    let sum = 0;
    num.forEach(element => {
        sum = sum + element;
    });
    return sum;
}
console.log(add1(1,3,456));
