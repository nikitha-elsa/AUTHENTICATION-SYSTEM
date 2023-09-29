import React from 'react'
import { useState } from 'react';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import './Home'
export default function Login() {
let nav = useNavigate()
  // const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  let data = {   
   email,
   pass
  }
 
 function loginn(){
   console.log(data);
   axios.post("http://localhost:5000/checkuser",data).then((res)=>{
     console.log(res.data);
     if(res.data){
      alert("user exist")
     }
     else{
      alert("wrong username or passeword")
     }
   })
 }



  return (
    <div className='divv'>
        {/* <form onSubmit={loginUser}> */}
        <label>email</label><br></br>
            <input type="email" placeholder='enter email....' onChange={(e)=>setEmail(e.target.value)}/><br/>
            <label>password</label>
            <input type="password" placeholder='enter password....' onChange={(e)=>setPass(e.target.value)}/><br/><br/>
            <button onClick={loginn}>Login</button>
        {/* </form> */}
    </div>
  )}