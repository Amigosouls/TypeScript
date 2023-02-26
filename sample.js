var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.getEmpDetails = function (empname, empid, empdesignation, empsalary, empproject) {
        this.empname = empname;
        this.empid = empid;
        this.empdesignation = empdesignation;
        this.empsalary = empsalary;
        this.empproject = empproject;
    };
    Employee.prototype.displayEmpDetails = function () {
        var result = ["Employee Name:", this.empname, "Employee ID:", this.empid, "Employee Designation:", this.empdesignation, "Employee Salary:", this.empsalary, "Employee Project:", this.empproject];
        var str = result.toString();
        document.getElementById("show").innerHTML = str;
    };
    return Employee;
}());
function showEmployee() {
    var empObj = new Employee();
    empObj.getEmpDetails("Arun", 23415, "Designer", 6000, "HTML");
    empObj.displayEmpDetails();
}
