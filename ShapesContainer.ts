import { Shape } from "./ShapeInterface";

export class ShapesContainer implements Shape {
    constructor(private arShapes : Array<Shape>) {
        
    }
    getPerimeter(): number {
        return this.arShapes.reduce((res, cur) =>
            res + cur.getPerimeter(), 0
        )
    }
    getSquare(): number {
        return this.arShapes.reduce((res, cur) =>
            res + cur.getSquare(), 0)
    }
}