import { useDispatch, useSelector } from "react-redux";
import style from "./Pagination.module.css";
import {
  nextRegistraionStep,
  prevRegstraionStep,
} from "../../../store/slices/Seller.slice";

const Pagination = ({ totalSteps }) => {
  const dispatch = useDispatch();
  const {
    registration: { currentStep ,sellerData: { phone, email, password, fullname,gst_no,organisation_email,nature_of_business,business_category,primary_contact_person_name,primary_contact_person_email,primary_contact_person_phone,owner_name,owner_email,owner_phone }},
    
  } = useSelector((state) => state.seller);

  const isStepValid =
    fullname?.trim() &&
    phone?.trim()?.length === 10 &&
    email?.includes("@") &&
    password?.length >= 8;

    const isBusinessValid = 
  gst_no?.trim() &&
  organisation_email?.includes("@") &&
  ["wholesaler","retailer","distributor","manufacturer","other"].includes(nature_of_business) &&
  ["clothing","jewellery","shoes","electronics","others"].includes(business_category) &&
  primary_contact_person_email?.includes("@") &&
  primary_contact_person_name?.trim() &&
  primary_contact_person_phone?.trim()?.length === 10 &&
  owner_name?.trim() &&
  owner_email?.includes("@") &&
  owner_phone?.trim()?.length === 10;


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

  return (
    <div className={style.pageContainer}>
      <span>
        Step {currentStep} of {totalSteps}
      </span>
      <div className={style.ButtonSection}>
        <button onClick={decreasePage} disabled={currentStep === 1}>
          Back
        </button>
        <button
          onClick={increasePage}
          disabled={currentStep === totalSteps || (!isStepValid && !isBusinessValid)}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Pagination;
