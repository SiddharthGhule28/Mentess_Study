function interchange(arr:any) {
    [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
    return arra;
}
console.log(interchange([1, 2, 3, 4]));