import React, { useEffect, useState } from "react";
import style from "./Auth.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [phone, setphone] = useState("");
  const [password, setpassword] = useState('')

  const navigate = useNavigate();

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
<<<<<<< HEAD
        console.log('Login successfully', res)
        navigate('/', { state: res.data })
      }
=======
    console.log("Login successfully", res);
    // localStorage.setItem("token", res.data.token); // Save token
}
>>>>>>> 292677021b957bf3b537a13b5990b10c40b8d45e
    } catch (error) {
      console.error('error in login:', error)
      navigate('/auth/login')
    }
  }
<<<<<<< HEAD
  const gotoLogin = () => {
    navigate('/loginn')
  }
=======
<<<<<<< HEAD
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
=======
    // const gotoLogin = ()=>{
    //   navigate('/login')
    // }
>>>>>>> 35b1c819b722d5b3d293473ec72781184eebb574
>>>>>>> 292677021b957bf3b537a13b5990b10c40b8d45e

  return (
    <main className={style.mainSignInContainer}>
      <div className={style.bgImage}></div>

<<<<<<< HEAD
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
=======
  <section className={style.SignInContainer}>
    {/* Left side - Password login */}
    <form className={style.form}>
      <h1>Login</h1>
      <div className={style.phoneInput}>
        <p className={style.prefix}>+91 |</p>
        <input type="text" placeholder="Phone" onChange={(e) => setphone(e.target.value)}  required/>
      </div>
      <div className={style.phoneInput}>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
      </div>
      <div className={style.fgtdiv}>
        <p className={style.fgt} onClick={(e)=>{e.preventDefault();handlefgtpsswd()}}>forgot password ?</p>
      </div>
      <button onClick={(e) => { e.preventDefault(); loginUser() }}>Login</button>

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
>>>>>>> 292677021b957bf3b537a13b5990b10c40b8d45e

  );
};

export default Login;
