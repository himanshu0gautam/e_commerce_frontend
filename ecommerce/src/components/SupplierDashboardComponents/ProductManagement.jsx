import React, { useEffect, useRef, useState } from "react";
import styles from "./SupplierDashboardComponents.module.css"
import { IoMdAdd } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

const sellerproduct = [
  { ProductID: 0, name: "himanshu", sku: "2", category: "fashion", Price: "2000", stock: "343", status: "active", action: "***" },
  { ProductID: 1, name: 'Laptop', sku: 'LP-001', category: 'Electronics', Price: '55000', stock: '12', status: 'Active', action: 'Edit' },
  { ProductID: 2, name: 'Shoes', sku: 'SH-101', category: 'Fashion', Price: '2500', stock: '0', status: 'Draft', action: 'Edit' },
  { ProductID: 3, name: 'Mixer', sku: 'MX-450', category: 'Home', Price: '3500', stock: '8', status: 'Inactive', action: 'Edit' },
  { ProductID: 3, name: 'Mixer', sku: 'MX-450', category: 'Home', Price: '3500', stock: '8', status: 'Inactive', action: 'Edit' },
  { ProductID: 3, name: 'Mixer', sku: 'MX-450', category: 'Home', Price: '3500', stock: '8', status: 'Inactive', action: 'Edit' },
]

