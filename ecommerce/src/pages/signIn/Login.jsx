import React, { useState, useEffect } from "react";
import style from "./Auth.module.css";
import { useNavigate } from "react-router-dom";
// import loginBg from "../../../assists/mainLogo.png";
import { assets } from "../../assets/assets";
import { LoginUser, checkuser } from "../../store/actions/UserAction";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const Login = () => {
  const [phone, setphone] = useState("");
  const [password, setpassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { userExist, error, user, loading } = useSelector(
    (state) => state.user || {}
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!phone) return alert("Phone is required");
    dispatch(checkuser({ phone }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!password) return alert("Password is required");
    dispatch(LoginUser({ phone, password }));
  };

  const handelRouteToForget = () => {
    navigate('/auth/send-OTP')
  }

  useEffect(() => {
    if (userExist) {
      if (userExist.exists) setShowPassword(true);
      else navigate("/auth/register");
    }
    if (user?.login) navigate("/");
    else if (error) toast.error(error);
  }, [userExist, user, error, navigate]);

  return (
    <main className={style.mainSignInContainer}>
      <div className={style.bgImage}></div>

      <form
        className={style.form}
        onSubmit={showPassword ? handleLogin : handleSubmit}
      >
        <img src={assets.Logo} alt="Login" />
        <div className={style.heading}>
          <h1>Welcome Back, Partner</h1>
          <p>Secure access to your B2B account</p>
        </div>

        <div className={style.phoneInput}>
          <p className={style.prefix}>+91 </p>
          <input
            type="tel"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setphone(e.target.value)}
            required
            maxLength={10}
            pattern="\d{10}"
          />
        </div>

        {showPassword && (
          <div className={style.passwordInput}>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
            <p className={style.fgt} onClick={handelRouteToForget}>
              Forgot password?
            </p>
          </div>
        )}

        <button type="submit">
          {loading ? "Loading..." : showPassword ? "Login" : "Continue"}
        </button>
      </form>
    </main>
  );
};

export default Login;
