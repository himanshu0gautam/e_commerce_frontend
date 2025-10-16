import React, { useState } from 'react'
import styles from "./CreateProduct.module.css"
import { RxDashboard } from "react-icons/rx";
import { IoMdAdd } from "react-icons/io";

const CreateProduct = () => {


    return (
        <>
            <div className={styles.mainContainer}>

                <nav className={styles.mainNav}>
                    <div className={styles.leftNav}>
                        <div className={styles.icon}> <RxDashboard /> Seller Portal</div>
                        <h3>Dashboard</h3>
                        <h3>Product</h3>
                        <h3>Message</h3>
                        <h3>Order</h3>
                    </div>
                    <div className={styles.rightNav}>
                        <h4>Himanshu</h4>
                    </div>

                </nav>

                <div className={styles.productbtn}>
                    Overview
                    <button> <span><IoMdAdd /></span> New Product </button>
                </div>

                <div className={styles.mainCard}>
                    <div className={styles.card}>
                        
                    </div>
                </div>


            </div>
        </>
    )
}

export default CreateProduct