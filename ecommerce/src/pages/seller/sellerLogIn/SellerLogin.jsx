import { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom'
import { loginSeller } from '../../../store/actions/SellerAction'
import style from './SellerLogin.module.css'

const SellerLogin = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {loading ,error,success} = useSelector(state => state.seller)
  const [form, setform] = useState({
    phone:"",
    password:""
  })


  const handelSubmit = async(e) => {
    e.preventDefault()
    const loginsellerform =await dispatch(loginSeller(form))
console.log(loginsellerform.payload);
    if(loginsellerform.payload === "till now u are not approved to login"){
      alert('till now u are not approved to login')
      return 
    }
    navigate('/')

  }

  const goToForgotPassword = () => {
  navigate('/seller/seller-forget-password');
};


  return (
    <div className={style.sellerLogInContainer}>
      <div className={style.bgImage}></div>
      
     <div className={style.SellerLOgInInnerConatainer}>
      <h1>Seller Login</h1>
       <form onSubmit={handelSubmit}>
          <div className={style.inputContainer}>
            <input type="text" placeholder='Enter your Phone Number' onChange={(e) => setform({...form,phone:e.target.value})}/>
            <input type="text" placeholder='Enter your password' onChange={(e) => setform({...form,password:e.target.value})}/>
          <p onClick={goToForgotPassword}>forget password</p>
          </div>
          <button type='submit'>{loading ? "Logining..." : "Login"}</button>
          {error && <p style={{ color: "red" }}>{error}</p>}
          {success && <p style={{ color: "green" }}>Login Successful!</p>} 
      </form>
     </div>
    </div>
  )
}

export default SellerLogin