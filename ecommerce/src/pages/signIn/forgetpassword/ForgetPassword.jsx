import React, { useEffect, useState } from 'react'
import style from './ForgetPassowrd.module.css'
import {userSendOtpForgetPassword} from '../../../store/actions/UserAction'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {setPhone} from '../../../store/slices/User.slice'

const ForgetPassword = () => {
    const dispatch = useDispatch()
    const [phone, setphone] = useState()
   const {OTPSend} =  useSelector(state => state.user)
  const navigate =  useNavigate()

   console.log(OTPSend);
   

    const handelSendOtp = (e) => {
        e.preventDefault()
        dispatch(userSendOtpForgetPassword({phone:phone}))
        dispatch(setPhone(phone))
    }

    useEffect(() => {
      if(OTPSend){
        navigate('/auth/verify-OTP')
      }
    }, [navigate,OTPSend])
    

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