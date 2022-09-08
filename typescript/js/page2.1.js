var myClass = /** @class */ (function () {
    function myClass(firstParam, secondParam) {
        if (firstParam === void 0) { firstParam = 'defaultfirst'; }
        if (secondParam === void 0) { secondParam = 'defaultsecond'; }
        var _this = this;
        this.myFunc = function (object) {
            if (object) {
                console.log("".concat(object === null || object === void 0 ? void 0 : object.firstParam, " , ").concat(object === null || object === void 0 ? void 0 : object.secondParam));
            }
            else {
                console.log("".concat(_this.firstParam, " , ").concat(_this.secondParam));
            }
        };
        this.firstParam = firstParam;
        this.secondParam = secondParam;
    }
    return myClass;
}());
// const obj1 = new myClass();
var new_obj = new myClass();
// new_obj.firstParam ='first';
// new_obj.secondParam = 'second';
// new_obj.myFunc(new_obj)
new_obj.myFunc();
// firstParam:string,secondParam:string
