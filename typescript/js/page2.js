// Create an arrow function that takes an object
//  with default values. Here're the interface and
// expected results.
var c1 = /** @class */ (function () {
    function c1() {
        this.firstParam = 'defaultfirst';
        this.secondParam = 'defaultsecond';
    }
    c1.prototype.myfunc = function (firstParam, secondParam) {
        if (firstParam === void 0) { firstParam = 'defaultfirst'; }
        console.log("inside myfunc");
        console.log("".concat(firstParam));
        console.log("".concat(secondParam));
    };
    return c1;
}());
var obj = new c1;
obj.myfunc('', 'first');
