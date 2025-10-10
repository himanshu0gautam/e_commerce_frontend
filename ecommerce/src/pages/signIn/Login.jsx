import React, { useState } from "react";
import style from "./Auth.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [phone, setphone] = useState("");
  const [password, setpassword] = useState('')
  
  const navigate = useNavigate();

const handleOtp = async()=>{
        try {
            const res = await axios.post("https://unhortative-mayola-unsavagely.ngrok-free.dev/api/auth/send-otp",{phone})
            if(res.status === 200){
                console.log("otp sent sucessfully");
                navigate("/loginn",{state :{ phone : phone}})
            }
        } catch (error) {
            console.error('Error sending otp:',error)
            
               
                navigate("/registerr",{state : { phone : phone}})
            
        }

    }

   const loginUser = async () => {
    try {
      const res = await axios.post(
        'https://unhortative-mayola-unsavagely.ngrok-free.dev/api/auth/login',
        { password, phone }
      )
      if (res.status === 200) {
        console.log('Login successfully', res)
        navigate('/',{ state : res.data})
      }
    } catch (error) {
      console.error('error in login:', error)
      navigate('/auth/login')
    }
  }
    const gotoLogin = ()=>{
      navigate('/loginn')
    }

  return (
   <main className={style.mainSignInContainer}>
  <div className={style.bgImage}></div>

  <section className={style.SignInContainer}>
    {/* Left side - Password login */}
    <form className={style.form}>
      <h1>Login</h1>
      <div className={style.phoneInput}>
        <p className={style.prefix}>+91 |</p>
        <input type="text" placeholder="Phone" onChange={(e) => setphone(e.target.value)} />
      </div>
      <div className={style.phoneInput}>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
      </div>
      <button onClick={(e) => { e.preventDefault(); loginUser() }}>Login</button>
    </form>

    {/* Right side - OTP Signup */}
    <form className={style.form}>
      <h1>Login & SignUp</h1>
      <div className={style.phoneInput}>
        <p className={style.prefix}>+91 |</p>
        <input type="text" placeholder="Phone" onChange={(e) => setphone(e.target.value)} />
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
      <p>Have trouble logging in? <span>Get help</span></p>
    </form>
  </section>
</main>

  );
};

export default Login;
