import React from "react";
import style from "./StatusButton.module.css";
import { IoCloseCircleOutline } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
const StatusButton = () => {
  return (
    <div className={style.StatusButtonContainer}>
      <div className={style.Reject}>
        <button> <IoCloseCircleOutline className={style.rejectIcon} /><p>reject</p></button>
      </div>
      <div className={style.approved}>
        <button className={style.approvedBtn}>
            <FaCheckCircle className={style.approvedIcon} />
            <p>Approve</p>
        </button>
      </div>
    </div>
  );
};

export default StatusButton;
