import React from 'react'
import { useState } from 'react'
import "./login.css";

import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { login } from '../../redux/apiCalls';
const Login = () => {
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const navigate=useHistory();
    const dispatch=useDispatch();


    const handleClick=(e)=>{
        e.preventDefault();
        login(dispatch,{username,password});
    
  

    }


  return (
    <div className='container'>
    <div className='wrapper'>
    <form>
    <div >
      <h2>Login</h2>
    </div>
    <div className='input'>
        <input size="50"  type="text" placeholder='username' onChange={(e)=>setUsername(e.target.value)}/>
      </div>
      <div className='input'>

        <input size="50" type="password" placeholder='password' onChange={(e)=>setPassword(e.target.value)} />
    
        </div> 
    <div className='btn'>
        <button  onClick={handleClick}>Login</button>
        </div>
      </form>
    </div>
 
    </div>
  )
}

export default Login