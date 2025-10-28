import React from "react";
import style from "./WareHouseDetails.module.css";
import { LuWarehouse } from "react-icons/lu";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import {updateSellerRegistrationField} from "../../../store/slices/Seller.slice"

const WareHouseDetails = () => {

  const dispatch = useDispatch()

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
              <input type="text" placeholder="Enter a Pincode" 
              onChange={(e) => dispatch(updateSellerRegistrationField({field:"warehouse_pincode",value:e.target.value}))}
              />
              <span>Write correct pincode</span>
            </div>
            <div className={style.Password}>
              <label>state</label>
              <input
                type="text"
                placeholder="eg., Maharashtra"
                onChange={(e) => dispatch(updateSellerRegistrationField({field:"warehouse_state",value:e.target.value}))}
              />
            </div>
            <div className={style.Password}>
              <label>Storage Capacity</label>
              <input
                type="text"
                placeholder="eg., up to 500 unit"
                onChange={(e) => dispatch(updateSellerRegistrationField({field:"warehouse_order_procising_capacity",value:e.target.value}))}
              />
            </div>
          </div>
          <div className={style.UernameInput}>
            <label><FaLocationDot className={style.icons}/>Complete addres*</label>
            <input
              type="text"
              placeholder="Street address, building number ,landmarks"
              onChange={(e) => dispatch(updateSellerRegistrationField({field:"warehouse_full_address",value:e.target.value}))}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default WareHouseDetails;
