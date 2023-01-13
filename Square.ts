import { Rectangle } from "./Rectangle";

export class Square extends Rectangle {
    constructor(private side : number) {
        super(side, side);
    }
}