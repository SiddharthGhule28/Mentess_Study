function interchange(arr) {
    var _a;
    _a = [arr[arr.length - 1], arr[0]], arr[0] = _a[0], arr[arr.length - 1] = _a[1];
    return arr;
}
console.log(interchange([1, 2, 3, 4]));
