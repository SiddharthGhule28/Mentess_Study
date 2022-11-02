import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap'
const Home = () => {
  return (
    <div>
    <ul class="nav nav-tabs">
  <li class="nav-item">
    <Link class="nav-link" aria-current="page" to='/'>Home</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link" aria-current="page" href="#">About</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link" aria-current="page" href="#">Contact us</Link>
  </li>
  <div class="dropdown">
  <Link class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
   Login
  </Link>
  <ul class="dropdown-menu">
    <li><Link to="/Login"><button class="dropdown-item" type="button">User Login</button></Link></li>
    <li><Link to="/Admin_Login"><button class="dropdown-item" type="button">Admin Login </button></Link></li>
  </ul>
</div>
</ul>
    </div>
  )
}

export default Home