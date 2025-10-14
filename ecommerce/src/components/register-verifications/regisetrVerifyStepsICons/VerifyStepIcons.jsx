import React from "react";
import style from "./VerifyStepsICons.module.css";
import { IoIosArrowForward } from "react-icons/io";

const VerifyStepIcons = ({ steps }) => {
  return (
    <div className={style.sellerRegisterSteps}>
      {steps.map((step, index) =>(
         <div key={index} className={style.sellerStepContainer}>
           <div  className={style.iconsConatiner}>
              {step.icon}
          </div>
          <p>{step.name}</p>
         </div>
        )
      )}
    </div>
  );
};

export default VerifyStepIcons;
