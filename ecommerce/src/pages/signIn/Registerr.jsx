import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {assets} from '../../assets/assets'
import styles from "./Registerr.module.css";
import { useDispatch, useSelector } from "react-redux";
import {register} from '../../store/actions/UserAction'
import {toast} from 'react-toastify'
const Registerr = () => {


  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  // const [otp, setotp] = useState('')
  const navigate = useNavigate();
  const [phone, setphone] = useState("")
 const disptach =  useDispatch()
 const {loading,authError,success} = useSelector(state => state.user)

 
  console.log(success);
  
  const handleSignup = async () => {
    disptach(register({
      username:username,
      email:email,
      password:password,
      phone:phone
    }))

  };

  useEffect(() => {
    if(success){
      navigate('/')
    }else{
      toast.error(authError)
    }
  }, [success,navigate,authError])
  

  return (
    <div className={styles.mainSignInContainer}>
      <div className={styles.bgImage}></div>

      <div className={styles.SignInContainer}>
        <form className={styles.form}>
          <img src={assets.Logo} />
          <h1>Create Account</h1>
          <div className={styles.phoneInput}>
            <span className={styles.prefix}>+91</span>
            <input type="phone" onChange={(e) => setphone(e.target.value)}/>
          </div>
          <input
            type="text"
            value={username}
            placeholder="username"
            onChange={(e) => setusername(e.target.value)}
          />

          <input
            type="email"
            value={email}
            placeholder="email"
            onChange={(e) => setemail(e.target.value)}
          />

          <input
            type="password"
            value={password}
            placeholder="password"
            onChange={(e) => setpassword(e.target.value)}
          />

          <button
            onClick={(e) => {
              e.preventDefault();
              handleSignup();
            }}
          >
            {loading? "loding..":"signup"}
          </button>
          <span>{authError ? authError : ""}</span>
        </form>
      </div>
    </div>
  );
};

export default Registerr;

//9675698742
