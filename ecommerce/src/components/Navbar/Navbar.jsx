import React, { useEffect, useState } from 'react';
import { assets } from '../../assets/assets';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import style from './Navbar.module.css';

import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { BiUserCircle } from "react-icons/bi";
import { LuBell } from "react-icons/lu";
import { GrCart } from "react-icons/gr";
import { IoIosArrowDown } from "react-icons/io";
import { BsBox2 } from "react-icons/bs";
import { MdLogout } from "react-icons/md";

import axios from 'axios';

const Navbar = () => {
    const [user, setUser] = useState(null);
    const [isOpen, setOpen] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const stateUser = location.state?.user;
        const storedUser = JSON.parse(localStorage.getItem('user'));
        const currentUser = stateUser || storedUser;

        if (currentUser) {
            setUser(currentUser);
            setIsLogin(true);

            if (stateUser && !storedUser) {
                localStorage.setItem('user', JSON.stringify(stateUser));
            }
        } else {
            if (storedUser) {
                setUser(storedUser);
                setIsLogin(true);
            } else {
                setIsLogin(false);
                setUser(null);
            }
        }
    }, [location]); // Changed to depend on location for reactivity

    const logOutUser = async () => {
        try {
            await axios.get('http://192.168.1.49:3000/api/auth/logout', { withCredentials: true }); // added withCredentials

            localStorage.removeItem('user');
            setIsLogin(false);
            setUser(null);
            setOpen(false);
            navigate('/');
        } catch (error) {
            console.error("Logout error:", error);

            localStorage.removeItem('user');
            setIsLogin(false);
            setUser(null);
            setOpen(false);
        }
    }
    const NavigateToBcomeASeller = () => {
        navigate()
    }

    const routeTosellerRegister = () => {
        navigate('/seller/register')
    }

    return (
        <header className={style.headerContainer}>
            <div className={style.mainContainer}>
                <div>
                    <Link to="/"><img src={assets.Logo} alt="logo" className={style.logo} /></Link>
                </div>

                {/* Search */}
                <div className={style.searchContainer}>
                    <input
                        type="text"
                        className={style.searchBar}
                        placeholder='Search products, suppliers, or companies...'
                    />
                    <img src={assets.search} alt="search" className={style.search} />
                </div>

                {/* User Section */}
                <div className={style.UserContainer}>
                    <div className={style.iconNames}>
                        <GrCart className={style.cart} />
                        <p>Cart</p>
                    </div>

                    {!isLogin && (
                        <div className={style.iconNames} onClick={() => navigate("/auth/login")}>
                            <FaRegUser className={style.UserIcon} />
                            <p>Log In</p>
                        </div>
                    )}

                    {isLogin && (
                        <div
                            className={style.iconNamesLoginWrapper}
                            onMouseEnter={() => setOpen(true)}
                            onMouseLeave={() => setOpen(false)}
                        >
                            {/* User Button */}
                            <div className={isOpen ? `${style.UserHover} ${style.UserHoverActive}` : style.UserHover}>
                                <BiUserCircle className={style.UserIcon} />
                                <p>{user?.username || "User"}</p>
                                <IoIosArrowDown className={isOpen ? style.arrowRev : style.arrow} />
                            </div>

                            {/* Dropdown */}
                            <div className={isOpen ? style.dropdown : style.removeDropdown}>
                                <Link to='/myprofile' className={style.dropdownItem} onClick={() => setOpen(false)}>
                                    <BiUserCircle className={style.dropdownItemIcon} /> MyProfile
                                </Link>
                                <Link to='/orders' className={style.dropdownItem} onClick={() => setOpen(false)}>
                                    <BsBox2 className={style.dropdownItemIcon} /> Orders
                                </Link>
                                <Link to='/wishList' className={style.dropdownItem} onClick={() => setOpen(false)}>
                                    <FaRegHeart className={style.dropdownItemIcon} /> Wishlist
                                </Link>
                                <Link to='/notification' className={style.dropdownItem} onClick={() => setOpen(false)}>
                                    <LuBell className={style.dropdownItemIcon} /> Notifications
                                </Link>
                                <Link to='/' className={style.dropdownItem} onClick={(e) => { e.preventDefault(); logOutUser(); setOpen(false); }}>
                                    <MdLogout className={style.dropdownItemIcon} /> Logout
                                </Link>
                            </div>
                        </div>
                    )}
                    <button  onClick={routeTosellerRegister} className={style.sellerBtn}>Become a Seller</button>
                </div>
            </div>
        </header>
    )
}

export default Navbar;
