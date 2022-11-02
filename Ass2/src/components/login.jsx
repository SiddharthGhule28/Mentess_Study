import React, { useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const validateUser = () => {
    console.log(`email = ${email}`)
    console.log(`password = ${password}`)
  }

  const readEmail = (e) => {
    setEmail(e.target.value)
  }

  const readPassword = (e) => {
    setPassword(e.target.value)
  }

  return (
    <div style={{padding:"50px"}}>
        <br />
      <div class="form-group" >
        <label htmlFor=''>Email </label>
        <input class="form-control" onChange={readEmail} type='email' placeholder='xxx@xxx.com' style={{width:"50%"}}/>
      </div>
      <br />
      <div class="form-group">
        <label htmlFor=''>Password </label>
        <input class="form-control" onChange={readPassword} type='password' style={{width:"50%"}}/>
      </div>
      <br />
      <div class="form-group">
        <button class="btn btn-primary" onClick={validateUser}>Login</button>
      </div>
    </div>
  )
}

export default Login