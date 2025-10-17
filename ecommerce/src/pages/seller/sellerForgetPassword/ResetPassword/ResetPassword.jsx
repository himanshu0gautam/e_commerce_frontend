import React, { useState } from 'react'
import style from './ResetPassword.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import {sellerResetPassword} from '../../../../store/actions/SellerAction'

const ResetPassword = () => {
  const dispatch = useDispatch()
  const {state} = useLocation()
  const phone = state?.phone
  const {loading,success,error} = useSelector(state => state.seller)
  const [newPassword, setNewPassword] = useState('');
  const navigate = useNavigate()


  const handelSubmit = (e) => {
    e.preventDefault()
    if (!newPassword) {
      alert('Please enter a new password');
      return;
    }
    dispatch(sellerResetPassword({
      phone,
      newPassword
    }))
    navigate('/seller/login')
  }

  return (
    <div className={style.sellerResetPasswordContainer}>
         <div className={style.bgImage}></div>
         <div className={style.sellerResetPasswordInnerContainer}>
          <form onSubmit={handelSubmit}>
              <input type="text" placeholder='Enter new Password' onChange={(e) => setNewPassword(e.target.value)}/>
            <button disabled={loading}>
            {loading ? 'Resetting...' : 'Reset Password'}
          </button>
          </form>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        {success && <p style={{ color: 'green' }}>Password reset successful!</p>}
         </div>
    </div>
  )
}

export default ResetPassword