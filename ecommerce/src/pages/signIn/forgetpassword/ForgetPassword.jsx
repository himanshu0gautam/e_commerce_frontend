import React, { useState } from 'react'
import style from './ForgetPassowrd.module.css'
import {userSendOtpForgetPassword} from '../../../store/actions/UserAction'
import { useDispatch } from 'react-redux'

const ForgetPassword = () => {
    const dispatch = useDispatch()
    const [phone, setphone] = useState()

    const handelSendOtp = (e) => {
        e.preventDefault()
        dispatch(userSendOtpForgetPassword({phone:phone}))

    }

  return (
    <main className={style.mainSignInContainer}>
      <div className={style.bgImage}></div>
    
        {/* Left side - Password login */}
        <form className={style.form} onSubmit={handelSendOtp}>
          {/* <img/> */}
          <div className={style.heading}>
            <h1>Reset Password</h1>
          <p>Please Enter your mobile Number and we'll send a OTP to reset your passowrd</p>
          </div>
          <div className={style.phoneInput}>
            <input type="tel"
             maxLength="10" 
            pattern="\d{10}" 
            oninput="this.value = this.value.replace(/[^0-9]/g, '')" 
            onChange={(e)=> setphone(e.target.value)}
            required/>
            <label for="phone">Enter your Phone number</label>
          </div>

          <button type="submit">
            {/* {showPassowrd ? loading ? "loading..." : "login" : "continue"}
             */}
             send OTP
          </button>
        </form>
      </main>
  )
}

export default ForgetPassword