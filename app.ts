const codeA = "a".charCodeAt(0);
const codeZ = "z".charCodeAt(0);
const aZ = codeZ - codeA + 1;

function shiftCipher(str: string, shift: number = 1): string {
    shift %= aZ;
    return shiftDeshift(str,shift);
}

function shiftDecipher(str: string, shift: number = 1): string {
    shift %= aZ;
    shift = -shift;
    return shiftDeshift(str,shift);
}

function shiftDeshift(str: string, shift: number = 1): string {
    let strOut: string = "";
    for(let i = 0; i < str.length; i++) {
        let cc = str.charCodeAt(i);
        if(cc < codeA || cc > codeZ) {
            strOut += str[i];
        } else {
            cc += shift;
            if(cc > codeZ) {
                cc -= aZ;
            } else if(cc < codeA) {
                cc += aZ;
            }
            strOut += String.fromCharCode(cc);
        }
    }
    return strOut;
}

let testString: string = "Z9abz";
let shift: number = 27;
console.log(shiftCipher(testString, shift));
console.log(shiftDecipher("Z9bca", 27));
testString = "Z9abz";
shift = 1000;
console.log(shiftCipher(testString, shift));
console.log(shiftDecipher("Z9mnl", 1000));
