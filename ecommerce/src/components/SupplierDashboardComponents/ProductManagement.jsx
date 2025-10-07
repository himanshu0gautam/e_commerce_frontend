import React from "react";
import styles from "./SupplierDashboardComponents.module.css"



const ProductManagement = () => {
  return (
    <div className={styles.contentArea}>
      <div className={styles.card}>
        <h2>Product Management</h2>
        <p>Manage your product listings, pricing, and stock here.</p>
        <ul>
          <li>Add New Product</li>
          <li>Edit Existing Products</li>
          <li>Manage Inventory</li>
          <li>Set Tiered Pricing</li>
        </ul>
      </div>
    </div>
  );
};

export default ProductManagement;
