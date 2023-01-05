"use strict";
// for(let i = 0; i < 3; i++) {
//     setTimeout(()=> console.log(i));
// }
// let a = 10;
// console.log(`a = ${a}`)
//variables
var hello = "world";
var vasya = "Vasya";
var b = 10;
var c;
c = "10";
function getRandomNumber(min, max) {
    return Math.floor(min + Math.random() * (max - min + 1));
}
//HW #30
function shiftCipher(str, shift) {
    if (shift === void 0) { shift = 1; }
    //TODO
    //for each lower case letter (a-z) you should 
    //perform code ASCII on a given shift (add)
    //shift should be in cycle of lower case letters
    // code ASCII 'z' + 2 = code ASCII 'b'
    //examples:
    //shiftCipher("abz.", 3) => "dec."
    return "";
}
function shiftDecipher(str, shift) {
    if (shift === void 0) { shift = 1; }
    //TODO
    //for each lower case letter (a-z) you should 
    //perform code ASCII on a given shift (subtract)
    //shift should be in cycle of lower case letters
    // code ASCII 'z' - 2 = code ASCII 'x'
    //examples:
    //shiftCipher("dec.", 3) => "abz."
    return "";
}
//# sourceMappingURL=app.js.map