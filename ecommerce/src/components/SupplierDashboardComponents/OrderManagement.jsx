import React from "react";
import styles from "./SupplierDashboardComponents.module.css"
import {statusColors}   from "../statusColors/statusColors"

 const allOrders = [
    { orderId: "ORD-001", customer: "Acme Corp", date: "2025-10-10", items: 5, total: 2450, payment: "Paid", status: "Completed" },
    { orderId: "ORD-002", customer: "TechStart Inc", date: "2025-10-11", items: 3, total: 1890, payment: "Paid", status: "Processing" },
    { orderId: "ORD-003", customer: "Global Solutions", date: "2025-10-11", items: 8, total: 3200, payment: "Paid", status: "Shipped" },
    { orderId: "ORD-004", customer: "BuildCo", date: "2025-10-12", items: 2, total: 950, payment: "Pending", status: "Pending" },
    { orderId: "ORD-005", customer: "InnovateLab", date: "2025-10-12", items: 6, total: 2780, payment: "Paid", status: "Processing" },
    { orderId: "ORD-006", customer: "MegaRetail", date: "2025-10-13", items: 12, total: 5440, payment: "Paid", status: "Shipped" },
    { orderId: "ORD-007", customer: "SmartOffice Ltd", date: "2025-10-13", items: 4, total: 1230, payment: "Paid", status: "Completed" }
  ];
  const filterOptions = ["All Orders","Pending","Processing","Shipped","Completed"]

const OrderManagement = () => {
 
  // const [selectedFilter,se]
  return (
    <div>
      <h2>Orders</h2>
      <div>

      </div>
      <div></div>
    </div>
  );
};

export default OrderManagement;
