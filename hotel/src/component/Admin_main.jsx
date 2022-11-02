import React from 'react'
import { Link } from 'react-router-dom'

const Admin_main = () => {
  return (
    <div><nav class="navbar navbar-expand-lg" style={{backgroundColor: '#e3f2fd'}}>
    <div class="container-fluid">
    
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <Link class="nav-link active" aria-current="page" to='/'>Home</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to='/Add_hotel'>Add  Hotel</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to='/Existing_Hotel'>Existing Hotel</Link>
          </li>
          
          <li class="nav-item">
            <Link class="nav-link active" to='/'>Logout</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav></div>
  )
}

export default Admin_main