import React, { useEffect, useState } from "react";
import style from "./Auth.module.css";
import { useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";
import {LoginUser,checkuser} from '../../store/actions/UserAction'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from "react-toastify";

const Login = () => {
  const [phone, setphone] = useState("");
  
  const [password, setpassword] = useState('')
  const [showPassword, setShowPassword] = useState(false);

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
        setShowPassword(true)
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

  <section className={style.SignInContainer}>
    {/* Left side - Password login */}
    <form className={style.form} onSubmit={showPassword ? handelLogin : handelSubmit}>
      <img src={assets.logo}/>
      <div className={style.heading}>
        <h1>Welocome Back, Parter</h1>
      <p>Secure access to B2B account</p>
      </div>
      <div className={style.phoneInput}>
        <p className={style.prefix}>+91 |</p>
        <input type="text" placeholder="Phone" onChange={(e) => setphone(e.target.value)}  required/>
      </div>
      {showPassword && <div className={style.passwordInput}>
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
        {showPassword ? loading ? "loading..." : "login" : "continue"}
      </button>
    </form>
    

    {/* Right side - OTP Signup */}
    <form className={style.form}>
      <h1>Login & SignUp</h1>
      <div className={style.phoneInput}>
        <p className={style.prefix}>+91 |</p>
        <input type="text" placeholder="Phone" onChange={(e) => setphone(e.target.value)} required />
      </div>
      <div className={style.radio}>
        <input type="checkbox" id="terms" />
        <label htmlFor="terms">
          <p>
            By continuing, I agree to <span>Terms of Use</span> &{" "}
            <span>Privacy Policy</span> and I am above 18 years old.
          </p>
        </label>
      </div>
      <button>Continue</button>
      <p >Have trouble logging in? <span>Get help</span></p>
    </form>

  </section>
  </main>
  )

};

export default Login;
