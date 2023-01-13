"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Square = void 0;
const Rectangle_1 = require("./Rectangle");
class Square extends Rectangle_1.Rectangle {
    constructor(side) {
        super(side, side);
        this.side = side;
    }
}
exports.Square = Square;
//# sourceMappingURL=Square.js.map