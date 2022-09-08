class factorial
{

    fact(n:number):number
    {
        if (n == 0) return 1
        return n * this.fact(n - 1)
    }
}


const result=new factorial
for(let num=1 ;num<=20;num++)
{
const res= result.fact(num)
console.log(res)
}