const ProductManagement = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Most Recent");
  // overlayStep controls which panel is shown inside the single overlay
  // possible values: 'category' | 'subcategory' | 'child' | 'image'
  const [overlayStep, setOverlayStep] = useState('category');

  // move to next step or finish
  const handleNext = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    if (overlayStep === 'category') return setOverlayStep('subcategory');
    if (overlayStep === 'subcategory') return setOverlayStep('child');
    if (overlayStep === 'child') return setOverlayStep('image');
    // if on image or unknown, close overlay
    setIsOpen(false);
  };

  // move to previous step (prev/back)
  const handlePrev = () => {
    if (overlayStep === 'subcategory') return setOverlayStep('category');
    if (overlayStep === 'child') return setOverlayStep('subcategory');
    if (overlayStep === 'image') return setOverlayStep('child');
    // default: go to category
    setOverlayStep('category');
  };

  const options = ["Most Recent", "High to Low", "Low to High"];

  const handleSelect = (option) => {
    setSelected(option);
    setOpen(false);
  };

  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");

  const today = new Date();
  const [month, setMonth] = useState(today.getMonth());
  const [year, setYear] = useState(today.getFullYear());

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const handleDateClick = (day) => {
    const newDate = `${day} ${monthNames[month]} ${year}`;
    setSelectedDate(newDate);
    setShowCalendar(false);
  };


  return (
    <div className={styles.productArea}>
      <div className={styles.productHeading}>
        <div className={styles.Heading}><h2>Product Management</h2>
          <button className={styles.addproductbtn} onClick={() => { setOverlayStep('category'); setIsOpen(true); }}><span><IoMdAdd /></span> Add Product </button>
        </div>

        {isOpen && (
          <div className={styles.productOverlay}>
            <div className={styles.productContent}>
              <div className={styles.productheading}><h3>Add New Product</h3> <span onClick={() => { setIsOpen(false); setOverlayStep('category'); }}><IoMdClose /></span> </div>
              <p>Fill in the details to add a new product to your catalog</p>

              <form className={styles.form} onSubmit={handleNext}>

                <nav>
                  <div className={styles.navbar}>
                    <h4
                      role="button"
                      tabIndex={0}
                      className={overlayStep === 'category' ? styles.activeTab : ''}
                      onClick={() => setOverlayStep('category')}
                      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setOverlayStep('category'); }}
                    >
                      Category
                    </h4>
                    <h4
                      role="button"
                      tabIndex={0}
                      className={overlayStep === 'subcategory' ? styles.activeTab : ''}
                      onClick={() => setOverlayStep('subcategory')}
                      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setOverlayStep('subcategory'); }}
                    >
                      Sub Category
                    </h4>
                    <h4
                      role="button"
                      tabIndex={0}
                      className={overlayStep === 'child' ? styles.activeTab : ''}
                      onClick={() => setOverlayStep('child')}
                      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setOverlayStep('child'); }}
                    >
                      Child Category
                    </h4>
                    <h4
                      role="button"
                      tabIndex={0}
                      className={overlayStep === 'image' ? styles.activeTab : ''}
                      onClick={() => setOverlayStep('image')}
                      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setOverlayStep('image'); }}
                    >
                      Image
                    </h4>
                  </div>
                </nav>

                {/* CATEGORY STEP (default) */}
                {overlayStep === 'category' && (
                  <>
                    <div className={styles.dropdown}>
                      <h3>Category Name<span>*</span></h3>
                      <button
                        type="button"
                        className={styles.dropdownBtn}
                        onClick={() => setOpen(!open)}
                      >
                        {selected}
                        <span className={styles.arrow}>{open ? "▲" : "▼"}</span>
                      </button>

                      {open && (
                        <ul className={styles.dropdownList}>
                          {options.map((opt) => (
                            <li
                              key={opt}
                              onClick={() => handleSelect(opt)}
                              className={`${styles.dropdownItem} ${opt === selected ? styles.active : ""}`}
                            >
                              {opt}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    <div className={styles.container}>
                      <h3>Product Date</h3>
                      <input
                        type="text"
                        readOnly
                        value={selectedDate}
                        placeholder="Select a date"
                        className={styles.inputcalender}
                        onClick={() => setShowCalendar(!showCalendar)}
                      />

                      {showCalendar && (
                        <div className={styles.calendarBox}>
                          <div className={styles.header}>
                            <button
                              type="button"
                              onClick={() =>
                                month === 0
                                  ? (setMonth(11), setYear(year - 1))
                                  : setMonth(month - 1)
                              }
                            >
                              ‹
                            </button>
                            <span>{monthNames[month]} {year}</span>
                            <button
                              type="button"
                              onClick={() =>
                                month === 11
                                  ? (setMonth(0), setYear(year + 1))
                                  : setMonth(month + 1)
                              }
                            >
                              ›
                            </button>
                          </div>

                          <div className={styles.days}>
                            {[...Array(daysInMonth)].map((_, i) => (
                              <div
                                key={i}
                                onClick={() => handleDateClick(i + 1)}
                                className={styles.day}
                              >
                                {i + 1}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    <h3>Product Description</h3>
                    <input className={styles.des} type="text" placeholder="Describe your product in detail" />
                    <div className={styles.formbtn}>
                      <button type="button" onClick={() => { setIsOpen(false) }}>Cancel</button>
                      <button type="submit">Next</button>
                    </div>
                  </>
                )}

                {/* SUBCATEGORY STEP */}
                {overlayStep === 'subcategory' && (
                  <>
                    <div className={styles.container}>
                      <h3>Sub Category Name</h3>
                      <input className={styles.des} type="text" placeholder="Enter sub category name" />
                    </div>
                    <div className={styles.formbtn}>
                      <button type="button" onClick={handlePrev}>Back</button>
                      <button type="button" onClick={handleNext}>Next</button>
                    </div>
                  </>
                )}

                {/* CHILD CATEGORY STEP */}
                {overlayStep === 'child' && (
                  <>
                    <div className={styles.container}>
                      <h3>Child Category Name</h3>
                      <input className={styles.des} type="text" placeholder="Enter child category name" />
                    </div>
                    <div className={styles.formbtn}>
                      <button type="button" onClick={handlePrev}>Back</button>
                      <button type="button" onClick={handleNext}>Next</button>
                    </div>
                  </>
                )}

                {/* IMAGE STEP */}
                {overlayStep === 'image' && (
                  <>
                    <div className={styles.container}>
                      <h3>Upload Images</h3>
                      <input className={styles.des} type="file" accept="image/*" />
                    </div>
                    <div className={styles.formbtn}>
                      <button type="button" onClick={handlePrev}>Back</button>
                      <button type="button" onClick={handleNext}>Finish</button>
                    </div>
                  </>
                )}

              </form>

            </div>

          </div>
        )}

        <h4>Manage your product catalog </h4>
      </div>

      <div className={styles.productListing}>

        <div className={styles.dropdown}></div>

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead className={styles.thead}>
              <tr>
                <th className={styles.th}>Product ID</th>
                <th className={styles.th}>Name</th>
                <th className={styles.th}>SKU</th>
                <th className={styles.th}>Category</th>
                <th className={styles.th}>Price (INR)</th>
                <th className={styles.th}>Stock</th>
                <th className={styles.th}>Status</th>
                <th className={styles.th}>Action</th>
              </tr>
            </thead>
            <tbody className={styles.padd}>
              {sellerproduct.map((item) => (
                <tr key={item.ProductID} className={styles.tr}>
                  <td className={`${styles.td} ${styles.textDark}`}>{item.ProductID}</td>
                  <td className={`${styles.td} ${styles.textGray}`}>{item.name}</td>
                  <td className={`${styles.td} ${styles.textGray}`}>{item.sku}</td>
                  <td className={`${styles.td} ${styles.textGray}`}>{item.category}</td>
                  <td className={`${styles.td} ${styles.price}`}>{item.Price}</td>
                  <td className={styles.td}>
                    <span className={`${styles.stock} ${item.stock === '0' ? styles.stockRed : styles.stockGreen}`}>
                      {item.stock}
                    </span>
                  </td>
                  <td className={styles.td}>
                    <span className={`${styles.status} ${item.status === 'Active'
                      ? styles.statusActive
                      : item.status === 'Draft'
                        ? styles.statusDraft
                        : styles.statusInactive
                      }`}>
                      {item.status}
                    </span>
                  </td>
                  <td className={styles.td}>
                    <button className={styles.actionBtn}>{item.action}</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>

    </div>
  );
};

export default ProductManagement;
