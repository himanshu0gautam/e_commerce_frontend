import React from 'react'
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import style from './Navbar.module.css'

import { FaRegUser } from "react-icons/fa";
import { LuBell } from "react-icons/lu";
import { GrCart } from "react-icons/gr";
const Navbar = () => {
  return (
    <header>

        <div className={style.mainContainer}>

        <div>
            <Link to="/"><img src={assets.Logo} alt="logo"  className={style.logo} /></Link>
        </div>

        <div className={style.searchContainer}>

            <input 
            type="text"
            className={style.searachBar}
            placeholder='Search products, suppliers , or companies...'
            />
        
            <div>
                <img src={assets.search} alt="search" className={style.search} />
            </div>

        </div>
        <div className={style.UserConatiner}>

            <div>
                <LuBell  className={style.Bell}/>
            </div>

            <div className={style.iconNames}>
                <GrCart className={style.cart} />
                <p>Cart</p>
            </div>

            <div className={style.iconNames}>
                <FaRegUser className={style.UserIcon}/>
                <p>SignIn</p>
            </div>

        </div>
        <div>
            <button className={style.sellerBtn}>Become a Seller</button>
        </div>

    </div>
    </header>
  )
}
export  default Navbar;