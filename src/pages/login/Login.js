import React from 'react'
import { useState } from 'react'


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
        // navigate.push("/");
  

    }


  return (
    <div style={{ display:"flex",flexDirection:"column",height:"100vh",alignItems:"center",justifyContent:"center"}}>
        <input style={{margin:"20px",padding:"10px"}}type="text" placeholder='username' onChange={(e)=>setUsername(e.target.value)}/>

        <input  style={{margin:"20px",padding:"10px"}} type="password" placeholder='password' onChange={(e)=>setPassword(e.target.value)} />
        <button style={{padding:10,width:100}} onClick={handleClick}>Login</button>
    </div>
  )
}

export default Login