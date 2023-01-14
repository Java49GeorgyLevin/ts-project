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
        const unqeEmployees : Array<Employee> = this._arEmployees.filter((empl : Employee) => !empl.id);
        return unqeEmployees.length == this._arEmployees.length ? false : true;
    }
    getEmployee(id : number) : Employee | null {
        const employee : Employee = this._arEmployees.filter((empl : Employee) => empl.id)[0];
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
