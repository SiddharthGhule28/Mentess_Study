
let roll:number  = Number(prompt("Enter Student's Roll No"))
let S_Name:any = prompt("Enter name of the Student")
let C_Name:any = prompt("Enter the course enrolled")
let M_BEE:number = Number(prompt("Enter the marks obtained in BEE !"))
let M_ED:number = Number(prompt("Enter the marks obtained in ED !"))
let M_Cpp:number = Number(prompt("Enter the marks obtained in Cpp !"))
let Sport:any = prompt("Enter the Sports enrolled in")

interface IMarks {
    marks: number;
}

interface IMain {
    main: any;
}

class Student {
    // main: { [id: string] : IMain; } ={}
    rollno:number = roll
    // Data_Arr:any =[]
    
    studentName:string = S_Name
    course:string = C_Name
    marks: { [id: string] : IMarks; } = {};
    
    add() {
        this.marks["BEE"] =  { "marks": M_BEE };
        this.marks["ED"] =  { "marks": M_ED };
        this.marks["Cpp"] =  { "marks": M_Cpp };
    }

    // DataArr(){
    //     const result = this.Data_Arr.push(this.studentName,this.course,this.add())
    //     return result
    // }

    // assign() {
    //     this.main[this.rollno] = { main : this.DataArr() }
    //     console.log(this.main)
    // }
    
    str(){
        console.log(`Roll No : ${this.rollno}`)
        console.log(`Student's Name: ${this.studentName}`)
        console.log(`Course Enrolled: ${this.course}`)
    }
}

class Sportsperson extends Student{
    sport:string = Sport
    str(){
        super.str()
        console.log(`Sport Enrolled: ${this.sport}`)
    }
    
}

const s = new Student();
// s.assign()
const sp = new Sportsperson();
sp.str()
// console.log(sp.str())