import React from "react";
import { useState } from "react";
import './Question22.css';

const Login=()=>{
    const[id,setid]=useState('');
    const[password,setpassword]=useState('');
const display=(i,y)=>{
   setid(i.target.value)
}
const displayp=(y)=>{
    setpassword(y.target.value)
 }
 
const dprint=()=>{
    console.log(id)
    console.log(password)
}
    return(
        <div>
             <div class="head">LOGIN</div><br />
            <div class="container">
            <input type="text" placeholder="Email Address" value={id} onChange={display} />
            <input type="password" placeholder="Enter Password" value={password} onChange={displayp}/>
            <br />
            <button type="submit" onClick={dprint}>LOGIN</button>
            </div>
        </div>
    )

}
export default Login;