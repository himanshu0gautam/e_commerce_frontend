import React from 'react'
import style from './SellerVerifyNumber.module.css'
import { IoMdTime } from "react-icons/io";
import { FaRegCheckCircle } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";
const SellerVerifyNumber = () => {
  return (
    <div className={style.SellerVerifyNumberContainer}>
        
        {/* SELLER PANDING STATUS */}

        <section className={style.verifyNumber}>
            <div className={style.PandingiconsContainer}>
                <div className={style.iconInnerContainer}><IoMdTime className={style.icon}/></div> 
                <div className={style.status}><p>Pending</p></div>
            </div>
            <div className={style.number}>
                <p>Pending Review</p>
                <span>2</span>
            </div>
        </section>

        {/* SELLER APPROVED STATUS */}

        <section className={style.verifyNumber}>
            <div className={style.approvedContainer}>
                <div className={style.iconInnerContainer}><FaRegCheckCircle className={style.icon}/></div> 
                <div className={style.status}><p>Approved</p></div>
            </div>
            <div className={style.number}>
                <p>Pending Review</p>
                <span>2</span>
            </div>
        </section>

        {/* SELLER REJECT STATUS */}

         <section className={style.verifyNumber}>
            <div className={style.rejectContainer}>
                <div className={style.iconInnerContainer}><IoIosCloseCircleOutline className={style.icon}/></div> 
                <div className={style.status}><p>Approved</p></div>
            </div>
            <div className={style.number}>
                <p>Pending Review</p>
                <span>2</span>
            </div>
        </section>

    </div>
  )
}

export default SellerVerifyNumber