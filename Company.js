"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Company = void 0;
class Company {
    constructor(_arEmployees) {
        this._arEmployees = _arEmployees;
    }
    ;
    addEmployee(employee) {
        if (!this._arEmployees.some(empl => employee.id === empl.id)) {
            this._arEmployees.push(employee);
        }
    }
    removeEmployee(id) {
        const unqeEmployees = this._arEmployees.filter(empl => !empl.id);
        return unqeEmployees.length == this._arEmployees.length ? false : true;
    }
    getEmployee(id) {
        const employee = this._arEmployees.filter(empl => empl.id)[0];
        return employee !== null ? employee : null;
    }
    getEmployeeBySalary(salaryFrom, salaryTo = salaryFrom) {
        const employees = this._arEmployees.filter(empl => empl.basicSalary >= salaryFrom &&
            empl.basicSalary <= salaryTo);
        return employees.sort((a, b) => b.birthYear - a.birthYear);
    }
    computeBudget() {
        // let budget : number = 0;
        const employees = this._arEmployees;
        return employees.reduce((res, empl) => res + empl.basicSalary, 0);
        // return budget;
    }
}
exports.Company = Company;
//# sourceMappingURL=Company.js.map