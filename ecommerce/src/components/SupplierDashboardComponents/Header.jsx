import React from "react";
import styles from "./SupplierDashboardComponents.module.css"


import { FaBell, FaEnvelope, FaUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.searchBar}>
        <input type="text" placeholder="Search orders, products, buyers..." />
      </div>
      <div className={styles.headerIcons}>
        <FaBell  className={styles.icons}/>
        <FaEnvelope className={styles.icons}/>
        <FaUserCircle className={styles.icons}/>
      </div>
    </header>
  );
};

export default Header;
