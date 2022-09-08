var tuple1 = [10, 20, 30, 40];
function index() {
    var sum = 0;
    for (var i = 0; i < tuple1.length; i++) {
        sum += tuple1[i];
    }
    return sum;
}
console.log(index());
