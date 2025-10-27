import React from 'react'
import style from './AdminSellerVerification.module.css'
import SellerVerifyNumber from '../sellerVerifyNumber/SellerVerifyNumber'
import SellerRegisterRequest from '../sellerRegisterRequest/SellerRegisterRequest'
import SellerVeifyPopup from '../sellerVerifyPopup/SellerVeifyPopup'
const AdminSellerVerification = () => {
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