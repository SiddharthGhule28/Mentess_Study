// Assignment
// Complete the following MyArray class in TypeScript that can handle string and number only to get
// the expected results
// Barebone class definition
// class MyArray {
//  add(value) {
//  this.collection.push(value)
//  }
//  remove(value) {}
//  getValues() {
//  return this.collection
//  }
// }
// Expected results
// const stringAry = new MyArray()
// stringAry.add('aaa')
// stringAry.add('bbb')
// stringAry.add('ccc')
// stringAry.remove('bbb')
// console.log(stringAry.getValues()) //=> [ 'aaa', 'ccc' ]
// const numberAry = new MyArray()
// numberAry.add(1)
// numberAry.add(2)
// numberAry.add(3)
// numberAry.remove(2)
// console.log(numberAry.getValues()) //=> [ 1, 3 ]
// const booleanAry = new MyArray()
// numberAry.add(true)
// numberAry.add(false) //=> You shouldn't be able to do these.

// Ans:

// class MyArray 
// {
//     collection =new Array ();
//     add(value:number|string)
//     {        
//         this.collection.push(value);
//     }
//     remove(value:number|string) 
//     {
//         const coll = this.collection.filter((v)=>{return v!=value});
//         this.collection = coll;
//     }
//     getValues() 
//     {
//         return this.collection;
//     }
// }
//     const stringAry = new MyArray()
//     stringAry.add('aaa')
//     stringAry.add('bbb')
//     stringAry.add('ccc')
//     stringAry.remove('bbb')
//     console.log(stringAry.getValues())

//     const numberAry = new MyArray()
//     numberAry.add(1)
//     numberAry.add(2)
//     numberAry.add(3)
//     numberAry.remove(2)
//     console.log(numberAry.getValues()) //=> [ 1, 3 ]
    // const booleanAry = new MyArray()
    // numberAry.add(true)
    // numberAry.add(false)

//***********************
//***********************

// Create an arrow function that takes an object with default values. Here're the interface and
// expected results.
// interface Params {
//  firstParam: string
//  secondParam: string
// }
// console.log(myFunc()) //=> { firstParam: 'defaultFirst', secondParam:
// 'defaultSecond' } // The default values are returned when args not given.
// console.log(myFunc({ firstParam: 'first', secondParam: 'second' })) //=> {
// firstParam: 'first', secondParam: 'second' } // The given values are
// returned when args given.
// console.log(myFunc({ firstParam: 'first' })) //=> { firstParam: 'first',
// secondParam: 'defaultSecond' }
// console.log(myFunc({ secondParam: 'second' })) //=> { firstParam:
// 'defaultFirst', secondParam: 'second' }

//Ans:

// interface Params
//  {
//     firstParam ?: string;
//     secondParam ?: string;
//   } 
// const myFunc = (t: Params): { firstParam: string; secondParam: string } => {
//     return {
//       firstParam: t.firstParam || "defaultFirst",
//       secondParam: t.secondParam || "defaultSecond"
//     };
//   };
//   console.log(myFunc({}))
//   console.log(myFunc({ firstParam: 'first', secondParam: 'second' }))
//   console.log(myFunc({ firstParam: 'first' }))
//   console.log(myFunc({ secondParam: 'second' }))



//***********************
//***********************

// Complete the following function called validator, that takes an optional function argument. It
// caches the response and return it when there's.
// Given interface and function definitions
// interface CustomResponse {
//  valid: boolean
//  error: string
// }
// const errorResponse = (): CustomResponse => {
//  return { valid: false, error: 'error occurred' }
// }
// // Complete this fuction to work described in the following expected
// results. const validator = ( validatorFn?: () => CustomResponse ):
// CustomResponse => { }
// Expected results
// console.log(validator(() => errorResponse()).valid) //=> false
// console.log(validator().error) //=> 'error occurred'

// Ans:

// interface CustomResponse 
//     {
//     valid: boolean
//     error: string
//     }
//    const errorResponse = (): CustomResponse => 
//     {
//         return { valid: false, error: 'error occurred' }
//     }
//    const validator = (validatorFn?: () => CustomResponse):CustomResponse=>
//     { 
//         return { valid: false, error: 'error occurred' }
//     }

