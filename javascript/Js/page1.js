// Create a function that takes two numbers as arguments and returns their sum.
// addition(3, 2) ➞ 5
// addition(-3, -6) ➞ -9
// addition(7, 3) ➞ 10

function add(a,b)
{
console.log(`addition of ${a},${b} = ${a+b}`)
}
add(3,2)
add(-3,-6)
add(7,3)

//using function alias
const result =(addition)=>{
    addition(3,2)
    addition(-3,-6)
    addition(7,3)

}

result(add2)




function add2(p1,p2)
{
    console.log(`${p1}+${p2}=${p1+p2}`)

}

// Create a function that takes voltage and current and returns the calculated power
// circuitPower(230, 10) ➞ 2300
// circuitPower(110, 3) ➞ 330
// circuitPower(480, 20) ➞ 9600
const pow=(circutpower) =>{
    circutpower(230,10)
    circutpower(110,3)
    circutpower(480,20)
}

pow(power)




function power(v,c)
{
    console.log(`Power of voltage ${v}and current ${c} = ${v*c}`)

}



// Write a function that takes the base and height of a triangle and return its area.
// triArea(3, 2) ➞ 3
// triArea(7, 4) ➞ 14
// triArea(10, 10) ➞ 50
const tri= (area) =>
{
area(3,2)
area(7,4)
area(10,10)
}
tri(triArea)



function triArea(b,h)
{
    console.log(`Area of triangle = ${(1/2)*b*h}`)
}


// Create a function that takes the age in years and returns the age in days.
//  calcAge(65) ➞ 23725
//  calcAge(0) ➞ 0
//  calcAge(20) ➞ 7300
const days =  (to_days) =>
{
    to_days(65)
    to_days(0)
    to_days(20)
}
days(calcAge)


function calcAge(age)
{
    console.log(`Age in days = ${age * 365}`)
}


// create a function to swap two parameters
//  let n1 = 10
//  let n2 = 20
//  swap(n1, n2) ➞ n1: 20, n2: 10


let n1=10
let n2=20
console.log(`after swaping no = ${n1},${n2}`)
function swap(n1,n2){
temp=n1
n1=n2
n2=temp

console.log(`after swaping no = ${n1},${n2}`)
}
swap(n1,n2)



// create a function to find out a maximum from an array
// const numbers = [10, 21, 5, 25, 6, 60, 23, 26, 49, 98]
// findMax(numbers) ➞ 98
const numbers = [10, 21, 5, 25, 6, 60, 23, 26, 49, 98]

function findmax(numbers){
    let max=0
    for(const value of numbers){
        if (value>max)
        max=value
    }
    console.log(`maximun number = ${max}`)
}
findmax(numbers)


// create a function to find out a minimum from an array
// const numbers = [10, 21, 5, 25, 6, 60, 23, 26, 49, 98]
// findMax(numbers) ➞ 5

const number = [10, 21, 5, 25, 6, 60, 23, 26, 49, 98]

function findmin(number){
    let min=number[1]
    for(const value of number){
        if (value<min)
        min=value
    }
    console.log(`minimum number = ${min}`)
}
findmin(number)

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

function isfizzBuzz(input)
{
    if(input % 3 == 0 && input % 5 ==0)
    {
        console.log(`FizzBuzz`)
    }
    else if(input % 3 == 0)
    {
        console.log(`Fizz`)
    }
    else if(input % 5 ==0)
    {
        console.log(`Buzz`)
    }
    else if (input % 2 != 0){
        console.log(`Some odd number entered = ${input}`)
    }
   
    else if (input != Number)
    {
        console.log(`Nan Not a Number! Please Input Number`)
    }

   
}

isfizzBuzz('one') 
isfizzBuzz(true) 
isfizzBuzz(9) 
isfizzBuzz(10) 
isfizzBuzz(30) 
isfizzBuzz(11) 

// Write a function which checks number till given input/parameter is odd or even
// 1st only one value
const num = 2

function oddeven(num)
{




if(num % 2 == 0) {
    console.log("The number is even.");
}
else {
    console.log("The number is odd.");
}


}
oddeven(num)


// odd even using array 

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const even = arr.filter(number => {
if( number % 2== 0)
{
    console.log(`even`)
}
else
{
    console.log(`odd`) 
}
});
console.log(even);

// Write a function which Calculate the sum of multiples of 3 and 5 for a given limit
// sum0fMultiples(10) ➞ sum0fMultipleValue of 3 & 5 upto 10 digit is: 33

function sumOfMultiples(number) {
    let sum = 0;
    for(let i=1; i<=number; i++) {
        if(i % 3 == 0 || i % 5 == 0){
            sum += i;
        }
    }
    return sum;
}
const sum0fMultipleValue = sumOfMultiples(10)
console.log(`sum0fMultipleValue of 3 & 5 upto 10 digit is: ${sum0fMultipleValue}`)


// Write a function which Prints/Shows star (or any pattern) for the number of times and rows provided
// showPattern(5)

function pattern(n)
{
let p = "";
for (let i = 1; i <= n; i++) {
  
  for (let j = 0; j < i; j++) {
    p += "*";
  }
  p += "\n";
}
console.log(p)
}
pattern(5)


// Write a function which Calculate the sum of marks provided in an array, average it and also show
// Grade
// Grade criteria/mechanism is:
// 0% to 70% = > D Grade
// 71% to 79% => C Grade
// 81% to 89% => B Grade
// 91% to 100% => A Grade
// const marks = [55, 85, 55, 65];
// calculateGrades(marks) ➞ Grade: D

const marks = [55, 85, 55, 65];

const cal = marks.filter(marks =>{
        if(marks > 0 && marks <= 70 )
        {
            console.log(`D Grade`)
        } 
        else if(marks >= 71 && marks <= 79 )
        {
            console.log(`C Grade`)
        } 
        else if(marks >= 80 && marks <= 89 )
        {
            console.log(`B Grade`)
        } 
        else if(marks >= 90 && marks <= 100 )
        {
            console.log(`C Grade`)
        } 
} )

console.log(cal)

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


function showPrimeNumbers(prime){
for(let prime=2 ; prime<=20; prime++){
    let isPrime = true;

for (let i=2; i<= prime-1;i++){
    if(prime%i===0){
        isPrime = false;
        break
    }
}
if (isPrime)
{ console.log(`Prime Number : ${prime}`);
}
}
}
showPrimeNumbers(20)