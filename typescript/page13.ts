class replace1{
    list1 :any= ['a', 'b', 'c', 'd', 'e']
    list2:any=[1,2,3];
    re(val:any)
    {
        const index = this.list1.indexOf(val)
        const list3=this.list1.splice(index,1,this.list2)
        // const list3=this.list1.replace(this.list2,[1,2,3])

        console.log(this.list1)
    }

// list=this.list1.map(re(val){val.replace(/,/g)})
}
const r1 =new replace1
r1.re('b')
