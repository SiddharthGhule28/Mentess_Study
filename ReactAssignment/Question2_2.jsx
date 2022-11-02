import React from "react";
import { useState } from "react";
import './Question22.css';

const Registration=()=>{
    const[fullname,setfullname]=useState('');
    const[Mobileno,setmobileno]=useState()
    const[dob,setdob]=useState('')
    const[email,setemail]=useState('')
    const[password,setpassword]=useState('')
const savef=(f)=>{
    setfullname(f.target.value)
}
const savem=(m)=>{
    setmobileno(m.target.value)
}
const saved=(d)=>{
    setdob(d.target.value)
}
const savee=(e)=>{
    setemail(e.target.value)
}
const savep=(p)=>{
    setpassword(p.target.value)
}
const register=()=>{
    console.log(fullname)
    console.log(Mobileno)
    console.log(dob)
    console.log(email)
    console.log(password)
}
return(
    <div>
        <div class="head">REGISTRATION</div><br />
        <div class="container">
        <input type="text" placeholder="Full Name" value={fullname} onChange={savef} />
        <br />
        <input type="text" placeholder="Mobile no" value={Mobileno} onChange={savem} />
        <br />
        <input type="text" placeholder="Date of Birth" value={dob} onChange={saved} />        
        <br />
        <input type="text" placeholder="Email Address" value={email} onChange={savee} />
        <br />
        <input type="password" placeholder="Enter Password" value={password} onChange={savep}/>
        <br />
        <button class="rgbutton" type="register" onClick={register}>REGISTER</button>
        </div>
        </div>
)
}
export default Registration;