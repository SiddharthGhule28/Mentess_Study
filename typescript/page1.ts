// Complete the following MyArray class in TypeScript that can handle
// string and number only to get
// the expected results
// Barebone class definitionc

class MyArray {
    collection:any[]=[];
    add(value:string|number) {
    this.collection.push(value)
}
    remove(value:any) {
         const index=this.collection.indexOf(value)
        return this.collection.splice(index,1);
    }
getValues() {

    return this.collection;
    }
}
const stringAry = new MyArray()
//pushing to the array
stringAry.add('aaa')
stringAry.add('bbb')
stringAry.add('ccc')

// remove the element bbb from array
stringAry.remove('bbb')

//print the  value of string array
console.log(stringAry.getValues()) 
const numberAry = new MyArray()
numberAry.add(1)
numberAry.add(2)
numberAry.add(3)
numberAry.remove(2)
console.log(numberAry.getValues()) 
const booleanAry = new MyArray()
// numberAry.add(true)
// numberAry.add(false)
// console.log(booleanAry.getValues()) 



