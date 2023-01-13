"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
class Rectangle {
    constructor(width, length) {
        this.width = width;
        this.length = length;
    }
    ;
    getPerimeter() {
        return (this.width + this.length) * 2;
    }
    getSquare() {
        return this.width * this.length;
    }
}
exports.Rectangle = Rectangle;
//# sourceMappingURL=Rectangle.js.map