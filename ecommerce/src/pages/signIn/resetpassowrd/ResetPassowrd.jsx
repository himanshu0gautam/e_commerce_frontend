import React, { useEffect, useState } from "react";
import style from "./ResetPassword.module.css";
import { useDispatch, useSelector } from "react-redux";
import { userResetpassowrd } from "../../../store/actions/UserAction";
import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify'

const ResetPassowrd = () => {
    const [password, setpassword] = useState()
    const [confirmPassword, setconfirmPassword] = useState()
   const dispatch =  useDispatch()
  const { phone,resetPassowrd,forgetPasswordError } = useSelector((state) => state.user);
  const navigate = useNavigate()
  const [error, seterror] = useState("")

  const handelSubmit =(e) => {
    e.preventDefault()
    if(password === confirmPassword){
        dispatch(userResetpassowrd({
            phone:phone,
            newPassword:confirmPassword
        }))
    }else{
        seterror("password is missmatch")
        toast.error(forgetPasswordError)
    }
  }

  useEffect(() => {
    if(resetPassowrd){
        navigate('/auth/login')
    }
  }, [navigate,resetPassowrd])
  

  return (
    <main className={style.mainSignInContainer}>
      <div className={style.bgImage}></div>

      {/* Left side - Password login */}
      <form className={style.form} onSubmit={handelSubmit}>
        {/* <img src={verifyOtpImage} /> */}
        <div className={style.heading}>
          <h1>Reset Password</h1>
          <p>
            Please enter your new password below. Make sure it’s strong and easy
            for you to remember.
          </p>
        </div>

        <div className={style.passwordContainer}>
          <p>{phone}</p>
          <div className={style.password}>
            <label>New Password</label>
            <input type="password" placeholder="Enter new Password" onChange={(e) => setpassword(e.target.value)}/>
            <span>{error}</span>
          </div>
          <div className={style.password}>
            <label>Confirm Passoword</label>
            <input type="password" placeholder="Enter confirm Password" onChange={((e) => setconfirmPassword(e.target.value))}/>
          </div>
        </div>
        <button type="submit">Reset password</button>
      </form>
    </main>
  );
};

export default ResetPassowrd;
