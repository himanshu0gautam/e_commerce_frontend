import React from "react";
import styles from "./SupplierDashboardComponents.module.css"



const MarketplaceInsights = () => {
  return (
    <div className={styles.contentArea}>
      <div className={styles.card}>
        <h2>Marketplace Insights</h2>
        <p>Stay updated with market trends and buyer demand.</p>
        <ul>
          <li>Trending Categories</li>
          <li>Top Regions Buying</li>
          <li>Price Trends</li>
        </ul>
      </div>
    </div>
  );
};

export default MarketplaceInsights;
