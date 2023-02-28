// class Employee {
//     public empname: string;
//     public empid: number | string;
//     public empdesignation: string;
//     public empsalary: number;
//     empproject?: string;

//     public getEmpDetails(empname: string, empid: number, empdesignation: string, empsalary: number, empproject: string) {
//         this.empname = empname;
//         this.empid = empid;
//         this.empdesignation = empdesignation;
//         this.empsalary = empsalary;
//         this.empproject = empproject;
//     }
//     public displayEmpDetails() {
//         let result = ["Employee Name:", this.empname, "Employee ID:", this.empid, "Employee Designation:", this.empdesignation, "Employee Salary:", this.empsalary, "Employee Project:", this.empproject];
//         let str = result.toString();
//         console.log()
//     }
// }

//     let empObj = new Employee();
//     empObj.getEmpDetails("Arun", 23415, "Designer", 6000, "HTML");
//     empObj.displayEmpDetails();