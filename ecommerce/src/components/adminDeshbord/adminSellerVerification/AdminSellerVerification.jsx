import React, { useEffect } from 'react'
import style from './AdminSellerVerification.module.css'
import SellerVerifyNumber from '../sellerVerifyNumber/SellerVerifyNumber'
import SellerRegisterRequest from '../sellerRegisterRequest/SellerRegisterRequest'
import SellerVeifyPopup from '../sellerVerifyPopup/SellerVeifyPopup'
import {getApprovedAndRejectCount} from '../../../store/actions/SellerAction'
import { useDispatch } from 'react-redux'

const AdminSellerVerification = () => {
  const dispatch =  useDispatch()

 useEffect(() => {
  dispatch(getApprovedAndRejectCount());
}, [dispatch]);

  

  return (
    <div className={style.AdminSellerVerificationContainer}>
        <header className={style.heading}>
            <h2>Seller Verification Dashboard</h2>
            <p>Manage and approve seller registration requests</p>
        </header>
        <SellerVerifyNumber/>
        <SellerRegisterRequest/>
    </div>
  )
}

export default AdminSellerVerification