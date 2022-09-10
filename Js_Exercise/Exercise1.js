// Assignment
// Create a function that takes two numbers as arguments and returns their sum.
// addition(3, 2) ➞ 5
// addition(-3, -6) ➞ -9
// addition(7, 3) ➞ 10

//Ans:
// function add(a,b){
//     console.log(`ans= ${a+b}`)
// }
// add(3,2)
// add(-3,-6)
// add(7,3)

// Create a function that takes voltage and current and returns the calculated power
// circuitPower(230, 10) ➞ 2300
// circuitPower(110, 3) ➞ 330
// circuitPower(480, 20) ➞ 9600

//Ans:
// const multiply= (a,b) => a*b
// console.log(multiply(230,10))
// console.log(multiply(110,3))
// console.log(multiply(480,20))

// Write a function that takes an integer minutes and converts it to seconds.
// convert(5) ➞ 300
// convert(3) ➞ 180
// convert(2) ➞ 120

//Ans:
// const seconds=(a) => {console.log(a*60)}
// seconds(5)
// seconds(3)
// seconds(2)

// Write a function that takes the base and height of a triangle and return its area.
// triArea(3, 2) ➞ 3
// triArea(7, 4) ➞ 14
// triArea(10, 10) ➞ 50

//Ans:
// const triarea=(b,h) => console.log((b*h)/2)
// triarea(3,2)
// triarea(7,4)
// triarea(10,10)

// Create a function that takes the age in years and returns the age in days.
//  calcAge(65) ➞ 23725
//  calcAge(0) ➞ 0
//  calcAge(20) ➞ 7300

//Ans:
// const age=(a)=> console.log(a*365)
// age(65)
// age(0)
// age(20)

// create a function to swap two parameters
//  let n1 = 10
//  let n2 = 20
//  swap(n1, n2) ➞ n1: 20, n2: 10

//Ans:
// function swap(a,b) 
//     {
//         a=a+b
//         b=a-b
//         a=a-b
//         console.log('n1=',a ,'n2=',b)
//     }
//     swap(10,20)

// create a function to find out a maximum from an array
// const numbers = [10, 21, 5, 25, 6, 60, 23, 26, 49, 98]
// findMax(numbers) ➞ 98

//Ans:
    // const numbers=[10,21,5,25,6,60,23,26,49,98]
    // let ans=0
    
    // function maxnos(numbers) 
    //     {
    //         for(const value of numbers)
    //             {
    //                 if(value>ans)
    //                     {
    //                         ans=value
    //                     }
    //             }
    //         console.log(ans)
    //      }
    // maxnos(numbers)
// create a function to find out a minimum from an array
// const numbers = [10, 21, 5, 25, 6, 60, 23, 26, 49, 98]
// findMin(numbers) ➞ 5

//Ans:
    // const numbers = [10, 21, 5, 25, 6, 60, 23, 26, 49, 98]
    // let ans=1000
    
    // function minnos(numbers) 
    //     {
    //         for(const value of numbers)
    //             {
    //                 if(value<ans)
    //                     {
    //                         ans=value
    //                     }
    //             }
    //         console.log(ans)
    //      }
    // minnos(numbers)
// Write a function which checks given input/parameter:
// If input/parameter is divisible by 3 print => Fizz
// If input/parameter is divisible by 5 print => Buzz
// If input/parameter is divisible by 3 or 5 print => FizzBuzz
// input/parameter is NOT divisible by 3 or 5 print => given Input Number/Value
// If input/parameter is other than Number/Value print => 'Nan Not a Number! Please Input
// Number'
// isfizzBuzz('one') ➞ Nan Not a Number! Please Input Number
// isfizzBuzz(true) ➞ Nan Not a Number! Please Input Number
// isfizzBuzz(9) ➞ Fizz
// isfizzBuzz(10) ➞ Buzz
// isfizzBuzz(30) ➞ FizzBuzz
// isfizzBuzz(11) ➞ Some odd number entered: 11

