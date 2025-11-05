import React from 'react'
import style from './VerifyForgetOtp.module.css'
const VerifyForgetOtp = () => {
  return (
     <main className={style.mainSignInContainer}>
          <div className={style.bgImage}></div>
        
            {/* Left side - Password login */}
            <form className={style.form} >
              {/* <img/> */}
              <div className={style.heading}>
                <h1>Reset Password</h1>
              <p>Please Enter your mobile Number and we'll send a OTP to reset your passowrd</p>
              </div>
              <div className={style.phoneInput}>
                <input type="tel"
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

export default VerifyForgetOtp