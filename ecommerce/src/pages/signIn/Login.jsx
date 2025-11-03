import React, { useEffect, useState } from "react";
import style from "./Auth.module.css";
import { useNavigate } from "react-router-dom";
import loginBg from "../../../assists/mainLogo.png";

const Login = () => {
  const [phone, setphone] = useState("");
  const [password, setpassword] = useState('')
  const [showPassowrd, setshowPassowrd] = useState(false)

  const navigate = useNavigate();

 
  return (
   <main className={style.mainSignInContainer}>
  <div className={style.bgImage}></div>

    {/* Left side - Password login */}
    <form className={style.form}>
      <img src={loginBg} alt="" srcset="" />
      <h1>Login</h1>
      <div className={style.phoneInput}>
        <p className={style.prefix}>+91 </p>
        <input type="text" placeholder="Phone" onChange={(e) => setphone(e.target.value)}  required/>
      </div>
      <div className={style.passwordInput}>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
      <div className={style.fgtdiv}>
        <p className={style.fgt} onClick={(e)=>{e.preventDefault();handlefgtpsswd()}}>forgot password</p>
      </div>
      </div>
      <button onClick={(e) => { e.preventDefault(); loginUser() }}>Login</button>

    </form>
  </main>
  )

};

export default Login;
