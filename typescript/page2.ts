// Create an arrow function that takes an object
//  with default values. Here're the interface and
// expected results.


//=> { firstParam: 'defaultFirst', secondParam:'defaultSecond' } 
// The default values are returned when args not given.

// interface Params {
//     firstParam: string
//     secondParam: string
//    }
// class c1 implements Params{
//     firstParam: string='defaultFirst'
//     secondParam: string='defaultSecond'
//     myfunc()
//     {
//         console.log(this.firstParam)
//         console.log(this.secondParam)
//     }
    
   
// }   
// const obj = new c1
// // obj.myfunc() 




// //=> {
//     firstParam: 'first', secondParam: 'second' } // The given values are
//     returned when args given.
    

// interface Params {
//     firstParam: string
//     secondParam: string
//    }
// class c1 implements Params{
//     firstParam: string='defaultfirst'
//     secondParam: string='defaultsecond'
//     myfunc(firstParam:string,secondParam:string):void
//     {
//         console.log(`inside myfunc`)
//         console.log(`${firstParam}`)
//         console.log(`${secondParam}`)
//     }
    
   
// }   
// const obj = new c1
// obj.myfunc('first','second') 





// //=> { firstParam: 'first',
// secondParam: 'defaultSecond' }

// interface Params {
//     firstParam: string
//     secondParam: string
//    }
// class c1 implements Params{
//     firstParam: string='defaultfirst'
//     secondParam: string='defaultsecond'
//     myfunc(firstParam:string,secondParam:string='defaultsecond'):void
//     {
//         console.log(`inside myfunc`)
//         console.log(`${firstParam}`)
//         console.log(`${secondParam}`)
//     }
    
   
// }   
// const obj = new c1
// obj.myfunc('first') 



// //=> { firstParam:
// 'defaultFirst', secondParam: 'second' }


// interface Params {
//         firstParam: string
//         secondParam: string
//        }
//     class c1 implements Params{
//         firstParam: string='defaultfirst'
//         secondParam: string='defaultsecond'
//         myfunc(firstParam:string='defaultfirst',secondParam:string):void
//         {
//             console.log(`inside myfunc`)
//             console.log(`${firstParam}`)           
//             console.log(`${secondParam}`)
//         }
        
       
//     }   
//     const obj = new c1
//     obj.myfunc({secondParam:'second'}) //this will give an error as default paramenter always start from left to right
    

