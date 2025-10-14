import React, { useEffect, useState } from 'react'
import { MdOutlineManageAccounts } from "react-icons/md";
import VerifyStepIcons from '../../../components/register-verifications/regisetrVerifyStepsICons/VerifyStepIcons';
import style from './sellerREgister.module.css'
import { SiGoogledocs } from "react-icons/si";
import { CiBank } from "react-icons/ci";
import { LuWarehouse } from "react-icons/lu";
import AccountVerification from '../../../components/register-verifications/accountVerification-setup/AccountVerification';
import Pagination from '../../../components/register-verifications/pagination/Pagination';

const SellerRegister = () => {

  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  const [sellerData, setsellerData] = useState({
    phone: "",
  email: "",
  fullname: "",
  password: "",
  gst_no: "",
  organisation_email: "",
  primary_contact_person_name: "",
  primary_contact_person_phone: "",
  primary_contact_person_email: "",
  business_owner_name: "",
  business_owner_phone: "",
  business_owner_email: "",
  company_name: "",
  warehouse_pincode: "",
  warehouse_state: "",
  warehouse_full_address: "",
  warehouse_order_procising_capacity: "",
  bank_account_holder_name: "",
  bank_account_no: "",
  bank_IFCS: "",
  bank_name: "",
  account_type: "",
  nature_of_business: "",
  business_category: "",
  declaration: false
  })

 const updateSteps = (field, value) => {
  setsellerData((prev) => ({
    ...prev,
    [field]: value,
  }));
};


  useEffect(() => {
  console.log("Updated seller data:", sellerData);
}, [sellerData]);


  const steps = [
    {icon:<MdOutlineManageAccounts/>,name:"Account Setup"},
    {icon:<SiGoogledocs/>,name:"Business Details"},
    {icon:<CiBank/>,name:"Banking"},
    {icon:<LuWarehouse/>,name:"Warehouse"}
  ]

  return (
    <div className={style.RegisterMainContainer}>
      <div className={style.RegisterInnerConatiner}>
        <header className={style.heading}>
          <h2>Seller Verification Process</h2>
          <p>Complete all steps to become a verified B2B seller</p>
        </header>
        <VerifyStepIcons steps={steps}/>
        <AccountVerification updateSteps={updateSteps}/>
        <hr />
        <Pagination  
          currentStep={currentStep}
        setCurrentStep={setCurrentStep}
         totalSteps={totalSteps}/>
      </div>
    </div>
  )
}

export default SellerRegister