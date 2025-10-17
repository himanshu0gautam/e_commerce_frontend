import React from "react";
import styles from "./SupplierDashBoardComponents.module.css"


const TradeAssurance = () => {
  return (
    <div className={styles.contentArea}>
      <div className={styles.card}>
        <h2>Trade Assurance</h2>
        <p>Ensure secure transactions with money-back protection.</p>
        <ul>
          <li>Ongoing Claims</li>
          <li>Resolved Cases</li>
          <li>New Assurance Requests</li>
        </ul>
      </div>
    </div>
  );
};

export default TradeAssurance;
