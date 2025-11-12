import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './login.css'
import { BsCCircle } from "react-icons/bs";
function Logins() {
    const [name,setName]=useState()
    const [password,setPassword]=useState()
    const navigate=useNavigate()
  const handleLogin = () => {
    if(!name && !password){
      alert("please enter the details")
      return
    }
    navigate('/list')
  }

  return (
    <><h1 className='se'>student login</h1>
    <div className='boxs'>
        <input type="email" placeholder='Username@gmail.com' onChange={(name)=>{setName(name.target.value)}} />
        <br />

 <input type="password" placeholder='......' onChange={(password)=>{setPassword(password.target.value)}} />
        <br />
        <button onClick={()=>{handleLogin()} }>Login To Access  </button>
        <p>All Rights Are Reserved </p>
        <p>copyright <BsCCircle /> at  {new Date().getFullYear()} 
</p>
<button onClick={()=>navigate('/about')}>About Us</button>
    </div></>
  )
}

export default Logins