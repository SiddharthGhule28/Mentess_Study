var factorial = /** @class */ (function () {
    function factorial() {
    }
    factorial.prototype.fact = function (n) {
        if (n == 0)
            return 1;
        return n * this.fact(n - 1);
    };
    return factorial;
}());
var result = new factorial;
for (var num = 1; num <= 20; num++) {
    var res = result.fact(num);
    console.log(res);
}
