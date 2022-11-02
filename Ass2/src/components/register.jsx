import React, { useState } from 'react'

const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPass] = useState('')
    const [firstName, setFname] = useState('')
    const [lastName,setLname] = useState('')
    const [number,setNum] = useState('')

    const registerUser = () => {
        console.log(`firstName = ${firstName}`)
        console.log(`lastName = ${lastName}`)
        console.log(`email = ${email}`)
        console.log(`password = ${password}`)
        console.log(`number = ${number}`)
    }

    const readFname = (e) => {
        setFname(e.target.value)
    }

    const readLname = (e) => {
        setLname(e.target.value)
    }

    const readEmail = (e) => {
        setEmail(e.target.value)
    }

    const readPassword = (e) => {
        setPass(e.target.value)
    }

    const readNum = (e) => {
        setNum(e.target.value)
    }


  return (
    <div style={{padding:"50px"}}>
        <br />
        <div class="form-group" >
        <label htmlFor=''>First Name </label>
        <input class="form-control" onChange={readFname} type='text' placeholder='Enter the First Name' style={{width:"50%"}}/>
      </div>
      <br />
      <div class="form-group" >
        <label htmlFor=''>Last Name </label>
        <input class="form-control" onChange={readLname} type='text' placeholder='Enter the Last Name' style={{width:"50%"}}/>
      </div>
      <br />
      <div class="form-group" >
        <label htmlFor=''>Email </label>
        <input class="form-control" onChange={readEmail} type='email' placeholder='xxx@xxx.com' style={{width:"50%"}}/>
      </div>
      <br />
      <div class="form-group">
        <label htmlFor=''>Password </label>
        <input class="form-control" onChange={readPassword} type='password' placeholder='Enter Password' style={{width:"50%"}}/>
      </div>
      <br />
      <div class="form-group">
        <label htmlFor=''>Mobile Number </label>
        <input class="form-control" onChange={readNum} type='number' placeholder='Enter Mobile Number' style={{width:"50%"}}/>
      </div>
      <br />
      <div class="form-group">
        <button class="btn btn-primary" onClick={registerUser}>Register</button>
      </div>
    </div>
  )
}

export default Register