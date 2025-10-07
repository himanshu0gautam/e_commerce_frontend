import React from "react";
import styles from "./SupplierDashboardComponents.module.css"



const OrderManagement = () => {
  return (
    <div className={styles.contentArea}>
      <div className={styles.card}>
        <h2>Order Management</h2>
        <p>Track and process all customer orders.</p>
        <ul>
          <li>View Pending Orders</li>
          <li>Manage Shipments</li>
          <li>Track Deliveries</li>
          <li>Order History</li>
        </ul>
      </div>
    </div>
  );
};

export default OrderManagement;
