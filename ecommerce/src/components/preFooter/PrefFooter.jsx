import React from 'react'
import style from './PreFooter.module.css'

import { IoShieldOutline } from "react-icons/io5";
import { LuUsersRound } from "react-icons/lu";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { LuTruck } from "react-icons/lu";
import { MdOutlinePayment } from "react-icons/md";
import { TfiHeadphoneAlt } from "react-icons/tfi";
const PrefFooter = () => {
  return (
    <div className={style.container}>
        <div className={style.first}>
            <div className={style.inner}>
                <h1>15+</h1>
                <p>Years of Service</p>
            </div>
            <div className={style.inner}>
                <h1>50,000 Cr+</h1>
                <p>Successful Transactions</p>
            </div>
            <div className={style.inner}>
                <h1>200+</h1>
                <p>Countries Served</p>
            </div>
            <div className={style.inner}>
                <h1>98%</h1>
                <p>Customer Satisfaction</p>
            </div>
        </div>
        <div  className={style.second}>
            <div className={style.inner2}>
                <h1>Why Choose emojija.com?</h1>
                <p>India's most trusted B2B marketplace with comprehensive 
                    solutions for your <br />business needs</p>
            </div>
        </div>
        <div  className={style.third}>

            <div className={style.innerContainer}>
                <div className={style.card}>
                    <IoShieldOutline   className={style.icon1}/>
                    <div>
                        <strong>Trade Assurance</strong>
                        <p>100% secure transactions with money-back <br /> gurantee on verified orders gurantee
                        </p>
                    </div>
                </div>
                
            </div>
            <div className={style.innerContainer}>
                    <div className={style.card}>
                        <RiVerifiedBadgeFill  className={style.icon1} />
                       <div>
                         <strong>Verified Suppliers</strong>
                         <p>Every supplier goes through strict <br /> verification process and quality checks</p>
                       </div>
                    </div>
                    
            </div>
            <div className={style.innerContainer}>
                    <div className={style.card}>
                        <LuUsersRound className={style.icon1} />
                        <div>
                          <strong>2M+ Active Suppliers</strong>
                          <p>Connect with millions of manufacturers and <br /> exporters across India</p>
                        </div>
                    </div>
                    
            </div>
            <div className={style.innerContainer}>
                    <div className={style.card}>
                        <LuTruck  className={style.icon1} />
                        <div>
                            <strong>Logistics Support</strong>
                            <p>End to end Logistic solutions with tracking <br /> and insurance coverage</p>
                        </div>
                    </div>
                    
            </div>
            <div className={style.innerContainer}>
                    <div className={style.card}>
                        <MdOutlinePayment className={style.icon1} />
                        <div>
                            <strong>Flexible Payments</strong>
                            <p>Multiple payment options including LC,T/T,<br /> and secure online payments </p>
                        </div>
                    </div>
                   
            </div>
            <div className={style.innerContainer}>
                    <div className={style.card}>
                        <TfiHeadphoneAlt className={style.icon1} />
                        <div>
                            <strong>24/7 Supports</strong>
                            <p>Round-the-clock customer support in <br /> multiple indian languages</p>
                        </div>
                    </div>
                    
            </div>

        </div>
        <div  className={style.fourth}>
            <div className={style.businessCard}>
                <div className={style.business}>
               <h2>Ready to Start Trading?</h2>
                <p>Join millions of businesses already trading on emojija.com. Get started in minutes.</p>
                <div className={style.businessBtn}>
                    <button className={style.btn1}>Start Buying</button>
                    <button className={style.btn2}>Start Selling</button>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default PrefFooter