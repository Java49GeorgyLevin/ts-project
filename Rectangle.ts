import { Shape } from "./ShapeInterface";

export class Rectangle implements Shape {
    constructor (
            private width: number, private length: number) {
        };

    getPerimeter(): number {
        return (this.width + this.length) * 2;    
    }
    getSquare(): number {
        return this.width * this.length;    
    }
}