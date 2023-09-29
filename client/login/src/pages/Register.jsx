import { useState } from "react"
import axios from 'axios'
import './Register.css'

export default function Register() {
 const [name, setName] = useState("")
 const [email, setEmail] = useState("")
 const [pass, setPass] = useState("")
 let data = {
  name,
  email,
  pass
 }

function register(){
  console.log(data);
  axios.post("http://localhost:5000/register",data).then((res)=>{
    console.log(res.data);
  })
}
  return (
    <div className="divv">
        {/* <form onSubmit={registerUser}> */}
            <label>name</label><br></br>
            <input type="text" placeholder='enter name....' onChange={(e)=>setName(e.target.value)} /><br/>
            <label>email</label><br></br>
            <input type="text" placeholder='enter email....' onChange={(e)=>setEmail(e.target.value)}/><br/>
            <label>password</label><br></br>
            <input type="password" placeholder='enter password....' onChange={(e)=>setPass(e.target.value)}/><br/><br/>
            <button onClick={register}>submit</button>
        {/* </form> */}
    </div>
  )
}

