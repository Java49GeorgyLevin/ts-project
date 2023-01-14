import { Employee } from "./Employee";
import { WageEmployee } from "./WageEmployee";
import { SalesePerson } from "./SalesePerson";
import { Company } from "./Company";

 const wEmpl1: WageEmployee = new WageEmployee(123, "Vasya", 2000, "QA",
 10000, 100,50);
 const wEmpl2: WageEmployee = new WageEmployee(234, "Petya", 2001, "FullStack",
 12000, 200,100);
 const sEmpl1: SalesePerson = new SalesePerson(1234, "Asya", 2000, "QA",
 10000, 100, 50, 100, 10);
 const sEmpl2: SalesePerson = new SalesePerson(2345, "Etya", 2001, "FullStack",
 12000, 200,100, 200, 20);
 const company : Company = new Company([]);
 company.addEmployee(wEmpl1);
 company.addEmployee(wEmpl2);
 company.addEmployee(sEmpl1);
 company.addEmployee(sEmpl2);
 console.log(company);
 console.log(company.getEmployee(2345));
 console.log(company.getEmployeeBySalary(9000, 11000));
 company.removeEmployee(1234);
 console.log(company);
 const budget : number = company.computeBudget();
 console.log(budget);
