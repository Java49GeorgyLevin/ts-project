"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CipherDecifer = void 0;
class CipherDecifer {
    constructor(minCode, maxCode, shift) {
        this.minCode = minCode;
        this.maxCode = maxCode;
        this.shift = shift;
        this.nCodes = maxCode - minCode + 1;
    }
    shiftCipher(str) {
        return this.cipherDecipher(str, this.mapperCipher.bind(this));
    }
    shiftDecipher(str) {
        return this.cipherDecipher(str, this.mapperDecipher.bind(this));
    }
    cipherDecipher(str, mapperFun) {
        const arStr = Array.from(str);
        const arRes = arStr.map(symb => {
            let res = symb;
            if (symb.charCodeAt(0) <= this.maxCode && symb.charCodeAt(0) >= this.minCode) {
                res = mapperFun(symb);
            }
            return res;
        });
        return arRes.join('');
    }
    mapperCipher(symb) {
        const actualShift = (symb.charCodeAt(0) - this.minCode + this.shift) % this.nCodes;
        return String.fromCharCode(this.minCode + actualShift);
    }
    mapperDecipher(symb) {
        const actualShift = (this.maxCode - symb.charCodeAt(0) + this.shift) % this.nCodes;
        return String.fromCharCode(this.maxCode - actualShift);
    }
}
exports.CipherDecifer = CipherDecifer;
//# sourceMappingURL=CipherDecipher.js.map