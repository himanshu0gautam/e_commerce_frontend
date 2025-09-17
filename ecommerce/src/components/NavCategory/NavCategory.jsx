import React from 'react'
import style from './NavCategory.module.css'


import { RxTextAlignJustify } from "react-icons/rx";
const NavCategory = () => {
  return (
    <div className={style.container}>
        <div className={style.allCat}><RxTextAlignJustify  className={style.alignIcon}/>All Categories</div>
        <div className={style.cat}>Fashion</div>
        <div className={style.cat}>Electronics</div>
        <div className={style.cat}>Home & Furniture</div>
        <div className={style.cat}>Grocery</div>
        <div className={style.cat}>Books</div>
        <div className={style.cat}>Jwellery</div>
    </div>
  )
}

export default NavCategory