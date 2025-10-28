import React, { useState } from "react";
import styles from "./SupplierDashboardComponents.module.css"
import { statusColors } from "../statusColors/statusColors"

import { Eye, Search, ChevronDown ,Check,Download, } from 'lucide-react'
const allOrders = [
  { orderId: "ORD-001", customer: "Acme Corp", date: "2025-10-10", items: 5, total: 2450, payment: "Paid", status: "Completed" },
  { orderId: "ORD-002", customer: "TechStart Inc", date: "2025-10-11", items: 3, total: 1890, payment: "Paid", status: "Processing" },
  { orderId: "ORD-003", customer: "Global Solutions", date: "2025-10-11", items: 8, total: 3200, payment: "Paid", status: "Shipped" },
  { orderId: "ORD-004", customer: "BuildCo", date: "2025-10-12", items: 2, total: 950, payment: "Pending", status: "Pending" },
  { orderId: "ORD-005", customer: "InnovateLab", date: "2025-10-12", items: 6, total: 2780, payment: "Paid", status: "Processing" },
  { orderId: "ORD-006", customer: "MegaRetail", date: "2025-10-13", items: 12, total: 5440, payment: "Paid", status: "Shipped" },
  { orderId: "ORD-007", customer: "SmartOffice Ltd", date: "2025-10-13", items: 4, total: 1230, payment: "Paid", status: "Completed" }
];
const filterOptions = ["All Orders", "Pending", "Processing", "Shipped", "Completed"]
const optionsRecents = ["Most Recent","Oldest First","Highest Value","Lowest Value"]

const OrderManagement = () => {
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('All Orders')
  const [dropdown,setDropdown] = useState(false)
  const [option,setoption] = useState("Most Recent")


  const filterOrder = allOrders.filter(order => {
    const matchStatus = filter === 'All Orders' ? 'All Orders' : order.status === filter;
    const matchSearch = order.customer.toLowerCase().includes(search.toLowerCase());
    return matchSearch && matchStatus
  })
  const sortedOrders = filterOrder.sort((a, b) => {
    if (option === "Most Recent") return new Date(b.date) - new Date(a.date);
    if (option === "Oldest First") return new Date(a.date) - new Date(b.date);
    if (option === "Highest Value") return b.total - a.total;
    if (option === "Lowest Value") return a.total - b.total;
    return 0;
  });


  console.log(dropdown);
  

  return (
    <div>
      <h2>Orders</h2>
      <div className={styles.contFirst}>
        {filterOptions.map((statusbtn, index) => (
          <button key={index} className={styles.filterbtn} onClick={() => setFilter(statusbtn)} style={{ background: filter === statusbtn ? "white" : "#ececf0" }}>
            {statusbtn}
          </button>
        ))}
      </div>
      <div className={styles.contSecond}>
        <div className={styles.topBar}>
          
          <div className={styles.searchCustomerWrap}>
            <Search padding={0} width={18} />
            <input type="text" onChange={(e) => setSearch(e.target.value)} className={styles.searchCustomer} />
          </div>
          <div className={styles.gapping}>
            <div className={styles.wrap}>
              <div className={styles.dropdownBtn} onClick={()=>setDropdown((prev) => !prev)}>
              <div >{option}</div>
              <ChevronDown  width={16} padding={5}/>
            </div>
            {dropdown &&
                <div className={styles.drop}>
                  {optionsRecents.map((opt,index)=>{
                    return(
                    <p key={index} onClick={()=>{setoption(opt);setDropdown(false);}}>{opt}{opt === option && <Check width={18}/>}</p>
                    )
                  })}
                  
                </div>
              }
            </div>

            <div className={styles.dropdownBtn}>
              <Download width={16}  />
              <div>Export</div>
            </div>
          </div>
        </div>
        <table className={styles.table}>
          <thead>
            <tr className={styles.tablehead}>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Date</th>
              <th>Items</th>
              <th>Total</th>
              <th>Payment</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {sortedOrders.map((ord) => {
              const { bgCol, col } = statusColors.find(
                (s) => s.status === ord.status
              )
              return (
                <tr key={ord.orderId} className={styles.tablebody}  >
                  <td>{ord.orderId}</td>
                  <td>{ord.customer}</td>
                  <td>{ord.date}</td>
                  <td>{ord.items}</td>
                  <td>₹{ord.total}</td>
                  <td>{ord.payment}</td>
                  <td ><span style={{ backgroundColor: bgCol, padding: ".5rem .8rem", borderRadius: "1rem" }}>{ord.status}</span></td>
                  <td><span className={styles.eyeAction}><Eye className={styles.eye} /></span></td>
                </tr>

              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderManagement;
