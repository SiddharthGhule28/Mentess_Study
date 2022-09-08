
class Bank_Acc {
    id: number 
    firstName: string
    lastName: string
    address: string
    phone: number
    email: string
    type:string
    collection:any = []

    constructor(id: number ,firstName: string,lastName: string,address: string,phone: number,email: string,type:string) {
        this.id = id
        this.firstName = firstName
        this.lastName = lastName
        this.address = address
        this.phone = phone
        this.email = email
        this.type = type
      }

    createAccount( id: number,firstName: string,lastName: string,address: string,phone: number,email: string,type:string){
        this.collection.push(id,firstName,lastName,address,phone,email,type)
    }

    updateAccount(id: number){
        let index = this.collection.indexOf(id)
        this.collection.splice(index,1,10)
    }

    deleteAccount(id: number){
        let index = this.collection.indexOf(id)
        this.collection.splice(index,1)
    }
}

class Transaction extends Bank_Acc{
    date: string = ' '
    trans_type: boolean = true // True Means success and False means failed
    amount: number = 0
    customerId: number = this.id
    trans:any = []


    depositFunds(firstName: string,date: string, trans_type: boolean,amount:number,customerId:number){
        this.trans.push(firstName,date,trans_type,amount,customerId)
    }
    
    withdrawFunds(amount:number){
        let index = this.trans.indexOf(amount)
        this.trans.splice(index)
    }

}

const b1 = new Bank_Acc(1,'suraj','dalvi','pune',789452487,'suraj@gmail.com','Savings')
console.log(b1)

const d1 = new Transaction(1,'suraj','dalvi','pune',789452487,'suraj@gmail.com','Savings')
console.log(d1)
d1.depositFunds('suraj','29/1/2021',true,750000,1)
console.log(d1.trans)
d1.withdrawFunds(50000)
console.log(d1.trans)
