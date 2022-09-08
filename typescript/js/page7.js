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
var course = /** @class */ (function () {
    function course(name, fee) {
        this.name = name;
        this.fee = fee;
    }
    course.prototype.setcourse = function (name, fee) {
        this.name = name;
        this.fee = fee;
    };
    course.prototype.getcourse = function () {
        return this.name, this.fee;
    };
    course.prototype.printdata = function () {
        console.log("name : ".concat(this.name));
        console.log("name : ".concat(this.fee));
    };
    return course;
}());
var computer = /** @class */ (function (_super) {
    __extends(computer, _super);
    function computer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = 0;
        return _this;
    }
    computer.prototype.setcomp = function (id) {
        this.id = id;
    };
    computer.prototype.getcomp = function () {
        return this.id;
    };
    computer.prototype.printcomp = function () {
        console.log("computer id  : ".concat(this.id));
    };
    return computer;
}(course));
var electronic = /** @class */ (function (_super) {
    __extends(electronic, _super);
    function electronic() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.company = '';
        return _this;
    }
    electronic.prototype.setelec = function (company) {
        this.company = company;
    };
    electronic.prototype.getelec = function () {
        return this.company;
    };
    electronic.prototype.printelec = function () {
        console.log("company of electronic  : ".concat(this.company));
    };
    return electronic;
}(course));
var p1 = new computer('hp', 90998);
var p2 = new electronic("ssd", 89908);
p1.printdata();
p1.setcomp(12);
p1.printcomp();
p2.setelec('laptop');
p2.printelec();
