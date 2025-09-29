import React, { useState } from "react";
import style from "./Auth.module.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [mobile,setMobile] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e)=>{
    e.preventDefault();
    if(mobile.length === 10){
      navigate("/auth/userdetails",{state :{mobile}})
    }
    else{
      alert("Please enter a valid number");
    }
  }
  return (
  <main className={style.mainSignInContainer}>
  <div className={style.bgImage}></div> {/* background only */}

  <section className={style.SignInContainer}>
    <form className={style.form} onSubmit={handleSubmit}>
      <h1>Login & SignUp</h1>

      <div className={style.phoneInput}>
        <p className={style.prefix}>+91 | </p>
        <input
          type="tel"
          placeholder="Mobile Number"
          pattern="[0-9]{10}"
          maxLength={10}
          value={mobile}
          onChange={(e)=> setMobile(e.target.value)}
          required
        />
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

      <button type="submit" >Continue</button>

      <p>
        Have trouble logging in? <span>Get help</span>
      </p>
    </form>
  </section>
</main>

  );
};

export default Login;
