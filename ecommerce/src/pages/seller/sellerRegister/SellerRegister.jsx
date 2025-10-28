import { MdOutlineManageAccounts } from "react-icons/md";
import VerifyStepIcons from '../../../components/register-verifications/regisetrVerifyStepsICons/VerifyStepIcons';
import style from './sellerREgister.module.css'
import { SiGoogledocs } from "react-icons/si";
import { CiBank } from "react-icons/ci";
import { LuWarehouse } from "react-icons/lu";
import AccountVerification from '../../../components/register-verifications/accountVerification-setup/AccountVerification';
import Pagination from '../../../components/register-verifications/pagination/Pagination';
import BusinessDeails from '../../../components/register-verifications/BusinessDetails/BusinessDeails';
import WareHouseDetails from '../../../components/register-verifications/warehouseDetails/WareHouseDetails';
import BankingDetails from '../../../components/register-verifications/bankingDetails/BankingDetails';
// import {currentStep} from '../../../store/slices/Seller.slice'
import { useSelector } from 'react-redux';
import RegisterSuccessfully from "../../../components/register-verifications/registersuccessfully/registerSuccessfully";

const SellerRegister = () => {

  const {registration:{currentStep},register} = useSelector(state => state.seller)
  
  // const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  const steps = [
    {icon:<MdOutlineManageAccounts/>,name:"Account Setup"},
    {icon:<SiGoogledocs/>,name:"Business Details"},
    {icon:<CiBank/>,name:"Banking"},
    {icon:<LuWarehouse/>,name:"Warehouse"}
  ]

  return (
    <div className={style.RegisterMainContainer}>
      {!register ? <div className={style.RegisterInnerConatiner}>
        <header className={style.heading}>
          <h2>Seller Verification Process</h2>
          <p>Complete all steps to become a verified B2B seller</p>
        </header>
        <VerifyStepIcons currentStep={currentStep}
         totalSteps={totalSteps} steps={steps}/>
        {currentStep === 1 && <AccountVerification/>}
        {currentStep === 2 && <BusinessDeails />}
        {currentStep === 3 && <BankingDetails />}
        {currentStep === totalSteps && <WareHouseDetails />}
        <hr />
        <Pagination  
         totalSteps={totalSteps}/>
      </div> : <RegisterSuccessfully/>}

      
      
        
    </div>
  )
}

export default SellerRegister