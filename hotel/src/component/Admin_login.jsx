import React from 'react'
import "../css/admin.css"
import { Link } from 'react-router-dom'
const Admin_login = () => {
  return (
    <div>
 

<form className='AdminForm'>

	<h2>Admin Login</h2>

	<input type="text" name="username" class="text-field" placeholder="Username" />
    <input type="password" name="password" class="text-field" placeholder="Password" />
    
  <Link to="/Admin_main"><input type="button"  class="button" value="Log In" /></Link>
  <Link to="/Register"><input type="button"  class="button" value="Register" /></Link>
</form>


    </div>
  )
}

export default Admin_login
