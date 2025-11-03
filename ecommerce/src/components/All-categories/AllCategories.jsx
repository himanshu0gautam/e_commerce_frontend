import React, { lazy, Suspense, useEffect, useState } from 'react'
import Filter from "../Filter/Filter.jsx"

import styles from "./AllCategories.module.css"

const ShowProduct = lazy(()=> import ('../ShowProduct/ShowProduct' ))




const AllCategories = () => {

  return (
    <>
     <div className={styles.main}>
       <Filter />
      {/* {sampleProducts.length} */}
     
      <Suspense fallback={<div>Loading...</div>}>
         <ShowProduct/>
      </Suspense>
     </div>
    </>
  )
}

export default AllCategories