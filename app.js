"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CipherDecipher_1 = require("./CipherDecipher");
const Circle_1 = require("./Circle");
const Rectangle_1 = require("./Rectangle");
const ShapesContainer_1 = require("./ShapesContainer");
const Square_1 = require("./Square");
const minAscii = ' '.charCodeAt(0);
const maxAscii = '~'.charCodeAt(0);
const shift = 120;
const cipherDecipher = new CipherDecipher_1.CipherDecifer(minAscii, maxAscii, shift);
console.log(cipherDecipher.shiftCipher("abc"));
console.log(cipherDecipher.shiftDecipher("z{|"));
const arShapes = new ShapesContainer_1.ShapesContainer([
    new Rectangle_1.Rectangle(2, 3),
    new Square_1.Square(4),
    new Square_1.Square(4),
    new Circle_1.Circle(3),
    new ShapesContainer_1.ShapesContainer([new ShapesContainer_1.ShapesContainer([new Square_1.Square(10), new Square_1.Square(4)]), new Rectangle_1.Rectangle(6, 4)])
]);
console.log(arShapes);
console.log(arShapes.getPerimeter());
console.log(arShapes.getSquare());
//# sourceMappingURL=app.js.map