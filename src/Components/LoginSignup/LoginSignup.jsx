import React from 'react'
import './LoginSignup.css'
import user_icon from '../Assets/person.png'
import password_icon from '../Assets/password.png'
import emal_icon from '../Assets/email.png'
import { useState } from "react";




export const LoginSignup = () => {

  const[action,setAction]=useState("Login")
  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action==="Login"?<div></div>:<div className="input">
          <img src={user_icon} alt="" />
          <input type="text" placeholder='NAME' />
        </div>}
         <div className="input">
          <img src={emal_icon} alt="" />
          <input type="email" placeholder='EMAIL' />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder='PASSWORD'/>
        </div>
      </div>
      {action==="Sign Up"?<div></div>:<div className="forgot-password">Lost password <span>click here</span></div>}
      <div className="submit-container">
        <div className={action=="Sign Up"?"submit":"gray submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
        <div className={action==="Login"?"submit": "gray submit"} onClick={()=>{setAction("Login")}}>Login</div>
      </div>
    </div>
  )
}