// console.log(validator(() => errorResponse()).valid);
// console.log(validator().error);

//***********************
//***********************

// write typescript code with following requirements (design proper classes). The requirements have
// suggestions for fields and methods, you are free to add more as per your thinking
// Bank Account
// fields: id, firstName, lastName, address, phone, email, type (saving/current)
// methods: createAccount, updateAccount, deleteAccount
// Transaction
// fields: date, type, amount, customerId
// methods: depositFunds, withdrawFunds

// Ans:

// class BankAccount {
//     id: number = 0;
//     firstName: string = "";
//     lastName: string = "";
//     address: string = "";
//     phone: number = 0;
//     email: string = "";
//     type: string = "";

//     constructor() {
//       this.id = 0;
//       this.firstName = "";
//       this.lastName = "";
//       this.address = "";
//       this.phone = 0;
//       this.email = "";
//       this.type = "";
//     }
//   }
// const bankArray: Array<BankAccount> = [];
//     let i = 0;
//     function createAccount(id: number,firstName: string,lastName: string,address: string,phone: number,email: string,type: string) {
//     const obj = new BankAccount();
//     obj.id = id;
//     obj.firstName = firstName;
//     obj.lastName = lastName;
//     obj.address = address;
//     obj.phone = phone;
//     obj.email = email;
//     obj.type = type;
//     bankArray[i] = obj;
//     i++;
//     console.log("Account has been Created");
// }
// function updateAccount(objArr: Array<BankAccount>,id: number,key: string,value: number|string ) {
//  for (let obj of objArr) 
//  {
//     if (obj.id == id)
//     {
//         if(key=="firstname"){
//             obj.firstName = ""+value
//         }else if(key=="lastname"){
//           obj.lastName = ""+value

//         }else if(key=="address"){
//             obj.address = ""+value
//         }else if(key=="phone"){
//             obj.phone = Number(value)

//         }else if(key=="type"){
//             obj.type = ""+value
//         }else if(key=="email"){
//             obj.email = ""+value

//         }
//     }
//  }
// console.log("Account Data Updated");
// }
// function deleteAccount(dltarry:Array<BankAccount>, id:number) {
//     for(let d of dltarry){
//         if(d.id==id){
//             let ind=dltarry.indexOf(d)
//             bankArray.splice(ind,1)
//             console.log("Account deleted Successfully");
//         }
//     }   
    
// }
// createAccount(1,'Karan' ,'kalbhor' ,'pune',100 ,'abc.com', 'savings')
// createAccount(2,'Ram' ,'gurjar' ,'MP',200 ,'bc.com', 'savings')
// createAccount(3,'aniket' ,'naik' ,'KP',300 ,'c.com', 'savings')
// updateAccount(bankArray,3,'address','up' )
// deleteAccount(bankArray,2)
// console.log(bankArray)

// class Transaction 
// {
//     date:string=''
//     type:string=''
//     amount:number=0
    
//     constructor( type:string, amount:number)
//     {
//         this.type=type
//         this.amount=amount
       
//     }
//     depositfunds(fund:Array<BankAccount>,amount:number,id:number)
//     {
//         for(let f of fund)
//         {
//         if(f.id==id)
//         {
//             this.amount+=amount
//         }

//         console.log('Account credited:\n total amount:' +this.amount)
//     }
//     }
//     withdrawfunds(fund:Array<BankAccount>,debit:number,id:number)
//     {
//         for(let f of fund)
//         {
//         if(f.id==id)
//         {
//             this.amount-=debit
//         }
//         console.log(f)}
//     }
// }
// const t=new Transaction('savings',1000)
// t.depositfunds(bankArray,2000,1)
// t.withdrawfunds(bankArray,100,1)

//***********************
//***********************

// Write a program that asks the user how many days are in a particular month, and what day of the
// week the month begins on (0 for Monday, 1 for Tuesday, etc), and then prints a calendar for that
// month. For example, here is the output for a 30-day month that begins on day 4 (Thursday)


//Ans:

