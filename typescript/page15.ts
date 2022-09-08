function function1(fname1:string,mname:string,lname:string):any
{
   const fn = fname1.charAt(0).toUpperCase()+fname1.substring(1)
   const mn=mname.charAt(0).toUpperCase()+mname.substring(1)
   const ln=lname.charAt(0).toUpperCase()+lname.substring(1)
    console.log(fn,mn,ln)
}



var fname1=prompt(`enter your fname`)
var mname=prompt('middle name')
var lname=prompt('last name')
function1( fname1 ,mname,lname)