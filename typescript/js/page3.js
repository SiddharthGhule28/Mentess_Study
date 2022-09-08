var errorResponse = function () {
    return { valid: false, error: 'error occurred' };
};
var validator = (function () { return errorResponse(); });
console.log(validator().valid);
//=> false
console.log(validator().error);
