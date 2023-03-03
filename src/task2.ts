class Course{
    courseId :string | number;
    courseName:string;
    constructor(courseId:string|number, courseName:string){
        this.courseId = courseId;
        this.courseName=courseName;
    }
    public courseDetails():void{
        console.log(`Course Details......\n Course ID:${this.courseId} \n Course Name:${this.courseName} \n`);
    }
}

class Employee extends Course{
    empId :string|number;
    empName : string;
    empDesignation : string;
    constructor(courseId:string|number, courseName:string,empId :string|number,empName : string,empDesignation : string){
        super(courseId,courseName)
        this.empId = empId;
        this.empName = empName;
        this.empDesignation = empDesignation;
    }
    public employeeDetails():void{
        console.log(`Employee Details....\n Employee ID:${this.empId} \n Employee Name:${this.empName} \n Employee Designation:${this.empDesignation}\n`);
    }
}
class Admin extends Employee{
    adminId : number|string;
    adminName : string;
    constructor(courseId:string|number, courseName:string,empId :string|number,empName : string,empDesignation : string, adminid:string|number, adminName:string){
    super(courseId,courseName,empId,empName,empDesignation)
    this.adminId=adminid;
    this.adminName=adminName;
    }
    public adminDetails():void{
        this.courseDetails();
        this.employeeDetails();
        console.log(`Admin Details......\n Admin Id:${this.adminId}\n Admin Name:${this.adminName}`);
    }
}
let obj = new Admin("1356cs52","UI design",10,"Peter England","Employee","01AD100","Karthick");
obj.adminDetails();

abstract class ElectricityBill{
    public rate : number;
    public units : number;
    constructor(rate:number,units:number){
        this.rate= rate;
        this.units=units;
    }
    abstract billDetails():void;
}

class Domestic extends ElectricityBill{
    public units:number;
    public rate=5;
    constructor(uni:number,rate:number,units:number){
        super(rate,units);
        this.units =uni;
    }
    billDetails(): void {
        console.log()
    }


}