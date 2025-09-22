import React, { useState } from 'react'
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import style from './Navbar.module.css'

import { FaRegUser } from "react-icons/fa";
import { BiUserCircle } from "react-icons/bi";
import { LuBell } from "react-icons/lu";
import { GrCart } from "react-icons/gr";
import { IoIosArrowDown } from "react-icons/io";
import { BsBox2 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
const Navbar = () => {

    const [isOpen,setOpen]= useState(false);
    console.log(isOpen);
    
  return (
    <header className={style.headerContainer}>
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

            {/* <div>
                <LuBell  className={style.Bell}/>
            </div> */}

            <div className={style.iconNames}>
                <GrCart className={style.cart} />
                <p>Cart</p>
            </div>

            <div className={style.iconNames}>
                <FaRegUser className={style.UserIcon}/>
                <p>SignIn</p>
            </div>
            <div 
            className={style.iconNamesLoginWrapper} 
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            >
            <div className={isOpen ? `${style.UserHover} ${style.UserHoverActive}` : style.UserHover}>
                <BiUserCircle className={style.UserIcon}/>
                <p>Kunal</p>
                <IoIosArrowDown className={ isOpen ? style.arrowRev : style.arrow } />
            </div>

            <div className={isOpen ? style.dropdown : style.removeDropdown}>
                <Link to='/myprofile' className={style.dropdownItem}> <BiUserCircle className={style.dropdownItemIcon} /> MyProfile</Link>
                <Link to='/orders'className={style.dropdownItem}> <BsBox2 className={style.dropdownItemIcon} /> Order</Link>
                <Link to='/wishList'className={style.dropdownItem}> <FaRegHeart className={style.dropdownItemIcon} />Wishlist</Link>
                <Link to='/notification'className={style.dropdownItem}> <LuBell className={style.dropdownItemIcon}/>Notifications</Link>
                <Link to='/'className={style.dropdownItem}> <MdLogout className={style.dropdownItemIcon}/>Logout</Link>
            </div>
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