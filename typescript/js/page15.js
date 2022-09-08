function function1(fname1, mname, lname) {
    var fn = fname1.charAt(0).toUpperCase() + fname1.substring(1);
    var mn = mname.charAt(0).toUpperCase() + mname.substring(1);
    var ln = lname.charAt(0).toUpperCase() + lname.substring(1);
    console.log(fn, mn, ln);
}
var fname1 = prompt("enter your fname");
var mname = prompt('middle name');
var lname = prompt('last name');
function1(fname1, mname, lname);