//Ans:
    // function isfizzbuzz(q)
    //{
        
    //     if(q%3==0 && q%5==0)
    //     {
    //         return 'fizzbuzz'
    //     }
    //     else if(q%5==0)
    //     {
    //         return 'buzz'
    //     }
    //     else if(q%3==0)
    //     {
    //         return 'fizz'
    //     }
    //     else if(Number.isInteger(q))
    //     {
    //         return "Some odd number entered: "+q
    //     }
    //     else 
    //     {
    //         return 'Nan Not a Number! Please Input Number'
    //     }
    // }
    // console.log(isfizzbuzz('one'))
    // console.log(isfizzbuzz(true))
    // console.log(isfizzbuzz(9))
    // console.log(isfizzbuzz(10))
    // console.log(isfizzbuzz(30))
    // console.log(isfizzbuzz(11))

// Write a function which checks number till given input/parameter is odd or even

//Ans:
    // const check=(q)=>
    // {
    //     for(let i=0; i<=q;i++)
    //     if(i%2==0)
    //     {
    //         console.log('Number is even: '+i)
    //     }
    //     else
    //     {
    //         console.log('Number is odd: '+i)
    //     }
    // }
    // check(3)   
// Write a function which Calculate the sum of multiples of 3 and 5 for a given limit
// sum0fMultiples(10) ➞ sum0fMultipleValue of 3 & 5 upto 10 digit is: 33

//Ans:
// const som=(q)=>
// {
//     let ans=0
//     for(let i=0;i<=q;i++)
//     {
//         if(i%3==0 || i%5==0)
//         {
//             ans=ans+i
//         }
//     }
//     console.log('sum of multiples(10)= sumofmultiplevalue of 3 & 5 upto 10 digit is: ' +ans)
// }
// som(10)

// Write a function which Prints/Shows star (or any pattern) for the number of times and rows provided
// showPattern(5)
//  *
//  **
//  ***
//  ****
//  *****

//Ans:
// const pattern=(q) =>
// {
//     let ans=''
//     for(let i=1;i<=q;i++)
//     {
//         for(let k=1;k<=i;k++)
//         {
//             ans+='*'
//         }
//         ans+='\n'
//     }
//     console.log(ans)
// }
// pattern(5)

// Write a function which Calculate the sum of marks provided in an array, average it and also show
// Grade
// Grade criteria/mechanism is:
// 0% to 70% = > D Grade
// 71% to 79% => C Grade
// 81% to 89% => B Grade
// 91% to 100% => A Grade
// const marks = [55, 85, 55, 65];
// calculateGrades(marks) ➞ Grade: D

//Ans:
// const calculategrades=()=>
//     {
//         const marks = [80,80,80,80];
//         let sum=0
//         let avg=0
//         for(const value of marks)
//         {
//             sum+=value
//             avg=sum/marks.length
//         }
//         if(avg<=70)
//         {
//             console.log('calculateGrades(marks) ➞Grade: D')
//         }
//         else if(71<=avg<=80)
//         {
//             console.log('calculateGrades(marks) ➞Grade: C')
//         }
//         else if(81<=avg<=90)
//         {
//             console.log('calculateGrades(marks) ➞Grade: B')
//         }
//         else
//         {
//             console.log('calculateGrades(marks) ➞Grade: A')
//         }
//     }
// calculategrades()

// Write a function which show or print Prime Number upto provided range (with and without map)
// showPrimeNumbers(20);
// Prime Number: 2
// Prime Number: 3
// Prime Number: 5
// Prime Number: 7
// Prime Number: 11
// Prime Number: 13
// Prime Number: 17
// Prime Number: 19

//Ans:
// without mapping:
// const prime=(q)=>
// {

//     for(let i=2;i<=q;i++)
//     {
        // let b=true
        // for(let k=2;k<i;k++)
        // {
        // if(i%k==0)
        // {
        //     b=false
        // }
        // }
        // if(b)
        // {
        //     console.log('Prime Number: ' +i)
        // }

//     }
// }
// prime(2)

//with mapping
// function mapp()
// {
//     const arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
//     arr.map(function( value)
//     {
//         if(value!=1){
//         let b=true
//         for(let k=2;k<value;k++)
//         {

//             if(value%k==0)
//             {
//                 b=false
//             }
//         }
//         if(b)
//         {
//             console.log('Prime Number: ' +value)
//         }
// }})}
// mapp()