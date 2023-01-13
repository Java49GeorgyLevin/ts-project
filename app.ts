import { CipherDecifer } from "./CipherDecipher";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";
import { Shape } from "./ShapeInterface";
import { ShapesContainer } from "./ShapesContainer";
import { Square } from "./Square";

const minAscii: number = ' '.charCodeAt(0);
const maxAscii: number = '~'.charCodeAt(0);
const shift: number = 120;

const cipherDecipher: CipherDecifer = new CipherDecifer(minAscii, maxAscii, shift);
console.log(cipherDecipher.shiftCipher("abc"));
console.log(cipherDecipher.shiftDecipher("z{|"));

const arShapes: ShapesContainer = new ShapesContainer([
    new Rectangle(2, 3),
    new Square(4),
    new Square(4),
    new Circle(3),
    new ShapesContainer([new ShapesContainer([new Square(10),new Square(4)]), new Rectangle(6, 4)])
]);

console.log(arShapes);
console.log(arShapes.getPerimeter());
console.log(arShapes.getSquare());