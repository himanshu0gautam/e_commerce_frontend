import React, { useEffect, useRef, useState } from "react";
import style from "./VerifyForgetOtp.module.css";
import verifyOtpImage from "../../../../assists/42017135-removebg-preview.png";
import { useDispatch, useSelector } from "react-redux";
import {userSendverifyForgetPassword,userSendOtpForgetPassword} from "../../../store/actions/UserAction"
import { useNavigate } from "react-router-dom";
const VerifyForgetOtp = () => {
  const length = 6;
  const [values, setvalues] = useState(() => Array(length).fill(""));
  const inputRef = useRef([]);
  const dispatch = useDispatch()
  const otpString = values.join("");
  const navigate = useNavigate()

  const [time, settime] = useState(30)
  const [isResending, setisResending] = useState(false)

  const { phone,OTPSend } = useSelector((state) => state.user);

  useEffect(() => {
    if (inputRef.current[0]) inputRef.current[0].focus();
  }, []);


  function handleChange(e, idx) {
    const raw = e.target.value;
    
    const lastChar = raw.slice(-1).replace(/[^0-9]/g, "");

    if (!lastChar) return;

    setvalues((prev) => {
      const next = [...prev];
      next[idx] = lastChar;
      return next;
    });

    const nextInput = inputRef.current[idx + 1];    
    if (nextInput) nextInput.focus();
  }

  function handelKeyDown(e, idx) {
    const key = e.key;

    if (key === "Backspace") {
      if (values[idx] === "") {
        const preInput = inputRef.current[idx - 1];
        if (preInput) {
          setvalues((prev) => {
            const next = [...prev];
            next[idx - 1] = "";
            return next;
          });
        }
        preInput.focus();
      } else {
        setvalues((prev) => {
          const next = [...prev];
          next[idx] = "";
          return next;
        });
      }
    } else if (key === "ArrowLeft") {
      const prevInput = inputRef.current[idx - 1];
      if (prevInput) prevInput.focus();
    } else if (key === "ArrowRight") {
      const nextInput = inputRef.current[idx + 1];
      if (nextInput) nextInput.focus();
    }
  }


  useEffect(() => {
    if(!OTPSend){
      navigate('/auth/reset-password')
    }
  }, [OTPSend,navigate])
  

  useEffect(() => {
  const allFilled = values.every((val) => val !== "");
  
  if (allFilled) {
    dispatch(userSendverifyForgetPassword({
      phone,
      otp: otpString
    }));
  }
}, [values, dispatch, phone, otpString]);

useEffect(() => {
  if(time <= 0) return;
  const interval = setInterval(() => {
    settime((prev) => prev - 1)
  }, 1000);

  return () =>  clearInterval(interval)
}, [time])

const handelResend = () => {
  setisResending(true)
  settime(30)
  setvalues(Array(length).fill(""))

  dispatch(userSendOtpForgetPassword({
    phone:phone
  }))

  settime(() => setisResending(false),2000)
}

  

  return (
    <main className={style.mainSignInContainer}>
      <div className={style.bgImage}></div>

      {/* Left side - Password login */}
      <form className={style.form}>
        <img src={verifyOtpImage} />
        <div className={style.heading}>
          <h1>Verify with OTP</h1>
          <p>Send To {phone}</p>
        </div>
        <div className={style.phoneInput}>
          {values.map((val, i) => (
            <input
              key={i}
              ref={(el) => (inputRef.current[i] = el)}
              inputMode="numeric"
              maxLength={1}
              value={val}
              onChange={(e) => handleChange(e, i)}
              onKeyDown={(e) => handelKeyDown(e, i)}
              className={style.input}
            />
          ))}
        </div>
          <div className={style.resendContainer}>
           {time > 0 ? (
            <p>Resend OTP in <b>{time}s</b></p>
          ) : (
            <button
              type="button"
              onClick={handelResend}
              disabled={isResending}
              className={style.resendBtn}
            >
              {isResending ? "Resending..." : "Resend OTP"}
            </button>
          )}
          </div>
      </form>
    </main>
  );
};

export default VerifyForgetOtp;
