let tuple1:[number,number,number,number]=[10,20,30,40]
function index()
{
    let sum:number=0
    for (let i =0 ; i<tuple1.length;i++)
    {
        sum+=tuple1[i]
    }
    return sum
}
console.log(index())