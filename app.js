"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CipherDecipher_1 = require("./CipherDecipher");
const minAscii = ' '.charCodeAt(0);
const maxAscii = '~'.charCodeAt(0);
const shift = 120;
const cipherDecipher = new CipherDecipher_1.CipherDecifer(minAscii, maxAscii, shift);
console.log(cipherDecipher.shiftCipher("abc"));
console.log(cipherDecipher.shiftDecipher("z{|"));
console.log('a'.charCodeAt(0));
//# sourceMappingURL=app.js.map