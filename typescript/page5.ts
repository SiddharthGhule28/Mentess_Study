function calander(days :any ,start:any)
{
    console.log(`Mon Tue Wed Thrus Fri Sat Sun`)
    let t=0
    let i=1
    let str=''
    let bool =true
    while(i<=days)
    {
        if(t!=start && bool==true)
        {
            str=str+' '

        }else{
            bool=false
            if(i<10)
            {
                str=str+' '+i+ ' '

            }
            else{
                str=str+' '+i
            }
            if (i==days)
            {
                console.log(str)
            }
            i++
        }
        t++
        str=str+ ' '
        if(t==7)
        {
            console.log(str)
            t=0
            str=' '
        }
    }

}

var days1=prompt('enter no days')
var start=prompt('enter start day')
calander(days1,start)