import React from "react";
import styles from "./SupplierDashboardComponents.module.css"


const DashboardOverview = () => {
  return (
    <div className={styles.contentArea}>
      <div className={`${styles.card} ${styles.kpiSection}`}>
        <div className={styles.kpiCard}>
          <h3>120</h3>
          <p>New Orders</p>
        </div>
        <div className={styles.kpiCard}>
          <h3>₹85,000</h3>
          <p>Pending Payouts</p>
        </div>
        <div className={styles.kpiCard}>
          <h3>32</h3>
          <p>New RFQs</p>
        </div>
        <div className={styles.kpiCard}>
          <h3>92%</h3>
          <p>Profile Health</p>
        </div>
      </div>

      <div className={`${styles.card} ${styles.chartContainer}`}>
        <div className={styles.chartPlaceholder}>
          Sales Performance Chart
        </div>
      </div>

      <div className={styles.card}>
        <h3>Order Pipeline</h3>
        <div className={styles.pipeline}>
          <span>New</span>
          <span>Processing</span>
          <span>Shipped</span>
          <span>Delivered</span>
        </div>
      </div>

      <div className={styles.card}>
        <h3>Market Insights</h3>
        <p>Real-time data on trending categories and buyer demand.</p>
      </div>

      <div className={styles.card}>
        <h3>Recent Activity</h3>
        <ul>
          <li>Order #4321 placed by BuyerX</li>
          <li>Message received from BuyerY</li>
          <li>RFQ submitted for Electronics</li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardOverview;
