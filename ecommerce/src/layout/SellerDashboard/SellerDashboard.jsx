import { Outlet } from "react-router-dom";
import React from 'react'
import Navbar from "../../components/Navbar/Navbar";
import style from "./SellerDashboard.module.css"

const SellerDashboard = () => {
  return (
     <div className={style.authContainer}>
        <Navbar/>
        <Outlet />
    </div>
  )
}

export default SellerDashboard