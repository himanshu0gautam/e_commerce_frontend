import React, { useEffect, useRef, useState } from "react";
import axios from "axios"
import styles from "./SupplierDashboardComponents.module.css"
import { IoMdAdd } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { getStockColors } from "../statusColors/statusColors"
import { statusColors } from "../statusColors/statusColors"
import { IoIosArrowDown } from "react-icons/io";
import Cookies from "js-cookie";
import Search from "../SearchBar/SearchBar";
import { axiosInstance_2 } from "../../store/APi/axiosInstance";  


// const filterOpt = ["Category","SubCategory","Advance Details","Image"]

const ProductManagement = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Select Category");
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

  const options = ["fashion", "electronic", "grosery", "other"];

  const handleSelect = (opt) => {
    setSelected(opt);
    setCategoryName(opt);
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


  // image preview
  const MAX_IMAGES = 4;
  const [images, setImages] = useState(Array(MAX_IMAGES).fill(null));
  const fileInputs = useRef([]);

  const handleImageChange = (index, event) => {
    const file = event.target.files && event.target.files[0];
    setImages(prev => {
      const copy = [...prev];
      copy[index] = {
        file,
        preview: URL.createObjectURL(file)
      };
      return copy;
    });
  };

  const handleRemove = (index) => {
    setImages(prev => {
      const copy = [...prev];
      // revoke object URL to free memory
      if (copy[index] && copy[index].preview) URL.revokeObjectURL(copy[index].preview);
      copy.splice(index, 1);
      return copy;
    });
  };

  const handleAddSlot = () => {
    setImages(prev => [...prev, null]); // a new empty slot
  };

  // Edit image (opens input)
  const handleEdit = (index) => {
    fileInputs.current[index]?.click();
  };


  const [category_name, setCategoryName] = useState("");
  const [sub_cat_name, setSub_cat_name] = useState("");
  const [nested_sub_cat_name, setnested_sub_cat_name] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [createdCategoryId, setCreatedCategoryId] = useState(null);
  const [createdProductId, setCreatedProductId] = useState(null);
  const [createdSubCategoryId, setCreatedSubCategoryId] = useState(null);
  const [formData, setFormData] = React.useState({
    product_name: "",
    sku: "",
    brand: "",
    location_city: "",
    location_state: "",
    location_country: "",
    gst_verified: "",
    product_unit: "",
    product_price: "",
    description: "",
    image: null
  });

  const [imageData, setImageData] = useState([]);

  // show message
  useEffect(() => {
    let timer;
    if (message) {
      // Set the message to clear after 3000 milliseconds (3 seconds)
      timer = setTimeout(() => {
        setMessage("");
      }, 3000);
    }

    // Cleanup function to clear the timer if the component unmounts 
    // or if the message changes before 3 seconds are up.
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [message]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value, // This requires the 'name' attribute on the input!
    }));
  };

  // add category post api
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      };

      if (overlayStep === "category") {
        const res = await axiosInstance_2.post("/seller/seller-category",
          { category_name: selected || category_name, description },
          config
        );

        console.log("category", res.data);

        setCreatedCategoryId(res.data?.id || res.data?.category?.id);
        setMessage(res.data.message || "Category saved successfully!");
        setCategoryName("");
        setOverlayStep("subcategory");
      }

      else if (overlayStep === "subcategory") {
        // create subcategory
        const subRes = await axiosInstance_2.post(
          "/seller/seller-subCategory",
          { sub_cat_name, description, category_id: createdCategoryId },    //category_id: createdCategoryId, // optional link   
          config
        );

        console.log("subcategory", subRes.data);
        const subCategoryId = subRes.data?.id || subRes.data?.subCategory?.id;
        setCreatedSubCategoryId(subCategoryId);

        if (nested_sub_cat_name) {
          const childRes = await axios.post(
            "http://localhost:3001/api/seller/seller-nestedSubCategory",
            { nested_sub_cat_name, description },
            config
          );

          console.log("child-category", childRes.data);
        }

        setMessage("Subcategory and Child Subcategory added successfully!");
        setSub_cat_name("");
        setnested_sub_cat_name("");
        setDescription("");
        setOverlayStep("child");
      }

      else if (overlayStep === "child") {

        const data = new FormData();
        data.append("product_name", formData.product_name);
        data.append("sku", formData.sku);
        data.append("brand", formData.brand);
        data.append("location_city", formData.location_city);
        data.append("location_state", formData.location_state);
        data.append("location_country", formData.location_country);
        data.append("gst_verified", formData.gst_verified);
        data.append("product_unit", formData.product_unit);
        data.append("product_price", formData.product_price);
        data.append("description", formData.description);

        if (createdCategoryId) {
          data.append("category_id", createdCategoryId);
        } else if (selected && selected !== "Select Category") {
          data.append("category_name", selected);
        } else if (category_name) {
          data.append("category_name", category_name);
        }

        if (createdSubCategoryId) {
          data.append("sub_category_id", createdSubCategoryId);
        } else if (sub_cat_name) {
          data.append("sub_category_name", sub_cat_name);
        }

        if (selectedDate) data.append("product_date", selectedDate);

        const response = await axiosInstance_2.post("/seller/list-product", data, config);

        console.log("product created", response.data);

        setFormData({ product_name: "", sku: "", brand: "", location_city: "", location_state: "", location_country: "", gst_verified: "", product_unit: "", product_price: "", description: "" });
        setMessage(response.data.message || "Product saved successfully!");
        setOverlayStep("image");
      }

      else if (overlayStep === "image") {

        const formdata = new FormData();

        // 1. Loop over the 'images' state (where your files actually are)
        images.forEach(imageObj => {
          // Check if the slot has a file object
          if (imageObj && imageObj.file) {
            // Append the actual File object using the key 'image'
            formdata.append("image", imageObj.file);
          }
        });

        if (createdProductId) {
          formdata.append("product_id", createdProductId);
        } else if (nested_sub_cat_name) {
          formdata.append("nested_sub_cat_name", nested_sub_cat_name)
        }

        const response = await axiosInstance_2.post(
          "/seller/add-image",
          formdata,
          {
            withCredentials: true,
          }
        );

        console.log("image url sucessfull", response.data);
        setImageData([])
        setMessage(response.data.message || "image_url successfull")
        setImages(Array(MAX_IMAGES).fill(null));
      }

      // add more api else if 

    } catch (error) {
      console.error("Error:", error);
      if (error.response) {
        setMessage(error.response.data.message || "Request failed.");
      } else {
        setMessage("Server error. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  const [product, setProduct] = useState([]);

  useEffect(() => {
    ; (async () => {
      const res = await axiosInstance_2.get("/seller/all-product?page=${page}&limit=5",
        { withCredentials: true }
      );
      console.log(res.data);
      setProduct(res.data.data)
    })();
  }, [])


  return (
    <div className={styles.productArea}>
      <div className={styles.productHeading}>
        <div className={styles.Heading}><h2>Product Management</h2>
          <button className={styles.addproductbtn} onClick={() => { setOverlayStep('category'); setIsOpen(true); }}><span><IoMdAdd /></span> Add Product </button>
        </div>

        {isOpen && (
          <div className={styles.productOverlay}>
            <div className={styles.productContent}>

              {message && <p className={styles.message}>{message}</p>}

              <div className={styles.productheading}><h3>Add New Product</h3> <span onClick={() => { setIsOpen(false); setOverlayStep('category'); }}><IoMdClose /></span> </div>
              <p>Fill in the details to add a new product to your catalog</p>

              <form className={styles.form} onSubmit={handleSubmit}>

                <nav>

                  <div className={styles.navbar}>
                    <h5
                      onClick={() => { setOverlayStep('category') }}
                      role="button"
                      tabIndex={0}
                      className={overlayStep === 'category' ? styles.activeTab : ''}

                      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setOverlayStep('category'); }}
                    >
                      Category
                    </h5>
                    <h5
                      role="button"
                      tabIndex={0}
                      className={overlayStep === 'subcategory' ? styles.activeTab : ''}
                      onClick={() => setOverlayStep('subcategory')}
                      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setOverlayStep('subcategory'); }}
                    >
                      Sub Category
                    </h5>
                    <h5
                      role="button"
                      tabIndex={0}
                      className={overlayStep === 'child' ? styles.activeTab : ''}
                      onClick={() => setOverlayStep('child')}
                      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setOverlayStep('child'); }}
                    >
                      Advance Details
                    </h5>
                    <h5
                      role="button"
                      tabIndex={0}
                      className={overlayStep === 'image' ? styles.activeTab : ''}
                      onClick={() => setOverlayStep('image')}
                      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setOverlayStep('image'); }}
                    >
                      Image
                    </h5>
                  </div>
                </nav>

                {/* CATEGORY STEP (default) */}
                {overlayStep === 'category' && (
                  <>
                    <div className={styles.dropdown}>
                      <h3 className={styles.ContentHeading}>Category Name<span>*</span></h3>
                      <div>
                        <button
                          type="button"
                          className={styles.dropdownBtn}
                          onClick={() => setOpen(!open)}
                        >
                          {selected}
                          <span className={styles.arrow}><IoIosArrowDown /></span>
                        </button>

                      </div>
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
                      <h3 className={styles.ContentHeading}>Product Date</h3>
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

                    <h3 className={styles.ContentHeading}>Product Description</h3>
                    <input
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className={styles.des}
                      type="text"
                      placeholder="Describe your product in detail. include features and benefits ..." />
                    <h6 style={{ color: "#9a9a9cff", margin: "6px" }}>Recommended: 100-500 characters</h6>

                    <div className={styles.formbtn}>
                      <button type="button" onClick={() => { setIsOpen(false) }}>Cancel</button>
                      {/* Submit will create category and advance to subcategory on success */}
                      <button type="submit" className={styles.btn} disabled={loading}>
                        {loading ? "Adding..." : "Next"}
                      </button>
                    </div>
                  </>
                )}

                {/* SUBCATEGORY STEP */}
                {overlayStep === 'subcategory' && (
                  <>
                    <div className={styles.container}>
                      <h3 className={styles.ContentHeading}>Sub Category Name</h3>
                      <input className={styles.subcatinput}
                        type="text"
                        value={sub_cat_name}
                        onChange={(e) => setSub_cat_name(e.target.value)}
                        placeholder="Enter sub category name like (Men, Women, kids, etc)" />

                      <h3 className={styles.ContentHeading}>Child Category Name</h3>
                      <input className={styles.subcatinput}
                        type="text"
                        value={nested_sub_cat_name}
                        onChange={(e) => setnested_sub_cat_name(e.target.value)}
                        placeholder="Enter Child category name like (Shirt, Pant, Trouser, etc)" />

                      <h3 className={styles.ContentHeading}>Product Description</h3>
                      <input
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className={styles.des}
                        type="text"
                        placeholder="Describe your product in detail. include features and benefits ..." />
                      <h6 style={{ color: "#9a9a9cff", margin: "6px" }}>Recommended: 100-500 characters</h6>


                    </div>
                    <div className={styles.formbtn}>
                      <button type="button" onClick={handlePrev}>Back</button>
                      {/* Submitting the form will create subcategory then advance to child */}
                      <button type="submit">Next</button>
                    </div>
                  </>
                )}

                {/*  advance STEP */}
                {overlayStep === 'child' && (
                  <>
                    <div className={styles.productcontainer}>
                      {/* <div className={styles.product}> */}
                      <h3 className={styles.ContentHeading}>Product Name</h3>
                      <input className={styles.productname}
                        type="text"
                        name="product_name"
                        value={formData.product_name}
                        onChange={handleChange}
                        placeholder="Enter Your Product Name" />
                      {/* </div> */}

                      {/* <div className={styles.product}> */}
                      <h3 className={styles.ContentHeading}>SKU</h3>
                      <input className={styles.productname}
                        type="text"
                        name="sku"
                        value={formData.sku}
                        onChange={handleChange}
                        placeholder="Enter Your SKU" />
                      {/* </div> */}

                      {/* <div className={styles.product}> */}
                      <h3 className={styles.ContentHeading}>Brand</h3>
                      <input className={styles.productname}
                        type="text"
                        name="brand"
                        value={formData.brand}
                        onChange={handleChange}
                        placeholder="Enter Your Brand Name" />
                      {/* </div> */}

                      {/* <div className={styles.product}> */}
                      <h3 className={styles.ContentHeading}>City</h3>
                      <input className={styles.productname}
                        type="text"
                        name="location_city"
                        value={formData.location_city}
                        onChange={handleChange}
                        placeholder="Enter Your City" />
                      {/* </div> */}
                      {/* <div className={styles.product}> */}
                      <h3 className={styles.ContentHeading}>State</h3>
                      <input className={styles.productname}
                        type="text"
                        name="location_state"
                        value={formData.location_state}
                        onChange={handleChange}
                        placeholder="Enter Your State" />
                      {/* </div> */}

                      {/* <div className={styles.product}> */}
                      <h3 className={styles.ContentHeading}>Country</h3>
                      <input className={styles.productname}
                        type="text"
                        name="location_country"
                        value={formData.location_country}
                        onChange={handleChange}
                        placeholder="Enter Your Country" />
                      {/* </div> */}

                      {/* <div className={styles.product}> */}
                      <h3 className={styles.ContentHeading}>GST Number</h3>
                      <input className={styles.productname}
                        type="text"
                        name="gst_verified"
                        value={formData.gst_verified}
                        onChange={handleChange}
                        placeholder="Enter Your GST Number (eg.abcd@1234)" />
                      {/* </div> */}

                      {/* <div className={styles.product}> */}
                      <h3 className={styles.ContentHeading}>Product Unit</h3>
                      <input className={styles.productname}
                        type="text"
                        name="product_unit"
                        value={formData.product_unit}
                        onChange={handleChange}
                        placeholder="Enter Product Quantity" />
                      {/* </div> */}

                      {/* <div className={styles.product}> */}
                      <h3 className={styles.ContentHeading}>Product Price</h3>
                      <input className={styles.productname}
                        type="text"
                        name="product_price"
                        value={formData.product_price}
                        onChange={handleChange}
                        placeholder="Enter Product Price" />
                      {/* </div> */}


                      <h3 className={styles.ContentHeading}>Product Description</h3>
                      <input
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        className={styles.advancedes}
                        type="text"
                        placeholder="Describe your product in detail. include features and benefits ..." />
                      <h6 style={{ color: "#9a9a9cff", margin: "6px" }}>Recommended: 100-500 characters</h6>


                    </div>
                    <div className={styles.formbtn}>
                      <button type="button" onClick={handlePrev}>Back</button>
                      {/* Submit the form on child step so handleSubmit runs and posts product data */}
                      <button type="submit">Next</button>
                    </div>
                  </>
                )}

                {/* IMAGE STEP */}
                {overlayStep === 'image' && (
                  <>
                    <div className={styles.container}>
                      <h3 className={styles.ContentHeading}>Upload Images</h3>
                      <div className={styles.imageinput}>
                        {images.map((img, idx) => (
                          <div key={idx} >
                            <input
                              type="file"
                              name="image"
                              accept="image/*"
                              className={styles.inputtag}
                              ref={(el) => (fileInputs.current[idx] = el)}
                              onChange={(e) => handleImageChange(idx, e)}
                            />
                            {img ? (
                              <div className={styles.imagepreview}>

                                <div className={styles.editbtn}>
                                  <img
                                    src={img.preview}
                                    alt="preview"
                                    style={{ width: 200, height: 150, objectFit: "cover", border: "1px solid #ddd", borderRadius: "10px" }}
                                  />
                                  <button className={styles.imagebtn} type="button" onClick={() => handleRemove(idx)}>
                                    Remove
                                  </button>
                                  <button className={styles.imagebtn} type="button" onClick={() => handleEdit(idx)}>
                                    Edit
                                  </button>
                                </div>
                              </div>
                            ) : (
                              <button className={styles.uploadimgbtn} type="button" onClick={() => handleEdit(idx)}>
                                Upload Image
                              </button>
                            )}
                          </div>
                        ))}
                      </div>


                    </div>
                    <div className={styles.formbtn}>
                      <button type="button" onClick={handlePrev}>Back</button>
                      <button type="submit">Finish</button>
                    </div>
                  </>
                )}

              </form>

            </div>

          </div>
        )}

        <h4>Manage your product catalog </h4>
      </div>

      {/* <div className={styles.productListing}>

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
              {sellerproduct.map((item) => {
                const { bgCol, color } = getStockColors(item.stock);
                const { colors, bgColor } = statusColors.find(s => s.status === item.status) || {};

                return (

                  <tr key={item.ProductID} className={styles.tr}>
                    <td className={`${styles.td} ${styles.textDark}`}>{item.ProductID}</td>
                    <td className={`${styles.td} ${styles.textGray}`}>{item.name}</td>
                    <td className={`${styles.td} ${styles.textGray}`}>{item.sku}</td>
                    <td className={`${styles.td} ${styles.textGray}`}>{item.category}</td>
                    <td className={`${styles.td} ${styles.price}`}>{item.Price}</td>
                    <td className={styles.td}>
                      <span className={`${styles.stock}`} style={{
                        backgroundColor: bgCol,
                        color: color,
                        padding: "0.5rem 1rem",
                        borderRadius: "12px",
                        marginBottom: "0.5rem"
                      }}>
                        {item.stock}
                      </span>
                    </td>
                    <td className={styles.td}>
                      <span className={`${styles.status}`}
                        style={{ backgroundColor: bgColor, color: colors, padding: "0.5rem 1rem", borderRadius: "6px", marginBottom: "0.5rem" }}>
                        {item.status}
                      </span>
                    </td>
                    <td className={styles.td}>
                      <button className={styles.actionBtn}>{item.action}</button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

      </div> */}
      <div className={styles.productListing}>

        {/* <div className={styles.dropdown}></div> */}

        <div className={styles.tableWrapper}>

          <div className={styles.searchProductWrap}>
            <Search padding={0} width={18} />
            <input type="text" onChange={(e) => setSearch(e.target.value)} className={styles.searchCustomer} />
          </div>

          <table className={styles.table}>
            <thead className={styles.thead}>
              <tr>
                <th className={styles.th}>Product ID</th>
                <th className={styles.th}>Name</th>
                <th className={styles.th}>SKU</th>
                <th className={styles.th}>Brand</th>
                <th className={styles.th}>Price (INR)</th>
                <th className={styles.th}>Stock</th>
                <th className={styles.th}>Status</th>
                <th className={styles.th}>Action</th>
              </tr>
            </thead>
            <tbody className={styles.padd}>
              {Array.isArray(product) && product.map((item) => {
                const { bgCol, color } = getStockColors(item.stock);
                const { colors, bgColor } = statusColors.find(s => s.status === item.status) || {};

                return (

                  <tr key={item.product_id} className={styles.tr}>
                    <td className={`${styles.td} ${styles.textDark}`}>{item.product_id}</td>
                    <td className={`${styles.td} ${styles.textGray}`}>{item.product_name}</td>
                    <td className={`${styles.td} ${styles.textGray}`}>{item.sku}</td>
                    <td className={`${styles.td} ${styles.textGray}`}>{item.brand}</td>
                    <td className={`${styles.td} ${styles.price}`}>{item.product_price}</td>
                    <td className={styles.td}>
                      <span className={`${styles.stock}`} style={{
                        backgroundColor: bgCol,
                        color: color,
                        padding: "0.5rem 1rem",
                        borderRadius: "12px",
                        marginBottom: "0.5rem"
                      }}>
                        {item.product_unit}
                      </span>
                    </td>
                    <td className={styles.td}>
                      <span className={`${styles.status}`}
                        style={{ backgroundColor: bgColor, color: colors, padding: "0.5rem 1rem", borderRadius: "6px", marginBottom: "0.5rem" }}>
                        {item.status}
                      </span>
                    </td>
                    <td className={styles.td}>
                      <button type="button" className={styles.actionBtn}>Edit</button>
                    </td>
                  </tr>
            )
              })}
          </tbody>
        </table>
      </div>

    </div>

    </div >
  );
};

export default ProductManagement;
