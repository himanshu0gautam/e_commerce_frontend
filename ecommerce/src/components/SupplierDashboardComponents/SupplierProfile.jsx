import React from "react";
import styles from "./SupplierDashboardComponents.module.css"



const SupplierProfile = () => {
  return (
    <div className={styles.contentArea}>
      <div className={styles.card}>
        <h2>Supplier Profile</h2>
        <p>Manage your company details and certifications.</p>
        <ul>
          <li>Company Information</li>
          <li>Business License Upload</li>
          <li>Certifications</li>
          <li>Profile Health</li>
        </ul>
      </div>
    </div>
  );
};

export default SupplierProfile;
