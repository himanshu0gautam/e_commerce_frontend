import React, { useEffect, useState } from 'react'
import Filter from "../Filter/Filter.jsx"
import ShowProduct from '../ShowProduct/ShowProduct'
import styles from "./AllCategories.module.css"






const AllCategories = () => {

  return (
    <>
     <div className={styles.main}>
       <Filter />
      {/* {sampleProducts.length} */}
      <ShowProduct/>
     </div>
    </>
  )
}

export default AllCategories