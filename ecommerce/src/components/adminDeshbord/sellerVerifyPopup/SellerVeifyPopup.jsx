import React, { useState } from 'react'
import style from "./SellerVerifyPopup.module.css"
import { RiCloseLine } from "react-icons/ri";
import TraclNavbar from './TrackNavbar/TraclNavbar';
import AccountVerification from './AccountVerification/AccountVerification';
import StatusButton from './statusbutton/StatusButton';
import Business from './business/Business';
import Banking from './banking/Banking';
import Warehouse from './warehouse/Warehouse';

const SellerVeifyPopup = ({sellerId,onClose}) => {

    const [isActiveStatus, setisActiveStatus] = useState(0)

    const lastActive = 3


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
        <TraclNavbar isActiveStatus={isActiveStatus} lastActive={lastActive} setisActiveStatus={setisActiveStatus}/>
        {isActiveStatus === 0 && <AccountVerification sellerId={sellerId}/>}
        {isActiveStatus === 1 && <Business sellerId={sellerId}/>}
        {isActiveStatus === 2 && <Banking sellerId={sellerId}/>}
        {isActiveStatus === lastActive &&  <Warehouse sellerId={sellerId}/>}      
        <StatusButton sellerId={sellerId} />
    </div>
    </div>
  )
}

export default SellerVeifyPopup