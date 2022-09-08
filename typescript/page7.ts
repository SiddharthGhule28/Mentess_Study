class course
{
    name:string
    fee:number
    constructor(name:string,fee:number)
    {
        this.name=name
        this.fee=fee

    }
    setcourse(name:string,fee:number):void{
        this.name=name
        this.fee=fee
    }
    getcourse():any{
         return this.name,this.fee
    }
    printdata()
    {
        console.log(`name : ${this.name}`)
        console.log(`name : ${this.fee}`)
    }
}
class computer extends course
{
    id:number=0 
    setcomp(id:number):void{
        this.id=id
    }
    getcomp():any
    {
        return this.id

    }
   printcomp()
   {
    console.log(`computer id  : ${this.id}`)
   }
}
class electronic extends course
{
    company:string =''
    setelec(company:string):void{
        this.company=company
    }
    getelec():any
    {
        return this.company

    }
   printelec()
   {
    console.log(`company of electronic  : ${this.company}`)
   }
    
}

const p1 = new computer('hp',90998)
const p2 = new electronic("ssd",89908)
p1.printdata()
p1.setcomp(12)
p1.printcomp()
p2.setelec('laptop')
p2.printelec()