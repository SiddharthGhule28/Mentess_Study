var Pangram = /** @class */ (function () {
    function Pangram(input) {
        this.input = input.toLowerCase();
    }
    Pangram.prototype.isPangram = function () {
        var letters = this.input.replace(/[^a-z]/g, '');
        return new Set(letters).size === 26;
    };
    return Pangram;
}());
var Pangram1 = new Pangram('A quick brown fox jumps over the lazy dog');
console.log(Pangram1.isPangram());
var Pangram2 = new Pangram('hcvcyvgdcDZcydcdhzcYDcyciowdsbjd');
console.log(Pangram2.isPangram());
