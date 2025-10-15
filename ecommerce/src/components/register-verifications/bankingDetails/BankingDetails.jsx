import React from "react";
import style from "./BankingDetail.module.css";
import { RiSecurePaymentFill } from "react-icons/ri";
import { MdErrorOutline } from "react-icons/md";
const BankingDetails = () => {
  return (
    <div className={style.BankingDetailsContainer}>
      <header className={style.heading}>
        <h2>Banking Information</h2>
        <p>Provide your business bank account details for payments</p>
      </header>

      {/* SECURE SECTION */}
      <section className={style.lastSection}>
        <RiSecurePaymentFill className={style.secureIcon} />
        <div className={style.innerSection}>
          <h2>Your banking information is encrypted and securely stored</h2>
          <span>We use bank-level security to protect your financial data</span>
        </div>
      </section>

      {/* ACCOUNT HOLDER INFO */}

      <section className={style.UsernameSection}>
        <p>Account Holder Information</p>
        <div className={style.UsernameForm}>
          <div className={style.UernameInput}>
            <label>Account Holder Name*</label>
            <input type="text" placeholder="ABC Trading Company" />
            <span>Should be your registered business name</span>
          </div>
          <div className={style.UsernamePassword}>
            <div className={style.Password}>
              <label>PAN number*</label>
              <input type="text" placeholder="ABCD123F" />
              <span>Company PAN number linked to account</span>
            </div>
            <div className={style.Password}>
              <label>Account Type</label>
              <select name="" id="">
                <option value="">business</option>
                <option value="">personal</option>
              </select>
            </div>
          </div>
        </div>
      </section>

        {/* BANK ACCOUNT DETAILS */}

      <section className={style.UsernameSection}>
        <p>Bank Account Details</p>
        <div className={style.UsernameForm}>
          <div className={style.UsernamePassword}>
            <div className={style.Password}>
              <label>Bank Name*</label>
              <input
                type="text"
                placeholder="e.g., State Bank of india,HDFC Bank"
              />
            </div>
            <div className={style.Password}>
              <label>Branch name*</label>
              <input type="text" placeholder="e.g., Main Branch, City Center" />
            </div>
          </div>
          <div className={style.UsernamePassword}>
            <div className={style.Password}>
              <label>Bank Account Number*</label>
              <input type="text" placeholder="Enter account number" />
            </div>
            <div className={style.Password}>
              <label>Confirm Account Number**</label>
              <input type="text" placeholder="e.g., Main Branch, City Center" />
            </div>
          </div>
          <div className={style.UernameInput}>
            <label>IFSC Code*</label>
            <input type="text" placeholder="e.g., SBIN0001234" />
            <span>11-character Indian Financial System Code</span>
          </div>
        </div>
      </section>

        {/* BRANCH ADDRESS */}

      <section className={style.UsernameSection}>
        <p>Branch Address</p>
        <div className={style.UsernameForm}>
          <div className={style.UernameInput}>
            <label>Branch Addres*</label>
            <input type="text" placeholder="Complete Branch Address" />
          </div>
          <div className={style.UsernamePassword}>
            <div className={style.Password}>
              <label>City*</label>
              <input type="text" placeholder="e.g., Mumbai" />
              <span>Company PAN number linked to account</span>
            </div>
            <div className={style.Password}>
              <label>State*</label>
               <input type="text" placeholder="e.g., Maharastra"/>
            </div>
          </div>
        </div>
      </section>

      <section className={style.warningSection}>
        <MdErrorOutline className={style.secureIcon} />
        <div className={style.innerSection}>
          <h2>Important: Verify your bank details carefully</h2>
          <span>Incorrect information may delay your payments. Double-check all account numbers and routing codes.</span>
        </div>
      </section>
    </div>
  );
};

export default BankingDetails;
