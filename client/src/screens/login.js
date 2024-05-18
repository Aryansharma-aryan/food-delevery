import React,{useState} from 'react'
import { Link,useNavigate} from "react-router-dom";



export default function Login() {
  const [credentials,setcredentials]=useState({email:"",password:""})
  let navigate=useNavigate()
  
  const handleSubmit = async(e) => {
    e.preventDefault();
    const response=await fetch("http://localhost:7000/api/login", {
      method:'POST' ,
      headers: {
        'Content-Type':'application/json'

      },
      body:JSON.stringify(
        {email:credentials.email,password:credentials.password}
      )
    })
    const json=await response.json()
    console.log(json)
    if(!json.success) {
      alert("enter valid credentials")
    }
    if(json.success) {
      localStorage.setItem("userEmail",credentials.email)
      localStorage.setItem("authToken",json.authToken)
      console.log(localStorage.getItem("authToken"))
      navigate("/")
    }

   
  }

  const onChange = (event) => {
    setcredentials({...credentials,[event.target.name] : event.target.value})
  }



 

  
  return (
    <div>
       <form onSubmit={handleSubmit}>
    
      <label>
        Email:
        <input type="email" name='email' value={credentials.email} onChange={onChange} />
      </label>
      <label>
        Password:
        <input type="password"name='password' value={credentials.password} onChange={onChange} />
      </label>
      <button type="submit">Sign Up</button>
      <Link to="/creatuser">i am a new user</Link>
    </form>
 
      
    </div>
  )
}
