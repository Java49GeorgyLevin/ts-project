"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesePerson = void 0;
const WageEmployee_1 = require("./WageEmployee");
class SalesePerson extends WageEmployee_1.WageEmployee {
    constructor(id, name, birthYear, department, basicSalary, wage, hours, _salesValue, _percentValue) {
        super(id, name, birthYear, department, basicSalary, wage, hours);
        this._salesValue = _salesValue;
        this._percentValue = _percentValue;
    }
    get salesValue() {
        return this._salesValue;
    }
    set salesValue(salesValue) {
        if (salesValue < 0) {
            throw "Nothing to add";
        }
        this._salesValue = salesValue;
    }
    get percentValue() {
        return this._percentValue;
    }
    set percentValue(percentValue) {
        if (percentValue <= 0) {
            throw "Nothing to calculate";
        }
        this._percentValue = percentValue;
    }
    computeSalary() {
        return super.computeSalary() + this._salesValue * this._percentValue / 100;
    }
}
exports.SalesePerson = SalesePerson;
//# sourceMappingURL=SalesePerson.js.map