import React from "react";
import styles from "./SupplierDashboardComponents.module.css"



const FinancePayouts = () => {
  return (
    <div className={styles.contentArea}>
      <div className={styles.card}>
        <h2>Finance & Payouts</h2>
        <p>Track earnings and manage transactions securely.</p>
        <ul>
          <li>Pending Payouts</li>
          <li>Completed Transactions</li>
          <li>Invoices</li>
          <li>Refund Requests</li>
        </ul>
      </div>
    </div>
  );
};

export default FinancePayouts;
