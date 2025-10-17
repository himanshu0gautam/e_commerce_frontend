import React from "react";
import style from "./WareHouseDetails.module.css";
import { LuWarehouse } from "react-icons/lu";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";


const WareHouseDetails = () => {
  return (
    <div className={style.WareHouseDetailsContainer}>
      <header className={style.heading}>
        <h2>Warehouse Information</h2>
        <p>Provide information about your warehouse and storage facilities</p>
      </header>

      <section className={style.UsernameSection}>
        <p><LuWarehouse className={style.icons}/> Warehouse Information</p>
        <div className={style.UsernameForm}>
          {/* <div className={style.UernameInput}>
            <label>Warehouse Name*</label>
            <input
              type="text"
              placeholder="Choose a unique username"
            />
          </div> */}
          <div className={style.UsernamePassword}>
            <div className={style.Password}>
              <label>Warehouse Pincode</label>
              <input type="text" placeholder="Enter a Pincode" />
              <span>Write correct pincode</span>
            </div>
            <div className={style.Password}>
              <label>state</label>
              <input
                type="text"
                placeholder="eg., Maharashtra"
              />
            </div>
            <div className={style.Password}>
              <label>Storage Capacity</label>
              <input
                type="text"
                placeholder="eg., up to 500 unit"
              />
            </div>
          </div>
          <div className={style.UernameInput}>
            <label><FaLocationDot className={style.icons}/>Complete addres*</label>
            <input
              type="text"
              placeholder="Street address, building number ,landmarks"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default WareHouseDetails;
