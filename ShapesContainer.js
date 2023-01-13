"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShapesContainer = void 0;
class ShapesContainer {
    constructor(arShapes) {
        this.arShapes = arShapes;
    }
    getPerimeter() {
        return this.arShapes.reduce((res, cur) => res + cur.getPerimeter(), 0);
    }
    getSquare() {
        return this.arShapes.reduce((res, cur) => res + cur.getSquare(), 0);
    }
}
exports.ShapesContainer = ShapesContainer;
//# sourceMappingURL=ShapesContainer.js.map