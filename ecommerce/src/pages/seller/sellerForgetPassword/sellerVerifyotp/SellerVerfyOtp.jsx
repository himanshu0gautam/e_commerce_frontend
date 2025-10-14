import React, { useRef, useState, useEffect } from 'react';
import style from './SellerVerifyOtp.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { sellerForgetPasswordVerifyOtp, selleSendOtpForgetPassword } from '../../../../store/actions/SellerAction';

const SellerVerifyOtp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const inputRefs = useRef([]);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(300); // 5-minute countdown
  const [resendCooldown, setResendCooldown] = useState(60); // 1-minute resend restriction
  const { state } = useLocation();
  const phone = state?.phone;
  const { loading} = useSelector((state) => state.seller);

  // 🕒 Countdown timer for OTP expiry
  useEffect(() => {
  if (timer <= 0) return;

  const interval = setInterval(() => {
    setTimer((prev) => {
      if (prev <= 1) {
        clearInterval(interval);
        return 0;
      }
      return prev - 1;
    });
  }, 1000);

  return () => clearInterval(interval);
}, []); // <-- empty dependency, runs once


  // 🕐 Countdown for resend cooldown (1 min)
  useEffect(() => {
  if (resendCooldown <= 0) return;

  const interval = setInterval(() => {
    setResendCooldown((prev) => {
      if (prev <= 1) {
        clearInterval(interval);
        return 0;
      }
      return prev - 1;
    });
  }, 1000);

  return () => clearInterval(interval);
}, []);


  const handleChange = async (e, index) => {
    const value = e.target.value;
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (value && index < 5) inputRefs.current[index + 1].focus();

      const otpValue = newOtp.join('');
      if (otpValue.length === 6) {
        await verifyOtp(otpValue);
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const verifyOtp = async (otpValue) => {
    try {
      const res = await dispatch(sellerForgetPasswordVerifyOtp({ phone, otp: otpValue }));
      if (res?.payload?.message === 'OTP verified') {
        alert('OTP verified successfully!');
        navigate('/seller/reset-password', { state: { phone } });
      } else {
        alert(res?.payload?.message || 'Invalid OTP');
        setOtp(['', '', '', '', '', '']);
        inputRefs.current[0].focus();
      }
    } catch (error) {
      alert('Invalid OTP',error.message);
      setOtp(['', '', '', '', '', '']);
      inputRefs.current[0].focus();
    }
  };

  const handleResendOtp = async () => {
    if (resendCooldown > 0) return;
    await dispatch(selleSendOtpForgetPassword({ phone }));
    setTimer(300); // reset expiry timer
    setResendCooldown(60); // restart resend cooldown
    alert('OTP resent successfully!');
  };

  // 🧮 Format time
  // const formatTime = (sec) => {
  //   const min = Math.floor(sec / 60);
  //   const s = sec % 60;
  //   return `${min}:${s.toString().padStart(2, '0')}`;
  // };

  return (
    <div className={style.sellerVerifyOtpContainer}>
      <div className={style.bgImage}></div>
      <div className={style.sellerVerifyOtpInnerContainer}>
        <h1>Verify OTP</h1>
        <form>
          <div className={style.otpInputGroup}>
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                ref={(el) => (inputRefs.current[index] = el)}
                className={style.otpBox}
                disabled={loading}
              />
            ))}
          </div>

          {/* 🕒 Timer + resend info */}
          <div className={style.timerSection}>
            {/* {timer > 0 ? (
              <p>OTP expires in <strong>{formatTime(timer)}</strong></p>
            ) : (
              <p style={{ color: 'red' }}>OTP expired, please resend</p>
            )} */}
            <button
              type="button"
              onClick={handleResendOtp}
              disabled={resendCooldown > 0}
              className={style.resendButton}
            >
              {resendCooldown > 0
                ? `Resend OTP in ${resendCooldown}s`
                : 'Resend OTP'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SellerVerifyOtp;
