// Complete the following MyArray class in TypeScript that can handle
// string and number only to get
// the expected results
// Barebone class definitionc
var MyArray = /** @class */ (function () {
    function MyArray() {
        this.collection = [];
    }
    MyArray.prototype.add = function (value) {
        this.collection.push(value);
    };
    MyArray.prototype.remove = function (value) {
        var index = this.collection.indexOf(value);
        return this.collection.splice(index, 1);
    };
    MyArray.prototype.getValues = function () {
        return this.collection;
    };
    return MyArray;
}());
var stringAry = new MyArray();
//pushing to the array
stringAry.add('aaa');
stringAry.add('bbb');
stringAry.add('ccc');
// remove the element bbb from array
stringAry.remove('bbb');
//print the  value of string array
console.log(stringAry.getValues());
var numberAry = new MyArray();
numberAry.add(1);
numberAry.add(2);
numberAry.add(3);
numberAry.remove(2);
console.log(numberAry.getValues());
var booleanAry = new MyArray();
// numberAry.add(true)
// numberAry.add(false)
// console.log(booleanAry.getValues()) 
