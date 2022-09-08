var replace1 = /** @class */ (function () {
    function replace1() {
        this.list1 = ['a', 'b', 'c', 'd', 'e'];
        this.list2 = [1, 2, 3];
        // list=this.list1.map(re(val){val.replace(/,/g)})
    }
    replace1.prototype.re = function (val) {
        var index = this.list1.indexOf(val);
        var list3 = this.list1.splice(index, 1, this.list2);
        // const list3=this.list1.replace(this.list2,[1,2,3])
        console.log(this.list1);
    };
    return replace1;
}());
var r1 = new replace1;
r1.re('b');
