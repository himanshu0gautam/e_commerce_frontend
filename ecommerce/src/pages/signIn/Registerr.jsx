

import React, { useState } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

import styles from './Registerr.module.css'

const Registerr = () => {
  const location = useLocation()
  const { state } = location
  const [username, setusername] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  // const [otp, setotp] = useState('')
  const navigate = useNavigate();
  const phone  = state?.phone || ''
  const handleSignup = async () => {
    try {
      const res = await axios.post(
        'https://unhortative-mayola-unsavagely.ngrok-free.dev/api/auth/register',
        { username, email, password, phone: phone }
      )
      if (res.status === 200) console.log('Registered successfully')
        navigate("/")
        
    } catch (error) {
      console.error('Error fetching users:', error)
    }
  }

  
  return (
    <div className={styles.mainSignInContainer}>
      <div className={styles.bgImage}></div>

      <div className={styles.SignInContainer}>
        
        <form className={styles.form}>
          <h1>Create Account</h1>
           <div className={styles.phoneInput}>
              <span className={styles.prefix}>+91</span>
              <input type="phone" value={phone} readOnly />
          </div>
        <input type="text" value={username} placeholder='username' onChange={(e)=>setusername(e.target.value)}/>

        <input type="email" value={email} placeholder='email' onChange={(e)=>setemail(e.target.value)}/>

       <input type="password" value={password} placeholder='password' onChange={(e)=>setpassword(e.target.value)}/>

          <button onClick={(e) => { e.preventDefault(); handleSignup() }}>Sign Up</button>
        </form>
      </div>
    </div>
   
  )
}

export default Registerr



//9675698742