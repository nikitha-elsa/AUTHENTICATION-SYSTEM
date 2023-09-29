import { Link } from "react-router-dom"
import React from 'react'

export default 
function Navbar() {
  return (
    <nav>
       <Link to='/'><button style={{color:white}}>home</button></Link>
       {/* <Link to='/Register'>Register</Link>
       <Link to='/Login'>Login</Link>
        */}
    </nav>
  )
}

