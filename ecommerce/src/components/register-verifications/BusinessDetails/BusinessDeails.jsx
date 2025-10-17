import React, { useState } from "react";
import style from "./BusinessDetails.module.css";
import { MdOutlineVerified } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import {updateSellerRegistrationField} from '../../../store/slices/Seller.slice'
import { useDispatch } from "react-redux";
import {toast} from 'react-toastify'
const BusinessDeails = () => {
  const dispatch = useDispatch()
  const [GSTNumber, setGSTNumber] = useState()

  const handelGSTSubmit = (e) => {
    e.preventDefault()
    if(!GSTNumber){
      toast.error("Please enter GST number")
    }
    toast.success("submited GST Number")
    dispatch(updateSellerRegistrationField({field:"gst_no",value:GSTNumber}))
  }

  return (
    <div className={style.BusinessDeailsContainer}>

        {/* HEADING */}

      <header className={style.heading}>
        <h2>Account Setup & Verification</h2>
        <p>Create your seller account and verify your contact details</p>
      </header>

        {/* GST VERIFICATION */}

       <section className={style.Verification}>
              <div className={style.IconsAndHeading}>
                <MdOutlineVerified className={style.Icon} />
                <h2>GST Verification</h2>
              </div>
              <form className={style.form} onSubmit={handelGSTSubmit}>
                <label>GST Number(GSTIN)*</label>
                <div className={style.Input}>
                  <input
                    type="text"
                    placeholder="2AAA0A000A123"
                    onChange={(e) => setGSTNumber(e.target.value)}
                  />
                  <button type="submit" >
                  <IoIosSearch /> verify GST
                  </button>
                </div>
                <span>Enter your 15-digit GSTIN for verification</span>
                {/* {error && <span className={style.errorMessage}>{error}</span>}
                {succes && <span className={style.successMessage}>{succes}</span>} */}
              </form>
        </section>

        {/* ORGANIZATION DETALS */}

        <section className={style.UsernameSection}>
                <p>Organization Details</p>
                <div className={style.UsernameForm}>
                  <div className={style.UernameInput}>
                    <label>Company Name*</label>
                    <input type="text"
                     placeholder="ABC Trading Company"
                     onChange={(e) => {
                      dispatch(updateSellerRegistrationField({field:"company_name",value:e.target.value}))
                     }}
                     />
                    <span>Official company name</span>
                  </div>
                  <div className={style.UernameInput}>
                    <label>Organization Email ID*</label>
                    <input type="text" 
                    placeholder="info@gmail.com"
                    onChange={(e) => {
                      dispatch(updateSellerRegistrationField({field:"organisation_email",value:e.target.value}))
                    }}
                    />
                    <span>Official company email address</span>
                  </div>
                  <div className={style.UsernamePassword}>
                    <div className={style.Password}>
                      <label>Nature of business*</label>
                      <input type="text" 
                      placeholder="distributor,retailer etc"
                      onChange={(e) => {
                        dispatch(updateSellerRegistrationField({field:"nature_of_business",value:e.target.value}))
                      }}
                       />
                    </div>
                    <div className={style.Password}>
                      <label>Business Category</label>
                      <input type="text" 
                      placeholder="electronics ,jewellery"
                       onChange={(e) => {
                        dispatch(updateSellerRegistrationField({field:"business_category",value:e.target.value}))
                      }}
                      />
                    </div>
                  </div>
                </div>
        </section>

        {/* PRIMARY CONTACT PERSON DETAILS */}

        <section className={style.UsernameSection}>
                <p>Primary contact person Details</p>
                <div className={style.UsernameForm}>
                  <div className={style.UernameInput}>
                    <label>Primary contact person name**</label>
                    <input type="text" 
                    placeholder="Abcjah"
                     onChange={(e) => {
                        dispatch(updateSellerRegistrationField({field:"primary_contact_person_name",value:e.target.value}))
                      }}
                    />
                  </div>
                  <div className={style.UsernamePassword}>
                    <div className={style.Password}>
                      <label>Primary Person Email ID*</label>
                      <input type="text"
                       placeholder="info@gmail.com"
                        onChange={(e) => {
                        dispatch(updateSellerRegistrationField({field:"primary_contact_person_email",value:e.target.value}))
                      }}
                       />
                    </div>
                    <div className={style.Password}>
                      <label>Primary Person phone number*</label>
                      <input type="text" 
                      placeholder="98********"
                        onChange={(e) => {
                        dispatch(updateSellerRegistrationField({field:"primary_contact_person_phone",value:e.target.value}))
                      }}
                      />
                    </div>
                  </div>
                </div>
        </section>

        {/* OWNER PERSON DETAILS */}

        <section className={style.UsernameSection}>
                <p>Owner Details</p>
                <div className={style.UsernameForm}>
                  <div className={style.UernameInput}>
                    <label>Owner name**</label>
                    <input type="text"
                     placeholder="Abcjah"
                      onChange={(e) => {
                        dispatch(updateSellerRegistrationField({field:"owner_name",value:e.target.value}))
                      }}
                     />
                  </div>
                  <div className={style.UsernamePassword}>
                    <div className={style.Password}>
                      <label>Owner Email ID*</label>
                      <input type="text" 
                      placeholder="info@gmail.com" 
                      onChange={(e) => {
                        dispatch(updateSellerRegistrationField({field:"owner_email",value:e.target.value}))
                      }}
                      />
                    </div>
                    <div className={style.Password}>
                      <label>Owner phone number*</label>
                      <input type="text" 
                      placeholder="98********"
                      onChange={(e) => {
                        dispatch(updateSellerRegistrationField({field:"owner_phone",value:e.target.value}))
                      }}
                      />
                    </div>
                  </div>
                </div>
        </section>
        
    </div>
  );
};

export default BusinessDeails;
