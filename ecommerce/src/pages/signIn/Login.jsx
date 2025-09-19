import React from "react";
import style from "./Auth.module.css";

const Login = () => {
  return (
    <main className={style.mainSignInCOntainer}>
      <section className={style.SignInContainer}>
        <img
          src="https://images.pexels.com/photos/3696755/pexels-photo-3696755.jpeg"
          alt="Login banner"
        />
        <form className={style.form}>
          <h1>Login & SignUp</h1>

          <div className={style.phoneInput}>
            <p className={style.prefix}>+91 | </p>
            <input
              type="tel"
              placeholder="Mobile Number"
              pattern="[0-9]{10}"
              maxLength={10}
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

          <button type="submit">Continue</button>

          <p>
            Have trouble logging in? <span>Get help</span>
          </p>
        </form>
      </section>
    </main>
  );
};

export default Login;
