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
var Bank_Acc = /** @class */ (function () {
    function Bank_Acc(id, firstName, lastName, address, phone, email, type) {
        this.collection = [];
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.phone = phone;
        this.email = email;
        this.type = type;
    }
    Bank_Acc.prototype.createAccount = function (id, firstName, lastName, address, phone, email, type) {
        this.collection.push(id, firstName, lastName, address, phone, email, type);
    };
    Bank_Acc.prototype.updateAccount = function (id) {
        var index = this.collection.indexOf(id);
        this.collection.splice(index, 1, 10);
    };
    Bank_Acc.prototype.deleteAccount = function (id) {
        var index = this.collection.indexOf(id);
        this.collection.splice(index, 1);
    };
    return Bank_Acc;
}());
var Transaction = /** @class */ (function (_super) {
    __extends(Transaction, _super);
    function Transaction() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.date = ' ';
        _this.trans_type = true; // True Means success and False means failed
        _this.amount = 0;
        _this.customerId = _this.id;
        _this.trans = [];
        return _this;
    }
    Transaction.prototype.depositFunds = function (firstName, date, trans_type, amount, customerId) {
        this.trans.push(firstName, date, trans_type, amount, customerId);
    };
    Transaction.prototype.withdrawFunds = function (amount) {
        var index = this.trans.indexOf(amount);
        this.trans.splice(index);
    };
    return Transaction;
}(Bank_Acc));
var b1 = new Bank_Acc(1, 'suraj', 'dalvi', 'pune', 789452487, 'suraj@gmail.com', 'Savings');
console.log(b1);
var d1 = new Transaction(1, 'suraj', 'dalvi', 'pune', 789452487, 'suraj@gmail.com', 'Savings');
console.log(d1);
d1.depositFunds('suraj', '29/1/2021', true, 750000, 1);
console.log(d1.trans);
d1.withdrawFunds(50000);
console.log(d1.trans);
