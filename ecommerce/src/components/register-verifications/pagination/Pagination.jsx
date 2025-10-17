import { useDispatch, useSelector } from "react-redux";
import style from "./Pagination.module.css";
import {
  nextRegistraionStep,
  prevRegstraionStep,
} from "../../../store/slices/Seller.slice";
import {toast} from 'react-toastify'
import {sellerRegistration} from "../../../store/actions/SellerAction"

const Pagination = ({ totalSteps }) => {
  const dispatch = useDispatch();
  
  const {
    registration: {
      currentStep,
      sellerData: {
       phone,
        email,
        fullname,
        password,
        gst_no,
        organisation_email,
        primary_contact_person_name,
        primary_contact_person_phone,
        primary_contact_person_email,
        company_name,
        owner_name,
        owner_email,
        owner_phone,
        branch_name,
        branch_address,
        branch_city,
        branch_state,
        branch_pincode,
        warehouse_pincode,
        warehouse_state,
        warehouse_full_address,
        warehouse_order_procising_capacity,
        bank_account_holder_name,
        pan_number,
        bank_account_no,
        bank_IFCS,
        bank_name,
        account_type,
        nature_of_business,
        business_category,
      },
    },
  } = useSelector((state) => state.seller);

  const {registration: {sellerData} } = useSelector((state) => state.seller);
  // STEP 1 VALIDATION

  const isStepValid =
    fullname?.trim() &&
    phone?.trim()?.length === 10 &&
    email?.includes("@") &&
    password?.length >= 8;

    console.log(isStepValid);
    
  // STEP 2 VALIDATION

  const isBusinessValid =
    gst_no?.trim() &&
    organisation_email?.includes("@") &&
    ["wholesaler", "retailer", "distributor", "manufacturer", "other"].includes(
      nature_of_business
    ) &&
    ["clothing", "jewellery", "shoes", "electronics", "others"].includes(
      business_category
    ) &&
    primary_contact_person_email?.includes("@") &&
    primary_contact_person_name?.trim() &&
    primary_contact_person_phone?.trim()?.length === 10 &&
    company_name?.trim() &&
    owner_name?.trim() &&
    owner_email?.includes("@") &&
    owner_phone?.trim()?.length === 10;

     // ========== STEP 3 (banking) — production-grade checks ==========
  const isValidPAN = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/i.test((pan_number || "").trim());
const isValidIFSC = /^[A-Z]{4}0[A-Z0-9]{6}$/i.test((bank_IFCS || "").trim());
const isValidAccountNumber = /^[0-9]{9,18}$/.test((bank_account_no || "").trim());
const isValidHolderName = /^[a-zA-Z\s]{2,80}$/.test((bank_account_holder_name || "").trim());
const isValidBankName = (bank_name || "").trim().length >= 3;
const isValidBranchName = (branch_name || "").trim().length >= 2;
const isValidBranchAddress = (branch_address || "").trim().length >= 5;
const isValidBranchPincode = (branch_pincode || "").trim().length >= 5;
const isValidCity = /^[a-zA-Z\s]{2,50}$/.test((branch_city || "").trim());
const isValidState = /^[a-zA-Z\s]{2,50}$/.test((branch_state || "").trim());
const isValidAccountType = ["business", "personal"].includes((account_type || "").toLowerCase());

const isBankingValid =
  isValidHolderName &&
  isValidPAN &&
  isValidAccountType &&
  isValidBankName &&
  isValidBranchName &&
  isValidAccountNumber &&
  isValidIFSC &&
  isValidBranchAddress &&
  isValidBranchPincode &&
  isValidCity &&
  isValidState ;

const iswarehousevalid =
    warehouse_pincode?.trim() &&
    warehouse_order_procising_capacity?.trim() &&
    warehouse_state?.trim() && 
    warehouse_full_address?.trim()
 ;

  const increasePage = () => {
    if (currentStep < totalSteps) {
      dispatch(nextRegistraionStep());
    }
  };
  const decreasePage = () => {
    if (currentStep > 1) {
      dispatch(prevRegstraionStep());
    }
  };

  const isContinueDisbaled = 
    (currentStep ===1 && !isStepValid) ||
    (currentStep ===2 && !isBusinessValid) ||
    (currentStep === 3 && !isBankingValid) ||
    (currentStep === 4 && !iswarehousevalid);

    console.log(sellerData);

    const finalRegsiterSubmition = async() => {
      try {
        const res = await dispatch(sellerRegistration(sellerData))
        toast.success(res.payload)
        console.log(res.payload);
      } catch (error) {
        toast.error(error.message)
      }
  }
    

  return (
    <div className={style.pageContainer}>
      <span>
        Step {currentStep} of {totalSteps}
      </span>
      <div className={style.ButtonSection}>
        <button onClick={decreasePage} disabled={currentStep === 1}>
          Back
        </button>
        {currentStep < totalSteps ?  <button
          onClick={increasePage}
          disabled={isContinueDisbaled}
        >
          Continue</button> 
          : <button onClick={finalRegsiterSubmition} className={style.submitButton}  disabled={isContinueDisbaled}>Submit</button>
          }
      </div>
    </div>
  );
};

export default Pagination;
