import React from 'react'
import {useNavigate} from 'react-router-dom'
import './Home.css'

function Home() {
  let nav = useNavigate()
  return (
    <div >
     
    
      <nav>
      <h3 style={{color:"white"}}>LOGIN HERE, IF YOU ALREADY HAVE AN ACCOUNT</h3>
      
      <button onClick={()=>nav('/Login')}>login</button><br></br><br></br>
      <hr style={{color:"white", width:"800px" ,height:"5px"}}></hr>
      <h3 style={{color:"white"}}>REGISTER YOUR ACCOUNT BELOW</h3>
      <button onClick={()=>nav('/Register')}>Register</button>
      
      </nav>
    
    </div>
  )
}

export default Home
