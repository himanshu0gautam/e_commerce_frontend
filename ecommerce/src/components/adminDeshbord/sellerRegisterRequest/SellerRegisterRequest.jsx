import React from "react";
import style from "./SellerRegisterReques.module.css";
import { LuEye } from "react-icons/lu";

const SellerRegisterRequest = () => {
  const sellerRegisterRequest = [
    {
      id: 1,
      phone: "8595633219",
      email: "panchalkunal2002@gmail.com",
      fullname: "kunal",
      password: "$2b$10$8q/iiViKzYoAkC9UnFmqqe2HzFmEA1L/vAVnq2oWtRfQvWMiq04hy",
      gst_no: "27AAAAA0000A1Z5",
      organisation_email: "org@example.com",
      primary_contact_person_name: "rahul",
      primary_contact_person_phone: "8595633219",
      primary_contact_person_email: "rahul@gmail.com",
      company_name: "ABC pvt",
      owner_name: "kunal",
      owner_email: "panchalkunal200@gmail.com",
      owner_phone: "8595633219",
      branch_address: "123 Test Street",
      branch_city: "Mumbai",
      branch_state: "Maharashtra",
      branch_pincode: "400001",
      warehouse_pincode: "400002",
      warehouse_state: "Maharashtra",
      warehouse_full_address: "456 Warehouse Lane, Mumbai",
      warehouse_order_procising_capacity: "1000",
      bank_account_holder_name: "kunal",
      pan_number: "AAAAA1234A",
      bank_account_no: "123456789012",
      bank_IFCS: "HDFC0001234",
      bank_name: "State Bank Oof India",
      account_type: "business",
      approval_status: "pending",
      nature_of_business: "retailer",
      business_category: "jewellery",
      role: "seller",
      declaration: 0,
      is_active: 1,
      created_at: "2025-10-17",
      updated_at: "2025-10-17T10:20:52.000Z",
      branch_name: "Main branch",
    },
  ];


  const renderSellerRegisterRequest = () => {
    return sellerRegisterRequest.map((sellerRegisterRequest) => 
    <div key={sellerRegisterRequest.id} className={style.SigleSeller}>
        <p>{sellerRegisterRequest.id}</p>
        <h4>{sellerRegisterRequest.company_name}</h4>
        <h4>{sellerRegisterRequest.gst_no}</h4>
        <div className={style.contact}>
            <h4>{sellerRegisterRequest.owner_email}</h4>
            <h4>{sellerRegisterRequest.owner_phone}</h4>
        </div>
        <h4>{sellerRegisterRequest.created_at}</h4>
        <h4>{sellerRegisterRequest.approval_status}</h4>
        <div className={style.btn}><button> <LuEye />View <details></details></button></div>
    </div>
);
  };

  return (
    <div className={style.SellerRegisterRequestContainer}>
      <header className={style.RegisterRequesHeader}>
        <h2>Seller Registration Requests</h2>
        <select className={style.Status}>
          <option value="All">All Status</option>
          <option value="pending">Pending</option>
          <option value="approved">Approved</option>
          <option value="reject">Reject</option>
        </select>
      </header>
      <div className={style.sellerList}>
        <div className={style.heading}>
            <h3>Request ID</h3>
            <h3>Company Name</h3>
            <h3>GST Number</h3>
            <h3>Contact</h3>
            <h3>Submitted</h3>
            <h3>Status</h3>
            <h3>Actions</h3>
        </div>
        {renderSellerRegisterRequest()}
    </div>
    </div>
  );
};

export default SellerRegisterRequest;
