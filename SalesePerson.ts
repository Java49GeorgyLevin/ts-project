import { WageEmployee } from "./WageEmployee";

export class SalesePerson extends WageEmployee {
    constructor(id: number, name: string, birthYear: number, department:string,
        basicSalary: number, wage: number, hours: number,
        private _salesValue : number, private _percentValue : number) {
           super(id, name, birthYear, department, basicSalary, wage, hours);
   }
   get salesValue() {
    return this._salesValue
   }
   set salesValue(salesValue : number) {
    if(salesValue < 0) {
    throw "Nothing to add"}
    this._salesValue = salesValue;
   }
   get percentValue() {
    return this._percentValue
   }
   set percentValue(percentValue : number) {
    if(percentValue <= 0) {
        throw "Nothing to calculate"
    }
    this._percentValue = percentValue;
   }
   computeSalary() : number {
    return super.computeSalary() + this._salesValue * this._percentValue / 100;
   }
}