"use strict";
const codeA = "a".charCodeAt(0);
const codeZ = "z".charCodeAt(0);
function shiftCipher(str, shift = 1) {
    let strOut = "";
    shift %= (codeZ - codeA + 1);
    for (let i = 0; i < str.length; i++) {
        let cc = str.charCodeAt(i);
        if (cc < codeA || cc > codeZ) {
            strOut += str[i];
        }
        else {
            cc += shift;
            if (cc > codeZ) {
                cc -= codeZ;
                cc += codeA - 1;
            }
            strOut += String.fromCharCode(cc);
        }
    }
    return strOut;
}
function shiftDecipher(str, shift = 1) {
    let strOut = "";
    shift %= (codeZ - codeA + 1);
    for (let i = 0; i < str.length; i++) {
        let cc = str.charCodeAt(i);
        if (cc < codeA || cc > codeZ) {
            strOut += str[i];
        }
        else {
            cc -= shift;
            if (cc < codeA) {
                cc += codeZ + 1;
                cc -= codeA;
            }
            strOut += String.fromCharCode(cc);
        }
    }
    return strOut;
}
let testString = "abz";
let shift = 27;
console.log(shiftCipher(testString, shift));
console.log(shiftDecipher("bca", 27));
testString = "abz";
shift = 1000;
console.log(shiftCipher(testString, shift));
console.log(shiftDecipher("mnl", 1000));
//# sourceMappingURL=app.js.map