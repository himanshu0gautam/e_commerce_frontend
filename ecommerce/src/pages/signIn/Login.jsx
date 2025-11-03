import React, { useEffect, useState } from "react";
import style from "./Auth.module.css";
import { useNavigate } from "react-router-dom";
import loginBg from "../../../assists/mainLogo.png";
import {LoginUser,checkuser} from '../../store/actions/UserAction'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from "react-toastify";

const Login = () => {
  const [phone, setphone] = useState("");
  
  const [password, setpassword] = useState('')
  const [showPassowrd, setshowPassowrd] = useState(false)

 const {userExist,error,user,loading} = useSelector(state => state.user)
 const dispatch = useDispatch()

  const navigate = useNavigate();

  const handelSubmit = (e) => {
    e.preventDefault()
    if(!phone){
      alert("phone is required")
      return
    }
    dispatch(checkuser({phone:phone}))
  }
  

  const handelLogin = (e) =>{
    e.preventDefault()

    if(!password){
      alert("password is required")
      return
    }
    dispatch(LoginUser({phone:phone,password:password}))
  }

  
  useEffect(() => {
    if(userExist){
      if(userExist.exists){
        setshowPassowrd(true)
      }else{
        navigate('/auth/registerr')
      }
    }

    if(user){
      if(user.login){
        navigate('/')
      }else{
        toast.error(error)
      }
    }

  }, [userExist,navigate,user])
  


  const handelForgetpassword = () => {
    nav
  }
  

 
  return (
   <main className={style.mainSignInContainer}>
  <div className={style.bgImage}></div>

    {/* Left side - Password login */}
    <form className={style.form} onSubmit={showPassowrd ? handelLogin : handelSubmit}>
      <img src={loginBg}/>
      <div className={style.heading}>
        <h1>Welocome Back, Parter</h1>
      <p>Secure access to B2B account</p>
      </div>
      <div className={style.phoneInput}>
        <p className={style.prefix}>+91 </p>
        <input type="text" placeholder="Phone" onChange={(e) => setphone(e.target.value)}  required/>
      </div>
      {showPassowrd && <div className={style.passwordInput}>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
      <div className={style.fgtdiv}>
        <p className={style.fgt} onClick={handelForgetpassword}>forgot password</p>
      </div>
      </div>}
      <button type="submit">
        {showPassowrd ? loading ? "loading..." : "login" : "continue"}
      </button>
    </form>
  </main>
  )

};

export default Login;
