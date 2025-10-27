import React, { useState } from 'react'
import style from "./SellerVerifyPopup.module.css"
import { RiCloseLine } from "react-icons/ri";
import TraclNavbar from './TrackNavbar/TraclNavbar';
import AccountVerification from './AccountVerification/AccountVerification';
import StatusButton from './statusbutton/StatusButton';

const SellerVeifyPopup = ({sellerId,onClose}) => {


  return (
    <div className={style.overlay}>
        <div className={style.SellerVeifyPopupContainer}>
        <header className={style.SellerVeifyPopupHeading}>
            <div className={style.Sellerheading}>
                <h2>Seller Verification Request</h2>
                <p>Request ID:
                    <span>t3yq4uihueu</span>
                </p>
            </div>
            <div className={style.crossSection}>
                <RiCloseLine onClick={onClose} className={style.CrossIcon} />
                <p>Pending</p>
            </div>
        </header>
        <TraclNavbar/>
        <AccountVerification sellerId={sellerId}/>
        <StatusButton/>
    </div>
    </div>
  )
}

export default SellerVeifyPopup