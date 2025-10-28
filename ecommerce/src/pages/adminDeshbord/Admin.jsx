import React from 'react'
import style from './Admin.module.css'
import AdminSellerVerification from '../../components/adminDeshbord/adminSellerVerification/AdminSellerVerification'

const Admin = () => {
  return (
    <div className={style.AdminContainer}><AdminSellerVerification/></div>
  )
}

export default Admin