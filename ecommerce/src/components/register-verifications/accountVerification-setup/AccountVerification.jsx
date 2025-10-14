import React, { useEffect, useState } from "react";
import style from "./AccountVerification.module.css";
import { IoCallOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import {
  sellerPhoneVerificatioBySendOtp,
  sellerVerifyPhoneOtp,
  sellerEmailVerificationBySendOtp,
  sellerVerifyEmailOtp,
} from "../../../store/actions/SellerAction";
import { toast } from "react-toastify";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { RiSecurePaymentFill } from "react-icons/ri";

const AccountVerification = ({updateSteps}) => {
  const dispatch = useDispatch();
  const { loading, succes, error } = useSelector((state) => state.seller);

  const [showEmailVerifyOtp, setshowEmailVerifyOtp] = useState(false);
  const [showOtpForm, setshowOTPForm] = useState(false);

  const [phone, setphone] = useState();
  const [phoneOTP, setphoneOTP] = useState();

  const [email, setemail] = useState();
  const [EmailOtp, setEmailOtp] = useState();

  const [resendTimer, setresendTimer] = useState(0);
  const [resendEmailOtpTimer, setresendEmailOtpTimer] = useState(0);

  useEffect(() => {
    if (resendTimer <= 0) return;

    const interval = setInterval(() => {
      setresendTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [resendTimer]);

  useEffect(() => {
    if (resendEmailOtpTimer <= 0) return;
    const intervals = setInterval(() => {
      setresendEmailOtpTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(intervals);
  }, [resendEmailOtpTimer]);

  // PHONE VERIFICATION SECTION

  const handelSendPhoneOtp = async (e) => {
    e.preventDefault();
    if (!phone) return alert("Please enter a phone number");
    try {
      const res = await dispatch(
        sellerPhoneVerificatioBySendOtp(phone)
      ).unwrap();
      toast.success(res.message);
      updateSteps("phone",phone)
      setshowOTPForm(true);
      setresendTimer(60);
    } catch (err) {
      toast.error(err || "Failed to send OTP");
    }
  };

  const handelVerifyPhoneOtp = async (e) => {
    e.preventDefault();
    try {
      const res = await dispatch(
        sellerVerifyPhoneOtp({ phone: phone, otp: phoneOTP })
      ).unwrap();
      toast.success(res.message);
      setshowOTPForm(false);
    } catch (err) {
      toast.error(err || "Invalid OTP");
    }
  };

  // EMAIL VERIFICATION SECTION

  const handelSendEmailOtp = async (e) => {
    e.preventDefault();
    if (!email) return alert("Please Enter A email address");
    try {
      const res = await dispatch(sellerEmailVerificationBySendOtp(email));
      toast.success(res.payload.message);
      updateSteps("email",email)
      setshowEmailVerifyOtp(true);
      setresendEmailOtpTimer(60);
    } catch (error) {
      toast.error(error || "Failed to send otp");
    }
  };

  const handelVerifyEmailOtp = async (e) => {
    e.preventDefault();
    try {
      const res = await dispatch(
        sellerVerifyEmailOtp({ email: email, otp: EmailOtp })
      );
      toast.success(res.payload.message);
      setshowEmailVerifyOtp(false);
      setresendEmailOtpTimer(0);
    } catch (error) {
      toast.error(error || "invalid Otp");
    }
  };


  return (
    <div className={style.AccountVerificationContainer}>
      <header className={style.heading}>
        <h2>Account Setup & Verification</h2>
        <p>Create your seller account and verify your contact details</p>
      </header>
      <section className={style.UsernameSection}>
        <p>Account Credentials</p>
        <div className={style.UsernameForm}>
          <div className={style.UernameInput}>
            <label>Username*</label>
            <input type="text" placeholder="Choose a unique username" onChange={(e) => updateSteps("fullname", e.target.value)}/>
            <span>This will be your seller ID on the platform</span>
          </div>
          <div className={style.UsernamePassword}>
            <div className={style.Password}>
              <label>Password*</label>
              <input type="text" placeholder="Create a strong password" />
              <span>Min. 8 characters with numbers & symbols</span>
            </div>
            <div className={style.Password}>
              <label>Conform Password*</label>
              <input type="text" placeholder="Create a strong password" onChange={(e) => updateSteps("password", e.target.value)}/>
            </div>
          </div>
        </div>
      </section>

      {/* PHONE NUMBER VERIFICATION SECTION */}
      <section className={style.Verification}>
        <div className={style.IconsAndHeading}>
          <IoCallOutline className={style.Icon} />
          <h2>Phone Number Verification</h2>
        </div>
        <form className={style.form} onSubmit={handelSendPhoneOtp}>
          <label>Mobile Number*</label>
          <div className={style.Input}>
            <input
              type="text"
              placeholder="+91**********"
              onChange={(e) => setphone(e.target.value)}
            />
            <button type="submit" disabled={resendTimer > 0}>
              {resendTimer > 0 ? `Resend in ${resendTimer}s` : "Send OTP"}
            </button>
          </div>
          {error && <span className={style.errorMessage}>{error}</span>}
          {succes && <span className={style.successMessage}>{succes}</span>}
        </form>
        {showOtpForm && (
          <form className={style.VerifyOtpform} onSubmit={handelVerifyPhoneOtp}>
            <label>Enter 6-digit OTP</label>
            <div className={style.Input}>
              <input
                type="text"
                placeholder="+91**********"
                onChange={(e) => setphoneOTP(e.target.value)}
              />
              <button type="submit">
                {" "}
                {loading ? "Verifing..." : "Verify OTP"}
              </button>
            </div>
            {error && <span className={style.errorMessage}>{error}</span>}
            {succes && <span className={style.successMessage}>{succes}</span>}
          </form>
        )}
      </section>

      {/* EMAIL VERIFICATION SECTION */}

      <section className={style.Verification}>
        <div className={style.IconsAndHeading}>
          <MdOutlineMarkEmailRead className={style.Icon} />
          <h2>Email Verification</h2>
        </div>
        <form className={style.form} onSubmit={handelSendEmailOtp}>
          <label>Email Address*</label>
          <div className={style.Input}>
            <input
              type="email"
              placeholder="example@gmail.com"
              onChange={(e) => setemail(e.target.value)}
            />
            <button type="submit" disabled={resendEmailOtpTimer > 0}>
              {resendEmailOtpTimer > 0
                ? `send in ${resendEmailOtpTimer}`
                : "Send OTP"}
            </button>
          </div>
          {error && <span className={style.errorMessage}>{error}</span>}
          {succes && <span className={style.successMessage}>{succes}</span>}
        </form>
        {showEmailVerifyOtp && (
          <form className={style.VerifyOtpform} onSubmit={handelVerifyEmailOtp}>
            <label>Enter 6-digit OTP</label>
            <div className={style.Input}>
              <input
                type="text"
                placeholder="Enter OTP here"
                onChange={(e) => setEmailOtp(e.target.value)}
              />
              <button type="submit">
                {" "}
                {loading ? "Verifing..." : "Verify OTP"}
              </button>
            </div>
            {error && <span className={style.errorMessage}>{error}</span>}
            {succes && <span className={style.successMessage}>{succes}</span>}
          </form>
        )}
      </section>

      <section className={style.lastSection}>
        <RiSecurePaymentFill  className={style.secureIcon}/> 
        <div className={style.innerSection}>
            <h2>Your data is secure</h2>
            <span>We use industry-standard encryption to protect your account information</span>
        </div>
      </section>

    </div>
  );
};

export default AccountVerification;
