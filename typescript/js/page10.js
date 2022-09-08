var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var d = {
    d: { id: 1, name1: 'suraj' }
};
console.log(d);
var roll = Number(prompt("Enter Student's Roll No"));
var S_Name = prompt("Enter name of the Student");
var C_Name = prompt("Enter the course enrolled");
var M_BEE = Number(prompt("Enter the marks obtained in BEE !"));
var M_ED = Number(prompt("Enter the marks obtained in ED !"));
var M_Cpp = Number(prompt("Enter the marks obtained in Cpp !"));
var Sport = prompt("Enter the Sports enrolled in");
var Student = /** @class */ (function () {
    function Student() {
        // main: { [id: string] : IMain; } ={}
        this.rollno = roll;
        // Data_Arr:any =[]
        this.studentName = S_Name;
        this.course = C_Name;
        this.marks = {};
    }
    Student.prototype.add = function () {
        this.marks["BEE"] = { "marks": M_BEE };
        this.marks["ED"] = { "marks": M_ED };
        this.marks["Cpp"] = { "marks": M_Cpp };
    };
    // DataArr(){
    //     const result = this.Data_Arr.push(this.studentName,this.course,this.add())
    //     return result
    // }
    // assign() {
    //     this.main[this.rollno] = { main : this.DataArr() }
    //     console.log(this.main)
    // }
    Student.prototype.str = function () {
        console.log("Roll No : ".concat(this.rollno));
        console.log("Student's Name: ".concat(this.studentName));
        console.log("Course Enrolled: ".concat(this.course));
    };
    return Student;
}());
var Sportsperson = /** @class */ (function (_super) {
    __extends(Sportsperson, _super);
    function Sportsperson() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sport = Sport;
        return _this;
    }
    Sportsperson.prototype.str = function () {
        _super.prototype.str.call(this);
        console.log("Sport Enrolled: ".concat(this.sport));
    };
    return Sportsperson;
}(Student));
var s = new Student();
// s.assign()
var sp = new Sportsperson();
sp.str();
// console.log(sp.str())
