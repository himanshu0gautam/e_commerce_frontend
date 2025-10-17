import React, { useState } from "react";
import styles from "./SupplierDashboardStyle/Setting.module.css"

const cat = ["General","Billing","Shipping","Notifications"];
console.log(cat);

const Settings = () => {
  const [menu,setMenu]= useState("General")
  const [taxEnabled, setTaxEnabled] = useState(false);
  return (
    
    <div className={styles.settingsContainer}>
      <h2 className={styles.pageTitle}>Settings</h2>

      {/* Category Buttons */}
      <div className={styles.btnwrap}>
        {cat.map((catItem, index) => (
          <button
            key={index}
            className={styles.btn}
            onClick={() => setMenu(catItem)}
            style={{
              backgroundColor: menu === catItem ? "white" : "transparent",
              boxShadow:
                menu === catItem ? "0 2px 4px rgba(0,0,0,0.1)" : "none",
            }}
          >
            {catItem}
          </button>
        ))}
      </div>

      {/* General Tab */}
      {menu === "General" && (
        <>
          <div className={styles.contsec}>
            <div className={styles.flexcol}>
              <h3>Store Information</h3>
              <div>
                <span className={styles.inputGroup}>
                  Store Name
                  <input
                    type="text"
                    value="B2B Commerce Store"
                    readOnly
                    className={styles.input}
                  />
                </span>
                <span className={styles.inputGroup}>
                  Contact Email
                  <input
                    type="text"
                    value="contact@store.com"
                    readOnly
                    className={styles.input}
                  />
                </span>
              </div>

              <div>
                <span className={styles.inputGroup}>
                  Address
                  <input
                    type="text"
                    value="123 Commerce Street, Business District"
                    readOnly
                    className={styles.input}
                  />
                </span>
                <span className={styles.inputGroup}>
                  Phone Number
                  <input
                    type="text"
                    value="+1 234 567 8900"
                    readOnly
                    className={styles.input}
                  />
                </span>
              </div>

              <div className={styles.flexcol}>
                <h3>Store Description</h3>
                <input
                  type="text"
                  value="Leading B2B ecommerce platform for wholesale and bulk orders."
                  readOnly
                  className={styles.input}
                />
              </div>
            </div>
            <button className={styles.saveBtn}>Save Changes</button>
          </div>

          <div className={styles.contsec}>
            <h3>Business Settings</h3>
            <div className={styles.flexcol}>
              <span className={styles.inputGroup}>
                Minimum Order Amount
                <input
                  type="text"
                  value="20,000"
                  readOnly
                  className={styles.input}
                />
              </span>
              <span className={styles.inputGroup2}>
                Tax Calculation
                <div
                    className={`${styles.toggleSwitch} ${
                      taxEnabled ? styles.activeToggle : ""
                    }`}
                    onClick={() => setTaxEnabled(!taxEnabled)}
                  >
                    <div className={styles.toggleCircle}></div>
                  </div>
              </span>
            </div>
            <button className={styles.saveBtn}>Save Changes</button>
          </div>
        </>
      )}

      {/* Placeholder for other sections */}
      {menu === "Billing" && (
        <div className={styles.contsec}>
          <h3>Payment Methods</h3>
          <p>Manage accepted payment methods</p>
          {/* <p style={{ color: "#555" }}>
            Configure your billing details and invoice preferences here.
          </p> */}
        </div>
      )}

      {menu === "Shipping" && (
        <div className={styles.contsec}>
          <h3>Shipping Settings</h3>
          <p style={{ color: "#555" }}>
            Manage your delivery partners, regions, and rates here.
          </p>
        </div>
      )}

      {menu === "Notifications" && (
        <div className={styles.contsec}>
          <h3>Notification Preferences</h3>
          <p style={{ color: "#555" }}>
            Control how you receive updates and alerts about orders.
          </p>
        </div>
      )}

    </div>
  );
};
 

export default Settings;
