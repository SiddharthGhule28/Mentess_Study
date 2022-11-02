import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import "../css/admin.css"
const Login = () => {
    const [email, setEmail] = useState('')
    
    const [password, setPassword] = useState('')

    const validateUser = ()=>{
        console.log(`email = ${email}`)
        console.log(`password = ${password}`)
    }
    const readEmail = (e) =>{
        setEmail(e.target.value)
    } 
    const readPassword = (e) =>{
        setPassword(e.target.value)
    } 
  return (


                                          <div className='container'>
                                            
                                            <form className='AdminForm'>

                                            <h2>UserLogin</h2>

                                            <input type="text" name="username" class="text-field" placeholder="Username" />
                                            <input type="password" name="password" class="text-field" placeholder="Password" />

                                            <Link to="/Main"><input type="button"  class="button" value="Log In" /></Link>                       
                                            <Link to="/Register"><input type="button"  class="button" value="Register" /></Link>

                                         </form>
                                         </div>
                      
    



  )
}

export default Login