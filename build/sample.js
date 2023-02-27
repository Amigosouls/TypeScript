"use strict";
class Employee {
    getEmpDetails(empname, empid, empdesignation, empsalary, empproject) {
        this.empname = empname;
        this.empid = empid;
        this.empdesignation = empdesignation;
        this.empsalary = empsalary;
        this.empproject = empproject;
    }
    displayEmpDetails() {
        let result = ["Employee Name:", this.empname, "Employee ID:", this.empid, "Employee Designation:", this.empdesignation, "Employee Salary:", this.empsalary, "Employee Project:", this.empproject];
        let str = result.toString();
        console.log();
    }
}
let empObj = new Employee();
empObj.getEmpDetails("Arun", 23415, "Designer", 6000, "HTML");
empObj.displayEmpDetails();
