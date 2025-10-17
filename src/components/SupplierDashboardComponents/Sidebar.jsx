import React from "react";
import styles from "./SupplierDashboardComponents.module.css"


import { FaTachometerAlt, FaBox, FaClipboardList, FaChartLine, FaMoneyBill, FaHandshake, FaStore, FaComments, FaCog } from "react-icons/fa";

const Sidebar = ({ activePage, setActivePage }) => {
  return (
    <aside className={styles.sidebar}>
      {/* <div className={styles.logo}>MyB2B</div> */}
      <nav>
        <ul>
          <li className={`${styles.sidebarItem} ${activePage === "dashboard" ? styles.active : ""}`} onClick={() => setActivePage("dashboard")}><FaTachometerAlt /> Dashboard</li>
          <li className={`${styles.sidebarItem} ${activePage === "product" ? styles.active : ""}`} onClick={() => setActivePage("product")}><FaBox /> Product Management</li>
          <li className={`${styles.sidebarItem} ${activePage === "order" ? styles.active : ""}`} onClick={() => setActivePage("order")}><FaClipboardList /> Order Management</li>
          <li className={`${styles.sidebarItem} ${activePage === "insights" ? styles.active : ""}`} onClick={() => setActivePage("insights")}><FaChartLine /> Marketplace Insights</li>
          <li className={`${styles.sidebarItem} ${activePage === "finance" ? styles.active : ""}`} onClick={() => setActivePage("finance")}><FaMoneyBill /> Finance & Payouts</li>
          <li className={`${styles.sidebarItem} ${activePage === "assurance" ? styles.active : ""}`} onClick={() => setActivePage("assurance")}><FaHandshake /> Trade Assurance</li>
          <li className={`${styles.sidebarItem} ${activePage === "profile" ? styles.active : ""}`} onClick={() => setActivePage("profile")}><FaStore /> Supplier Profile</li>
          <li className={`${styles.sidebarItem} ${activePage === "messaging" ? styles.active : ""}`} onClick={() => setActivePage("messaging")}><FaComments /> Messaging Center</li>
          <li className={`${styles.sidebarItem} ${activePage === "settings" ? styles.active : ""}`} onClick={() => setActivePage("settings")}><FaCog /> Settings</li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
