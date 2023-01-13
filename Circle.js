"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
const pi = Math.PI;
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    ;
    getPerimeter() {
        return 2 * pi * this.radius;
    }
    getSquare() {
        return pi * Math.pow(this.radius, 2);
    }
}
exports.Circle = Circle;
//# sourceMappingURL=Circle.js.map