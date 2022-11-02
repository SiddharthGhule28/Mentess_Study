import React, { useState } from 'react'
import "../css/main.css"
const Register = () => {
    const [first, setFName] = useState('')
    const [last, setLName] = useState('')
    const [email, setEmail] = useState('')
    const [user, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [repassword, setREPassword] = useState('')

    const validateUser = ()=>{
        console.log(`first name = ${first}`)
        console.log(`last name = ${last}`)
        console.log(`email = ${email}`)
        console.log(`username= ${user}`)
        console.log(`password = ${password}`)
        console.log(`Re password = ${repassword}`)
    }
    const readFName = (e) =>{
        setFName(e.target.value)
    } 
    const readLName = (e) =>{
        setLName(e.target.value)
    } 
    const readEmail = (e) =>{
        setEmail(e.target.value)
    } 
    const readUsername = (e) =>{
        setUsername(e.target.value)
    } 
    const readPassword = (e) =>{
        setPassword(e.target.value)
    } 
    const readREPassword = (e) =>{
        setREPassword(e.target.value)
    } 
  return (
    <div className='display'>
        <section className='h-100 gradient-form '>
            <div className='container py-5 h-100'>
                {/* <div className='justify-content-center algin-item-center'> */}
                   
                        <div className='card rounded-3 text-black'>
                           
                                <div>
                                    <div className='card-body  mx-md-4'>
                                        <div className='text-center'>
                                            
                                            <h4>Register</h4>
                                            <br/>
                                            </div>
                                            
                                            <form>
                                            <div className='form-outline mb-4'>
                                                
                                                <label className='form-label' form='form2Example11'  for="validationCustomUsername">First name</label>
                                                    <input onChange={readFName}  type={Text} id='form2Example11' className='form-control' placeholder='First Name'/>
                                                    <span></span>
                                                <label className='form-label' form='form2Example11'  for="validationCustomUsername">Last name</label>
                                                    <input onChange={readLName}  type={Text} id='form2Example11' className='form-control' placeholder='Phone number or email id'/>
                                                    
                                                </div>
                                                <div className='form-outline mb-4'>
                                                <label className='form-label' form='form2Example11'  for="validationCustomUsername">Email</label>
                                                    <input onChange={readEmail}  type={email} id='form2Example11' className='form-control' placeholder='Phone number or email id'/>
                                                    
                                                </div>
                                                <div className='form-outline mb-4'>
                                                <label className='form-label' form='form2Example11'  for="validationCustomUsername">Username</label>
                                                    <input onChange={readUsername}  type={email} id='form2Example11' className='form-control' placeholder='Phone number or email id'/>
                                                    
                                                </div>
                                                <div className='form-outline mb-4'>
                                                <label className='form-label' form='form2Example22'>Password</label>
                                                    <input onChange={readPassword}  type={password} id='form2Example22' className='form-control' placeholder='********'/>
                                     
                                                </div>
                                                <div className='form-outline mb-4'>
                                                <label className='form-label' form='form2Example22'>RE-Password</label>
                                                    <input onChange={readREPassword}  type={password} id='form2Example22' className='form-control' placeholder='********'/>
                                     
                                                </div>
                                                <div className='text-center pt-1 mb-5 pb-1 d-grid gap-2 col-6 mx-auto'>
                                                    <button onClick={validateUser} className='btn btn-primary btn-block btn-lg fa-lg gradient-custom-2 mb-3' type='button'>Sign Up</button>
                                                    

                                                </div>
                                                

                                                    
                                            </form>
                                        </div>
                                    </div>
                                   
                                </div>
                            </div>
                       
             
        </section>

        </div>
    



  )
}

export default Register