// function date(days:any, start:any){
//     console.log('mon tue wed thu fri sat sun')
//     let i=1
//     let t=0
//     let str=''
//     let bool=true
//     while(i<=days)    {
//         if(t!=start && bool==true)
//         {
//             str=str+'   '
//         }
//         else
//         {
//             bool=false
//             if(i<10)
//            { str=str+' '+i+' '}
//            else{str=str+' '+i}
//             if(i==days)
//          {console.log(str)}
//          i++
//     }
//         t++
//         str +=' '
//         if(t==7){console.log(str)
//          t=0
//          str=''}
//     }
//     console.log(str)
// }
// date(30,3)
   

//***********************
//***********************

// Write a program that contains a function that has one parameter, n, representing an integer greater
// than 0. The function should return n! (n factorial). Then write a main function that calls this function
// with the values 1 through 20, one at a time, printing the returned results. This is what your output
// should look like:
// 126
// 24
// 120
// 720
// 5040
// 40320
// 362880
// 36288002

// Ans:
// const factorial=(ip:number)=>
// {
//     let n=ip
//     let fac=n
//     for(let i=1;i<n;i++)
//     {
//         fac=fac*i
//     }
//     return fac
// }
// const input=()=>
// {
//     for(var i=1; i<=20; i++)
//     {
//         console.log(factorial(i))
//     }
// }
// input()

//***********************
//***********************

// Use inheritance
// Write a class Course with name,fees. Provide following functionalities
// initializer
// Accept data
// Print Data .
// Write a Class Computer with subjectList.
// Provide following functionalities
// initializer
// Accept data
// Print Data .
// Write a Class Electonics with subjectList.
// Provide following functionalities
// initializer
// Accept data
// Print Data

//Ans:

// class course{

//     name:string
//     fees:number

//     constructor()
//     {
//         this.name=''
//         this.fees=0
//     }
//     setdata(name:string,fees:number)
//     {
//         this.name=name;
//         this.fees=fees;
//     }
//     printdata()
//     {
//         console.log(this.name,+" "+this.fees)
//     }
// }
// class computer extends course{
//     subject:string
//     constructor()
//     {
//         super()
//         this.subject=''
        
        
//     }
//     setCData(subject:string){
//         this.subject=subject
//     }
//     printcdata()
//     {
//         console.log(this.subject)
//     }
// }
// class electronics extends computer{
//     subjectelec:string
//     constructor()
//     {
//         super()
//         this.subjectelec=''
//     }
//     setEData(subjectelec:string){
//         this.subjectelec=subjectelec
//     }
//     printedata()
//     {
//         console.log(this.subjectelec)
//     }
// }
// // const sub=new computer()
// // sub.setCData('Javascript')
// // sub.printcdata()
// const e1=new electronics()
// e1.setEData("EEE")
// e1.printedata()
// e1.setCData('javas')
// e1.printcdata()
// e1.setdata('Karan', 1000)
// e1.printdata()





//***********************
//***********************

// A pangram is a sentence that contains all the letters of the English alphabet at least once, for
// example: The quick brown fox jumps over the lazy dog. Your task here is to write a function to
// check a sentence to see if it is a pangram or not.

//Ans:

// function pangram(str:string){
//      str=str.toLowerCase()
//     let a=''
//     let n='1'
//     let count=0
//     for(let i=97;i<=122;i++)
//     {
//      let s=[ String.fromCharCode(i)]
//      a+=s
//     }
//     for(let k=0;k<a.length;k++)
//     {
//         for(let q=0;q<str.length;q++)
//         {
//             if(a.charAt(k)==str.charAt(q))
//             {
//                 a= a.replace(a.charAt(k),'1')
//             }
//         }
//     }
//     for(let check=0;check<a.length;check++)
//     {
//         if(a.charAt(check)=='1')
//         {
//             count++
//         }
//     }
//     if(count==26){
//     console.log('Pangram')}
//     else{
//     console.log('Not Pangram')}
// }
// pangram('The quick brown fox jumps over the lazy dog')

//***********************
//***********************

// Write a function translate() that will translate a text into "rövarspråket" (Swedish for "robber's
// language"). That is, double every consonant and place an occurrence of "o" in between. For
// example, translate("this is fun") should return the string "tothohisos isos fofunon".

//Ans:

