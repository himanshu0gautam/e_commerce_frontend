  import React, { useEffect, useState } from "react";
  import { assets } from "../../assets/assets";
  import { Link, useNavigate} from "react-router-dom";
  import style from "./Navbar.module.css";

  import { FaRegUser, FaRegHeart } from "react-icons/fa";
  import { BiUserCircle } from "react-icons/bi";
  import { LuBell } from "react-icons/lu";
  import { GrCart } from "react-icons/gr";
  import { IoIosArrowDown } from "react-icons/io";
  import { BsBox2 } from "react-icons/bs";
  import { MdLogout } from "react-icons/md";
  import { useDispatch, useSelector } from "react-redux";
  import {LoginUserInfo,logOutUser} from '../../store/actions/UserAction'

  const Navbar = () => {
  //   const [user, setUser] = useState(null);
    const [isOpen, setOpen] = useState(false);
  //   const [isLogin, setIsLogin] = useState(false);
    const navigate = useNavigate();
  //   const location = useLocation();

    const {user,success}=useSelector(state => state.user)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(LoginUserInfo());
      }, [dispatch]);
      
      console.log(user);

    const logout = async () => {
      console.log("hello");
      
      dispatch(logOutUser())
      if(!success){
          setOpen(false)
      }
    };
    const NavigateToBcomeASeller = () => {
      navigate();
    };

    const routeTosellerRegister = () => {
      navigate("/seller/register");
    };

    return (
      <header className={style.headerContainer}>
        <div className={style.mainContainer}>
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
            <div className={style.iconNames} onClick={() => navigate("/cart")}>
              <GrCart className={style.cart} />
              <p>Cart</p>
            </div>

            {!success && (
              <div
                className={style.iconNames}
                onClick={() => navigate("/auth/login")}
              >
                <FaRegUser className={style.UserIcon} />
                <p>Log In</p>
              </div>
            )}

            {success && (
              <div
                className={style.iconNamesLoginWrapper}
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
              >
                {/* User Button */}
                <div
                  className={
                    isOpen
                      ? `${style.UserHover} ${style.UserHoverActive}`
                      : style.UserHover
                  }
                >
                  <BiUserCircle className={style.UserIcon} />
                  {/* <p>{user?.username || "User"}</p> */}
                  {<p>{user?.username}</p>}
                  <IoIosArrowDown className={isOpen ? style.arrowRev : style.arrow}/>
                </div>

                {/* Dropdown */}
                <div className={isOpen ? style.dropdown : style.removeDropdown}>
                  <Link
                    to="/myprofile"
                    className={style.dropdownItem}
                    onClick={() => setOpen(false)}
                  >
                    <BiUserCircle className={style.dropdownItemIcon} /> MyProfile
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
                      logout();
                    }}
                  >
                    <MdLogout className={style.dropdownItemIcon} /> Logout
                  </Link>
                </div>
              </div>
            )}


            <button onClick={routeTosellerRegister} className={style.sellerBtn}>
              Become a Seller
            </button>
          </div>
        </div>
      </header>
    );
  };

  export default Navbar;
