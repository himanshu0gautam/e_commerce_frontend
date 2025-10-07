import React from "react";
import styles from "./SupplierDashboardComponents.module.css"


const Settings = () => {
  return (
    <div className={styles.contentArea}>
      <div className={styles.card}>
        <h2>Settings</h2>
        <p>Update preferences and account security.</p>
        <ul>
          <li>Account Information</li>
          <li>Password & Security</li>
          <li>Notification Preferences</li>
          <li>Privacy Settings</li>
        </ul>
      </div>
    </div>
  );
};

export default Settings;
