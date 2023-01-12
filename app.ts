import { CipherDecifer } from "./CipherDecipher";

const minAscii: number = ' '.charCodeAt(0);
const maxAscii: number = '~'.charCodeAt(0);
const shift: number = 120;

const cipherDecipher: CipherDecifer = new CipherDecifer(minAscii, maxAscii, shift);
console.log(cipherDecipher.shiftCipher("abc"));
console.log(cipherDecipher.shiftDecipher("z{|"));
console.log('a'.charCodeAt(0));
