import React from "react";
import styles from "./SupplierDashboardComponents.module.css";
import { IndianRupee, ShoppingCart, UsersRound, Package ,TrendingUp, TrendingDown, PieChart } from "lucide-react";
import BarChart from "../Chart/BarChart";
import SalesPieChart from '../Chart/SalesPieChart'
import {statusColors}   from "../statusColors/statusColors"
const DashboardOverview = () => {

  const growthRevenue = "+12.5%";
  const growthOrders = "+8.2%"
  const growthCustomers = "+4.7%"
  const growthProducts = "-2.1%"

  const recentOrders = [
  {
    orderId: "ORD-001",
    customer: "Acme Corp",
    amount: 2450,
    status: "Completed"
  },
  {
    orderId: "ORD-002",
    customer: "TechStart Inc",
    amount: 1890,
    status: "Processing"
  },
  {
    orderId: "ORD-003",
    customer: "Global Solutions",
    amount: 3200,
    status: "Shipped"
  },
  {
    orderId: "ORD-004",
    customer: "BuildCo",
    amount: 950,
    status: "Pending"
  }
];



  return (
    <div className={styles.dashboard}>
      <h2>Supplier Dashboard</h2>

      <div className={styles.firstCont}>

        <div className={styles.card}>
          <div className={styles.firstblock}>
            <span>Total Revenue</span>
            <div className={styles.iconWrap}>
              <IndianRupee color="gray" size={18} />
            </div>
          </div>
          <div className={styles.lowerblock}>
            <p className={styles.digit}>₹328,000</p>
            <p><span><TrendingUp 
            color={growthRevenue.includes('+') ?  "#00A63D" : "#FF4D4D"} size={16} /></span>
            <span className={styles.percent} style={{ color: growthRevenue.includes('+') ? "#00A63D" : "#FF4D4D" }} >{growthRevenue}
              </span> from last month</p>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.firstblock}>
            <span>Total Orders</span>
            <div className={styles.iconWrap}>
              <ShoppingCart color="gray" size={18} />
            </div>
          </div>
           <div className={styles.lowerblock}>
            <p className={styles.digit}>1,031</p>
            <p><span><TrendingUp color={growthOrders.includes('+') ? "#00A63D" : "#FF4D4D"} size={16} /></span>  <span className={styles.percent} style={{color :growthOrders.includes('+') ?"#00A63D" : "#FF4D4D"  }}>+8.2%</span> from last month</p>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.firstblock}>
            <span>Active Customers</span>
            <div className={styles.iconWrap}>
              <UsersRound color="gray" size={18} />
            </div>
          </div>
          <div className={styles.lowerblock}>
            <p className={styles.digit}>284</p>
            <p><span><TrendingUp  color={growthCustomers.includes('+') ?  "#00A63D" : "#FF4D4D"} size={16} /></span>  <span className={styles.percent} style={{color : growthCustomers.includes('+')? "#00A63D" : "#FF4D4D"}}>+4.7%</span> from last month</p>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.firstblock}>
            <span>Products</span>
            <div className={styles.iconWrap}>
              <Package color="gray" size={18} />
            </div>
          </div>
          <div className={styles.lowerblock}>
            <p className={styles.digit}>1,247</p>
            <p><span><TrendingDown  color={growthProducts.includes('+') ?  "#00A63D" : "#FF4D4D"}  size={16} /></span>  <span className={styles.percent} style={{color : growthProducts.includes('+') ?  "#00A63D" : "#FF4D4D"}}>-2.1%</span> from last month</p>
          </div>
        </div>
      </div>
      <div className={styles.firstCont}>
        <div className={styles.chart}>
          <h3>Sales Overview</h3 >
          <BarChart/>
        </div>

        <div className={styles.chart}>
          <h3>Sales by Category</h3>
           <SalesPieChart/>
        </div>
      </div>
      <div className={styles.firstCont}>
        <div className={styles.Lowercard} >
          <h3>Recent Orders</h3>
          {recentOrders.map((ord)=>{
            const {color,bgCol} = statusColors.find(s=> s.status === ord.status) || {};
            return(
              <div key={ord.orderId} className={styles.orderWrap}>
                 <div className={styles.flex}>
                  <div className={styles.orderInfo}>
                   <p>{ord.orderId}</p>
                   <p  className={styles.customer}>{ord.customer}</p>
                 </div>
                 <div className={styles.orderInfo2}>
                  <p> ₹{ord.amount}</p>
                  <p style={{ backgroundColor: bgCol, color: color, padding: "0.5rem 1rem", borderRadius: "6px", marginBottom: "0.5rem" }}>{ord.status}</p>
                 </div>
                 </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
