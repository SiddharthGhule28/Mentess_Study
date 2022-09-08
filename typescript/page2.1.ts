interface Params {

    firstParam?:  string

    secondParam?: string

}



class myClass implements Params{

   

    firstParam :string

    secondParam :string




    constructor(firstParam:string = 'defaultfirst',secondParam:string = 'defaultsecond'){

        this.firstParam = firstParam

        this.secondParam = secondParam

       

    }




    myFunc =(object?:myClass)=>{



       if (object)

       {

        console.log(`${object?.firstParam} , ${object?.secondParam}`)

       }

       else {

        console.log(`${this.firstParam} , ${this.secondParam}`)

       }

    }

}



// const obj1 = new myClass();

const new_obj = new myClass();

// new_obj.firstParam ='first';

// new_obj.secondParam = 'second';



// new_obj.myFunc(new_obj)

new_obj.myFunc()





// firstParam:string,secondParam:string