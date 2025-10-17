import React, { useState } from 'react'
import style from '../sendotp/ForGetPassword.module.css'
import {useDispatch,useSelector} from 'react-redux'
import {selleSendOtpForgetPassword} from '../../../../store/actions/SellerAction'
import { useNavigate } from 'react-router-dom'

const ForGetPassword = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {loading,error,success} = useSelector(state => state.seller)
  const [sendOtp, setsendOtp] = useState({
    phone:""
  })

  const hendelSubmit =async (e) => {
    e.preventDefault()
    const res =await dispatch(selleSendOtpForgetPassword(sendOtp))
    if (res?.payload?.message === "OTP sent successfully") {
    navigate("/seller/verify-otp", { state: { phone: sendOtp.phone } });
  }
  }


  return (
    <div className={style.sellerForgetPasswordContainer}>
        <div className={style.bgImage}></div>
        <div className={style.sellerForgetPasswordInnerContainer}>
            <h1>Forget Password</h1>
            <form onSubmit={hendelSubmit}>
                <input type="text" placeholder='Enter phone Number To Send OTP' onChange={(e) => setsendOtp({...sendOtp,phone:e.target.value})}/>
                <button type='submit'>{loading ? "Sending... OTP" : "Send OTP"}</button>
                 {error && <p style={{ color: "red" }}>{error}</p>}
                  {success && <p style={{ color: "green" }}>Send OTP Successful!</p>} 
            </form>
        </div>
    </div>
  )
}

export default ForGetPassword