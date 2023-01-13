// import { Shape } from "./ShapeInterface";
// import { Rectangle } from "./Rectangle";
// import { Square } from "./Square";
// import { CipherDecipher } from "./CipherDecipher";
// import { ShapesContainer } from "./ShapesContainer";
// const shapes: ShapesContainer = new ShapesContainer ([
//     new Rectangle(3, 4),
//     new Square(5),
//     new ShapesContainer([new ShapesContainer([new Square(10),new Square(4)]),
//      new Rectangle(6, 4)])
// ]);

import { WageEmployee } from "./WageEmployee";

// const totalSquare: number = shapes.getSquare();
// console.log(totalSquare)
// // const cipherDecipher: CipherDecipher = new CipherDecipher(32, 127, 10);

// // console.log(cipherDecipher.cipher("Hello World!"));
// // console.log(cipherDecipher.decipher("Rovvy*ay|vn+"));
const employee: WageEmployee = new WageEmployee(123, "Vasya", 2000, "QA",
 10000, 100,50);
 console.log(employee.id);
 employee.basicSalary = 60000;