
import styles from './Loginn.module.css'
import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import axios from 'axios'


const Loginn = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const phone = location.state?.phone || ''
  const [password, setpassword] = useState('')
  const [otp, setotp] = useState('')

  const loginUser = async () => {
    try {
      const res = await axios.post(
        'http://192.168.1.49:3000/api/auth/login',
        { password, phone }
      )
      if (res.status === 200) {
        console.log('Login successfully', res)
        navigate('/', { state: res })
      }
    } catch (error) {
      console.error('error in login:', error)
      navigate('/loginn', { state: { phone } })
    }
  }

  // const verifyotp = async () => {
  //   try {
  //     const res = await axios.post(
  //       'https://unhortative-mayola-unsavagely.ngrok-free.dev/api/auth/verify-otp',
  //       { phone, otp }
  //     )
  //     console.log(res)
  //      navigate('/', { state: res })

  //   } catch (error) {
  //     console.error('Error verifying otp:', error)
  //      navigate('/loginn', { state: { phone } })
  //   }
  // }
  const verifyotp = async () => {
  try {
    const res = await axios.post(
      'https://unhortative-mayola-unsavagely.ngrok-free.dev/api/auth/verify-otp',
      { phone, otp }
    )
    console.log(' OTP Verify Response:', res)

    if (res.status === 200) {
      alert('OTP Verified Successfully!')
      navigate('/', { state: res.data }) 
    } else {
      console.warn('Unexpected response:', res.status)
    }

  } catch (error) {
    console.error(' Error verifying otp:', error)
    navigate('/loginn', { state: { phone } })
  }
}


  return (
    <div className={styles.mainLoginContainer}>
      <div className={styles.bgImage}></div>

      <div className={styles.LoginContainer}>
        <h1>Login with OTP</h1>
        <form className={styles.formGroup}>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setotp(e.target.value)}
          />
          <button onClick={(e) => { e.preventDefault(); verifyotp() }}>Verify OTP</button>
        </form>
      </div>
    </div>
  )
}

export default Loginn
