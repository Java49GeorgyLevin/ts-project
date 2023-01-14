import { Employee } from "./Employee";
import { WageEmployee } from "./WageEmployee";
import { SalesePerson } from "./SalesePerson";

export class Company {
    constructor(private _arEmployees : Array<Employee>){

    }
    addEmployee(employee : Employee) : void {
            if(!this._arEmployees.some((empl : Employee) => employee.id === empl.id)){
            this._arEmployees.push(employee);
        }
    }
    removeEmployee(id : number) : boolean {
        const uniqeEmployees : Array<Employee> = this._arEmployees.filter((empl : Employee) => empl.id !== id);
        const change : boolean = uniqeEmployees.length == this._arEmployees.length ? false : true;
        this._arEmployees = uniqeEmployees;
        return change;

    }
    getEmployee(id : number) : Employee | null {
        const employee : Employee = this._arEmployees.filter((empl : Employee) => empl.id === id)[0];
        return employee !== null ? employee : null;
    }
    getEmployeeBySalary(salaryFrom : number, salaryTo : number = salaryFrom) : Array<Employee> {
        const employees : Array<Employee> = this._arEmployees.filter((empl : Employee) => empl.basicSalary >= salaryFrom && 
            empl.basicSalary <= salaryTo);
        return employees.sort((a : Employee, b : Employee) => b.birthYear - a.birthYear);
    }
    computeBudget() : number {
        const employees : Array<Employee> = this._arEmployees;
        return employees.reduce((res, empl) => res + empl.computeSalary(), 0)
    }
}
