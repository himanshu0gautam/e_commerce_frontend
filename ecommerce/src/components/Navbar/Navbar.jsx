import React, { useEffect, useState } from "react";
import { assets } from "../../assets/assets";
import { Link, useNavigate, useLocation } from "react-router-dom";
import style from "./Navbar.module.css";

import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { BiUserCircle } from "react-icons/bi";
import { LuBell } from "react-icons/lu";
import { GrCart } from "react-icons/gr";
import { IoIosArrowDown } from "react-icons/io";
import { BsBox2 } from "react-icons/bs";
import { MdLogout } from "react-icons/md";

import { useSelector } from "react-redux";
import axios from "axios";

const Navbar = () => {
    const [user, setUser] = useState(null);
    const [isOpen, setOpen] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    // ✅ Redux cart items
    const cartItems = useSelector((state) => state.cart.items);
    const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    useEffect(() => {
        const stateUser = location.state?.user;
        const storedUser = JSON.parse(localStorage.getItem("user"));

        const currentUser = stateUser || storedUser;

        if (currentUser) {
            setUser(currentUser);
            setIsLogin(true);

            if (stateUser && !storedUser) {
                localStorage.setItem("user", JSON.stringify(stateUser));
            }
        } else {
            setIsLogin(false);
            setUser(null);
        }
    }, [location.state]);

    const logOutUser = async () => {
        try {
            await axios.get("https://unhortative-mayola-unsavagely.ngrok-free.dev/api/auth/logout");

            localStorage.removeItem("user");
            setIsLogin(false);
            setUser(null);
            setOpen(false);
            navigate("/");
        } catch (error) {
            console.error("Logout error:", error);
            localStorage.removeItem("user");
            setIsLogin(false);
            setUser(null);
            setOpen(false);
        }
    };

    const routeTosellerRegister = () => {
        navigate("/seller/register");
    };

    return (
        <header className={style.headerContainer}>
            <div className={style.mainContainer}>
                {/* Logo */}
                <div>
                    <Link to="/">
                        <img src={assets.Logo} alt="logo" className={style.logo} />
                    </Link>
                </div>

                {/* Search */}
                <div className={style.searchContainer}>
                    <input
                        type="text"
                        className={style.searchBar}
                        placeholder="Search products, suppliers, or companies..."
                    />
                    <img src={assets.search} alt="search" className={style.search} />
                </div>

                {/* User Section */}
                <div className={style.UserContainer}>
                    {/* ✅ Cart Section with badge */}
                    <div
                        className={style.iconNames}
                        onClick={() => navigate("/cart")}
                        style={{ position: "relative" }}
                    >
                        <GrCart className={style.cart} />
                        {cartCount > 0 && (
                            <span className={style.cartBadge}>{cartCount}</span>
                        )}
                        <p>Cart</p>
                    </div>

                    {/* Login / User Dropdown */}
                    {!isLogin ? (
                        <div
                            className={style.iconNames}
                            onClick={() => navigate("/auth/login")}
                        >
                            <FaRegUser className={style.UserIcon} />
                            <p>Log In</p>
                        </div>
                    ) : (
                        <div
                            className={style.iconNamesLoginWrapper}
                            onMouseEnter={() => setOpen(true)}
                            onMouseLeave={() => setOpen(false)}
                        >
                            <div
                                className={
                                    isOpen
                                        ? `${style.UserHover} ${style.UserHoverActive}`
                                        : style.UserHover
                                }
                            >
                                <BiUserCircle className={style.UserIcon} />
                                <p>{user?.username || "User"}</p>
                                <IoIosArrowDown
                                    className={isOpen ? style.arrowRev : style.arrow}
                                />
                            </div>

                            <div className={isOpen ? style.dropdown : style.removeDropdown}>
                                <Link
                                    to="/myprofile"
                                    className={style.dropdownItem}
                                    onClick={() => setOpen(false)}
                                >
                                    <BiUserCircle className={style.dropdownItemIcon} /> My Profile
                                </Link>
                                <Link
                                    to="/orders"
                                    className={style.dropdownItem}
                                    onClick={() => setOpen(false)}
                                >
                                    <BsBox2 className={style.dropdownItemIcon} /> Orders
                                </Link>
                                <Link
                                    to="/wishList"
                                    className={style.dropdownItem}
                                    onClick={() => setOpen(false)}
                                >
                                    <FaRegHeart className={style.dropdownItemIcon} /> Wishlist
                                </Link>
                                <Link
                                    to="/notification"
                                    className={style.dropdownItem}
                                    onClick={() => setOpen(false)}
                                >
                                    <LuBell className={style.dropdownItemIcon} /> Notifications
                                </Link>
                                <Link
                                    to="/"
                                    className={style.dropdownItem}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        logOutUser();
                                        setOpen(false);
                                    }}
                                >
                                    <MdLogout className={style.dropdownItemIcon} /> Logout
                                </Link>
                            </div>
                        </div>
                    )}

                    {/* Seller Button */}
                    <button onClick={routeTosellerRegister} className={style.sellerBtn}>
                        Become a Seller
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
