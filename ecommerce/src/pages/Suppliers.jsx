import React from 'react'
import SupplierCard from '../components/SupplierCard/SupplierCard'
import style from '../PagesStyles/Supplier.module.css'
import SuppllierFilter from '../components/SuppllierFilter/SuppllierFilter'
const Suppliers = () => {
  return (
    <div className={style.mainCont}>
         <h1>All Suppliers</h1>
        <p>Explore all verified suppliers from across India. Find partners and deliver quality and reliablity </p> 
        <SuppllierFilter/>

        <div className={style.supplierProfile}>
          <SupplierCard/>
        </div> 
    </div>
  )
}

export default Suppliers