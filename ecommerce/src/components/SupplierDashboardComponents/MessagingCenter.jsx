import React from "react";
import styles from "./SupplierDashboardComponents.module.css"



const MessagingCenter = () => {
  return (
    <div className={styles.contentArea}>
      <div className={styles.card}>
        <h2>Messaging Center</h2>
        <p>Communicate with buyers directly.</p>
        <ul>
          <li>Inbox</li>
          <li>Sent Messages</li>
          <li>Archived</li>
        </ul>
      </div>
    </div>
  );
};

export default MessagingCenter;