// function translate(stri:string){
//     let str=''
//     for(let i=0;i<stri.length;i++)
//     {
//         if(
//             stri.charAt(i)=='a' ||
//             stri.charAt(i)=='e' ||
//             stri.charAt(i)=='i' ||
//             stri.charAt(i)=='o' ||
//             stri.charAt(i)=='u' )
//         {
//             str+=stri.charAt(i) 
//         }
//         else if(stri.charAt(i)==' ')
//         {
//             str+=stri.charAt(i)
//         }
//         else
//         {
//             str+=stri.charAt(i)+'o'+stri.charAt(i)
//         } 
//     }
// console.log(str)
// }
// translate('this is fun')

//***********************
//***********************

// Create a class 'Student' with rollno, studentName, course ,dictionary of marks(subjectName -
// >marks [5]).
// Provide following functionalities
// initializer
// override str method
// accept student data
// Print student data for given id.
// Print Student who has failed in any subject.
// Write menu driven console program to test above functionalities.( accept records of 5 students
// and store those in list )

//Ans:

// class student{
//     rollno:number
//     studentname:string
//     course:string
//     marks={}
//     constructor()
//     {
//         this.rollno=0
//         this.studentname=''
//         this.course=''
//         this.marks={}
//     }
//     setdata(rollno:number, studentname:string, course:string, marks:any)
//     {
//         this.rollno=rollno
//        this.studentname=studentname
//         this.course=course
//         this.marks=marks
//     }
//     toString(){
//         console.log(this.rollno +' '+ this.studentname+' '+this.course)
//         console.log(this.marks)
//         return
//     }
// }
// function failedstudent(obj:Array<student>){
//     for(let i of obj)
//     {
//          for(let j of Object.values(i.marks)){
//               if(Number(j) < 33 ){
//                 i.toString()
//               }
//          }
//     }
// }
// function printstud(obj:Array<student>,id:number){
//     for(let i of obj)
//     {
//         if(i.rollno==id){
//             i.toString()
//         }
//     }
// }
// function createObj(){
//     const objArr:Array<student> =[]
//     for(let i=0; i<3; i++){
//       let obj = new student()
//       if(i==0){
//       obj.rollno = 101
//       obj.course = "BTech"
//       obj.studentname = "karan"
//       let mks = {math:67,eng:77,sst:30}
//       obj.marks = mks;
//       }else if(i==1){
//         obj.rollno = 102
//       obj.course = "BE"
//       obj.studentname = "Rahul"
//       let mks = {math:60,eng:97,sst:87}
//       obj.marks = mks;
//       }else if(i==2){
//         obj.rollno = 103
//       obj.course = "BSC"
//       obj.studentname = "ritik"
//       let mks = {math:67,eng:77,sst:32}
//       obj.marks = mks;
//       }
//       objArr[i] = obj
//     }
//     failedstudent(objArr)
//     printstud(objArr,102)
// }
// createObj()


//***********************
//***********************

// Write a program to Interchange First and Last Element of a List

//Ans:

// const list=()=>
// {
//     const arr=[1,2,3,4,5]
//     let l=arr.length
//     let a=arr[l-1]
//     let b=arr[0]
//     arr.splice(0,1,a)
//     arr.splice(l-1,1,b)
//     console.log(arr)
// }
// list()


//***********************
//***********************


// Replace single element ‘b’ in given list ['a', 'b', 'c', 'd', 'e'] with [1, 2, 3]

//Ans:

//  const list=()=>
// {
//     const arr:any=['a', 'b', 'c', 'd', 'e']
//     const i=arr.indexOf('b')
//     arr[i]=[1,2,3]
//     console.log(arr)
// }
// list()


//***********************
//***********************

// write a program to find index of element ‘e’ in given vowels list ['a', 'e', 'i', 'o', 'i', 'u']

// Ans:

// const list=(element:string)=>
// {
//     const vowels=['a', 'e', 'i', 'o', 'i', 'u']
//     let ans=vowels.indexOf(element)
//     console.log(ans)
// }
// list('e')

//***********************
//***********************

// Accept the full name from user(Name Middlename Surname) in lowercase and Print it in title case.
// NOTE:(Using in-built function

//Ans:

// const TitleCase = (fname: string) => 
// {
//     return fname.toLowerCase().split(' ').map(function(word)
//     {
//       return word.replace(word[0], word[0].toUpperCase())
//     }).join(' ')
// }
// console.log( TitleCase('name middlename surname'))
  
//***********************
//***********************
