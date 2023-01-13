import { Shape } from "./ShapeInterface";
const pi : number = Math.PI;

export class Circle implements Shape {
    constructor(private radius : number) {
    };
    getPerimeter(): number {
        return 2*pi*this.radius
    }
    getSquare(): number {
        return pi*Math.pow(this.radius, 2);
    }
}