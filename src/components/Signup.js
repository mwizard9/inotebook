import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const[credentials, setCredentials] = useState({name:"",email:"",password:"",cpassword:""})  
    let history = useNavigate()
    const handleSubmit= async(e)=>{
        e.preventDefault();
        const{name,email,password} = credentials;
        const response = await fetch("http://localhost:5000/api/auth/createUser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
         },
      body: JSON.stringify({name,email,password})
    });
    const json=await response.json()
    console.log(json)
    if (json.success){
        //save the auth token and redirect
        localStorage.setItem('token',json.jwtData);
        history("/")
    }
    else{
        alert("invalid credentials")
    }
        
    }

    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }
  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
    <input type="text" className="form-control" name="name" id="name" onChange={onChange} aria-describedby="emailHelp"/>

  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" name="email" onChange={onChange}  aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" onChange={onChange} name="password"  id="password"minLength={5} required/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Conform Password</label>
    <input type="password" className="form-control" onChange={onChange} name="password"  id="cpassword" minLength={5} required/>
  </div>
 
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Signup
