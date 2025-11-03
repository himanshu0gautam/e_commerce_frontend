import React, { useEffect, useState } from "react";
import style from "./Auth.module.css";
import { useNavigate } from "react-router-dom";
<<<<<<< HEAD
import loginBg from "../../../assists/mainLogo.png";
import {LoginUser,checkuser} from '../../store/actions/UserAction'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from "react-toastify";
=======
import axios from "axios";
>>>>>>> f5e366afbb295a6b3ae991e37c60694197deaaf5

const Login = () => {
  const [phone, setphone] = useState("");
  
  const [password, setpassword] = useState('')

 const {userExist,error,user,loading} = useSelector(state => state.user)
 const dispatch = useDispatch()

  const navigate = useNavigate();

<<<<<<< HEAD
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
  

 
=======
  const handleOtp = async () => {
    try {
      const res = await axios.post("https://unhortative-mayola-unsavagely.ngrok-free.dev/api/auth/send-otp", { phone })
      if (res.status === 200) {
        console.log("otp sent sucessfully");
        navigate("/loginn", { state: { phone: phone } })
      }
    } catch (error) {
      console.error('Error sending otp:', error)


      navigate("/registerr", { state: { phone: phone } })

    }

  }

  const loginUser = async () => {
    try {
      const res = await axios.post(
        'http://192.168.1.49:3000/api/auth/login',
        { password, phone },
        {withCredentials:true}
      )
      if (res.status === 200) {
    console.log("Login successfully", res);
    // localStorage.setItem("token", res.data.token); // Save token
}
    } catch (error) {
      console.error('error in login:', error)
      navigate('/auth/login')
    }
  }
    const gotoLogin = ()=>{
      navigate('/loginn')
    }
    const handlefgtpsswd = async()=>{
      try {
        if(phone === ''){
          console.log("number is required")
          return 
        }
        const res = await axios.post("https://unhortative-mayola-unsavagely.ngrok-free.dev/api/auth/forgetpassword ",{phone})
        if(res.status === 200){
          console.log("Forget Password Otp sent");
        }
      } catch (error) {
        console.error('Something went wrong:', error)
        navigate('/auth/login')
      }
    }

>>>>>>> f5e366afbb295a6b3ae991e37c60694197deaaf5
  return (
   <main className={style.mainSignInContainer}>
  <div className={style.bgImage}></div>

  <section className={style.SignInContainer}>
    {/* Left side - Password login */}
<<<<<<< HEAD
    <form className={style.form} onSubmit={showPassowrd ? handelLogin : handelSubmit}>
      <img src={loginBg}/>
      <div className={style.heading}>
        <h1>Welocome Back, Parter</h1>
      <p>Secure access to B2B account</p>
      </div>
=======
    <form className={style.form}>
      <h1>Login</h1>
>>>>>>> f5e366afbb295a6b3ae991e37c60694197deaaf5
      <div className={style.phoneInput}>
        <p className={style.prefix}>+91 |</p>
        <input type="text" placeholder="Phone" onChange={(e) => setphone(e.target.value)}  required/>
      </div>
<<<<<<< HEAD
      {showPassowrd && <div className={style.passwordInput}>
=======
      <div className={style.phoneInput}>
>>>>>>> f5e366afbb295a6b3ae991e37c60694197deaaf5
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
<<<<<<< HEAD
      <div className={style.fgtdiv}>
        <p className={style.fgt} onClick={handelForgetpassword}>forgot password</p>
      </div>
      </div>}
      <button type="submit">
        {showPassowrd ? loading ? "loading..." : "login" : "continue"}
      </button>
=======
      </div>
      <div className={style.fgtdiv}>
        <p className={style.fgt} onClick={(e)=>{e.preventDefault();handlefgtpsswd()}}>forgot password ?</p>
      </div>
      <button onClick={(e) => { e.preventDefault(); loginUser() }}>Login</button>

>>>>>>> f5e366afbb295a6b3ae991e37c60694197deaaf5
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
      <button onClick={(e) => { e.preventDefault(); handleOtp() }}>Continue</button>
      <p >Have trouble logging in? <span>Get help</span></p>
    </form>

  </section>
  </main>
  )

};

export default Login;
