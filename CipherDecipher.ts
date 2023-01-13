type MapperFun = (symb: string) => string;

export class CipherDecifer {
    nCodes: number;
    constructor(private minCode: number, private maxCode: number, private shift: number){
        this.nCodes = maxCode - minCode + 1;
    }
    shiftCipher(str: string): string {
        return this.cipherDecipher(str, this.mapperCipher.bind(this));
    }
    shiftDecipher(str: string): string {
        return this.cipherDecipher(str, this.mapperDecipher.bind(this));
    }
    private cipherDecipher(str: string,
     mapperFun: MapperFun): string {
        const arStr: Array<string> = Array.from(str);
        const arRes: Array<string> = arStr.map(symb => {
            let res: string = symb;
            if (symb.charCodeAt(0) <= this.maxCode && symb.charCodeAt(0) >= this.minCode) {
                res = mapperFun(symb);
            }
            return res;
        })
        return arRes.join('');
     }
     private mapperCipher(symb: string): string {
        const actualShift: number = (symb.charCodeAt(0) - this.minCode + this.shift) % this.nCodes;
        return String.fromCharCode(this.minCode + actualShift);
     }
     private mapperDecipher(symb: string): string {
        const actualShift: number = (this.maxCode - symb.charCodeAt(0) + this.shift) % this.nCodes;
        return String.fromCharCode(this.maxCode - actualShift);
     }
}