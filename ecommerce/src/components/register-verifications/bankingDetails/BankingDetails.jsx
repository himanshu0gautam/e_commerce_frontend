import React, { useState } from "react";
import style from "./BankingDetail.module.css";
import { RiSecurePaymentFill } from "react-icons/ri";
import { MdErrorOutline } from "react-icons/md";
import { useDispatch } from "react-redux";
import { updateSellerRegistrationField } from "../../../store/slices/Seller.slice";
const BankingDetails = () => {
  const dispatch = useDispatch();

  const [accountNumber, setaccountNumber] = useState()
  const [confirmAccountNumber, setconfirmAccountNumber] = useState()
  const [AccountNumberError, setAccountNumberError] = useState()



  const handelPassword = (e) => {
    setaccountNumber(e.target.value)
    if(confirmAccountNumber && confirmAccountNumber === e.target.value){
      setAccountNumberError('')
    }
  }

  const handelConfirmPassword = (e) => {
     setconfirmAccountNumber(e.target.value)
     if(accountNumber !== e.target.value){
      setAccountNumberError("Account Number is not matched")
     }else{
      dispatch(updateSellerRegistrationField({field:"bank_account_no",value:e.target.value}))
      setAccountNumberError("")
     }
  }

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
            <input
              type="text"
              placeholder="ABC Trading Company"
              onChange={(e) =>
                dispatch(
                  updateSellerRegistrationField({
                    field: "bank_account_holder_name",
                    value: e.target.value,
                  })
                )
              }
            />
            <span>Should be your registered business name</span>
          </div>
          <div className={style.UsernamePassword}>
            <div className={style.Password}>
              <label>PAN number*</label>
              <input
                type="text"
                placeholder="ABCD123F"
                onChange={(e) =>
                  dispatch(
                    updateSellerRegistrationField({
                      field: "pan_number",
                      value: e.target.value,
                    })
                  )
                }
              />
              <span>Company PAN number linked to account</span>
            </div>
            <div className={style.Password}>
              <label>Account Type</label>
              <select
                onChange={(e) =>
                  dispatch(
                    updateSellerRegistrationField({
                      field: "account_type",
                      value: e.target.value,
                    })
                  )
                }
              >
                <option value="">Select account type</option>
                <option value="business">Business</option>
                <option value="personal">Personal</option>
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
                onChange={(e) => dispatch(updateSellerRegistrationField({field:"bank_name",value:e.target.value}))}
              />
            </div>
            <div className={style.Password}>
              <label>Branch name*</label>
              <input type="text" placeholder="e.g., Main Branch, City Center" 
              onChange={(e) => dispatch(updateSellerRegistrationField({field:"branch_name",value:e.target.value}))}
              />
            </div>
          </div>
          <div className={style.UsernamePassword}>
            <div className={style.Password}>
              <label>Bank Account Number*</label>
              <input type="text" placeholder="Enter account number" 
              value={accountNumber}
              onChange={handelPassword}
              />
              <span style={{color:"red"}}>{setAccountNumberError && AccountNumberError}</span>
            </div>
            <div className={style.Password}>
              <label>Confirm Account Number**</label>
              <input type="text" placeholder="e.g., Main Branch, City Center" 
              value={confirmAccountNumber}
              onChange={handelConfirmPassword}
              />
            </div>
          </div>
          <div className={style.UsernamePassword}>
            <div className={style.Password}>
              <label>IFSC Code*</label>
            <input type="text" placeholder="e.g., SBIN0001234" 
            onChange={(e) => dispatch(updateSellerRegistrationField({field:"bank_IFCS",value:e.target.value}))}
            />
            <span>11-character Indian Financial System Code</span>
            </div>
            <div className={style.Password}>
              <label>Branch pincode</label>
              <input type="text" placeholder="e.g., Main Branch, City Center" 
              onChange={(e) => dispatch(updateSellerRegistrationField({field:"branch_pincode",value:e.target.value}))}
              />
            </div>
          </div>
        </div>
      </section>

      {/* BRANCH ADDRESS */}

      <section className={style.UsernameSection}>
        <p>Branch Address</p>
        <div className={style.UsernameForm}>
          <div className={style.UernameInput}>
            <label>Branch Addres*</label>
            <input type="text" placeholder="Complete Branch Address"
            onChange={(e) => dispatch(updateSellerRegistrationField({field:"branch_address",value:e.target.value}))}
            />
          </div>
          <div className={style.UsernamePassword}>
            <div className={style.Password}>
              <label>City*</label>
              <input type="text" placeholder="e.g., Mumbai"
               onChange={(e) => dispatch(updateSellerRegistrationField({field:"branch_city",value:e.target.value}))}
              />
              <span>Company PAN number linked to account</span>
            </div>
            <div className={style.Password}>
              <label>State*</label>
              <input type="text" placeholder="e.g., Maharastra" 
              onChange={(e) => dispatch(updateSellerRegistrationField({field:"branch_state",value:e.target.value}))}
              />
            </div>
          </div>
        </div>
      </section>

      <section className={style.warningSection}>
        <MdErrorOutline className={style.secureIcon} />
        <div className={style.innerSection}>
          <h2>Important: Verify your bank details carefully</h2>
          <span>
            Incorrect information may delay your payments. Double-check all
            account numbers and routing codes.
          </span>
        </div>
      </section>
    </div>
  );
};

export default BankingDetails;
