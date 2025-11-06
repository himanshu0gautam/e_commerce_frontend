import React, { useContext, useEffect, useRef, useState, useCallback } from "react";
import axios from "axios"
import styles from "./SupplierDashboardComponents.module.css"
import { IoMdAdd } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { getStockColors } from "../statusColors/statusColors"
import { statusColors } from "../statusColors/statusColors"
import { IoIosArrowDown } from "react-icons/io";
import Cookies from "js-cookie";
import Search from "../SearchBar/SearchBar";
import { ProductContext } from "./ProductContext";
import { axiosInstance_2 } from "../../store/APi/axiosInstance"


// const filterOpt = ["Category","SubCategory","Advance Details","Image"]

const ProductManagement = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [overlayStep, setOverlayStep] = useState('category');
  const [selected, setSelected] = useState("Select Category")
  const options = ["fashion", "electronic", "grosery", "other"];
  const [enabledSteps, setEnabledSteps] = useState({
    category: true,
    child: false,
    image: false,
  });

  // move to next step or finish
  const handleNext = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    if (overlayStep === 'category') return setOverlayStep('child');
    if (overlayStep === 'child') return setOverlayStep('image');
    // if on image or unknown, close overlay
    setIsOpen(false);
  };

  // move to previous step (prev/back)
  const handlePrev = () => {
    if (overlayStep === 'child') return setOverlayStep('category');
    if (overlayStep === 'image') return setOverlayStep('child');
    // default: go to category
    setOverlayStep('category');
  };

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
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  // const [createdCategoryId, setCreatedCategoryId] = useState(null);
  // const [createdProductId, setCreatedProductId] = useState(null);
  // const [createdSubCategoryId, setCreatedSubCategoryId] = useState(null);
  // const [imageData, setImageData] = useState([]);
  // const [nested_sub_cat_name, setnested_sub_cat_name] = useState("");
  // const [description, setDescription] = useState("");


  // product form data (top-level so validation and submit handlers can access it)
  // const [formData, setFormData] = useState({
  //   product_name: "",
  //   sku: "",
  //   brand: "",
  //   location_city: "",
  //   location_state: "",
  //   location_country: "",
  //   gst_verified: "",
  //   product_unit: "",
  //   product_price: "",
  //   description: "",
  //   image: null
  // });

  // search state for product listing
  const [search, setSearch] = useState("");


  //   {
  //   "phone": "9988210022",
  //   "password": "Password@12345"
  //   }

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

  // handle category select from dropdown (used in the category list)
  // const handleSelect = (opt) => {
  //   setSelected(opt);
  //   setOpen(false);
  // };


  // validate category and subcategory 
  const handleButton = async (e) => {
    if (e && e.preventDefault) e.preventDefault();
    setMessage("");

    if (overlayStep === 'category') {
      if (!selected || selected === 'Select Category') {
        setMessage('Please select a category');
        return;
      }
      if (!sub_cat_name || !sub_cat_name.trim()) {
        setMessage('Please enter a sub category name');
        return;
      }

      // enable and move to child (advance details)
      setEnabledSteps(prev => ({ ...prev, child: true }));
      setOverlayStep('child');
      return;
    }

    // CHILD STEP: validate required product fields before enabling image step
    if (overlayStep === 'child') {
      if (!formData.product_name || !formData.product_name.trim()) {
        setMessage('Please enter a product name');
        return;
      }
      if (!formData.sku || !formData.sku.trim()) {
        setMessage('Please enter SKU');
        return;
      }

      // enable and move to image step
      setEnabledSteps(prev => ({ ...prev, image: true }));
      setOverlayStep('image');
      return;
    }

    // IMAGE STEP: finish / submit (placeholder behavior)
    if (overlayStep === 'image') {
      setLoading(true);
      try {
        // Here you would construct form data and call API to create the product.
        // For now, simulate success and close overlay.
        setMessage('Product added successfully');
        setTimeout(() => {
          setIsOpen(false);
          setOverlayStep('category');
        }, 700);
      } catch (err) {
        setMessage('Error adding product');
      } finally {
        setLoading(false);
      }
    }

  };


  // api integrate
  const [categoryData, setCategoryData] = useState({
    category_name: selected || category_name,
    sub_cat_name: "",
    nested_sub_cat_name: "",
    description: "",
  });

  const [productData, setProductData] = useState({
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
    color: "",
    size: "",
    product_Material: "",
    product_specification: "",
    image: null
  })

  const [imageData, setImageData] = useState([])

  const productWithCategoryApi = async (data) => {
    try {
      console.log(axiosInstance_2.defaults.baseURL);
      const res = await axiosInstance_2.post("/seller/list-product", data,
        {
          headers: { "Content-Type": "application/json" }
        })
      console.log("product created", res.data);

    } catch (error) {
      console.log("axiosInstance_2 is mein dikkat hai", error);
    }
  }

  const handleCategorySubmit = (e) => {
    e.preventDefault();

    if (!categoryData.category_name || !categoryData.sub_cat_name || !categoryData.nested_sub_cat_name) {
      setMessage("All fields required!");
      return;
    }

    console.log("Category Data Collected:", categoryData);
    setOverlayStep("child");
  }

  const handleProductSubmit = async (e) => {
    e.preventDefault();

    if (!productData.product_name || !productData.product_price) {
      alert("Product name and price are required!");
      return;
    }

    const finalPayload = {
      ...categoryData,
      ...productData,
    };

    console.log("Final Merged Payload:", finalPayload);

    try {
      const response = productWithCategoryApi(finalPayload, { withCredentials: true });

      console.log(response.data);

      setCategoryData({
        category_name: "",
        sub_cat_name: "",
        nested_sub_cat_name: "",
        description: "",
      });

      setProductData({
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
        color: "",
        size: "",
        product_Material: "",
        product_specification: "",
        image: null
      });
      setOverlayStep("image");

    } catch (error) {
      console.log("product creation mein dikkat hai ", error);

      console.log("Submission failed, staying on product step.");
    }

  }

  const handleImageApi = async () => {
   const formdata = new FormData();

    images.forEach(imageObj => {
      if (imageObj && imageObj.file) {
        formdata.append("image", imageObj.file);
      }
    });

   try {
     const response = await axiosInstance_2.post("/seller/add-image", formdata)
 
     console.log("image sucessfull upload", response.data);
     setImageData([])
   } catch (error) {
    console.log("Image upload failed", error.response ? error.response.data : error.message); 
   }
  }



  const { products, loading: productsLoading, setPage } = useContext(ProductContext);

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

              <form className={styles.form} onSubmit={handleCategorySubmit}>

                <nav>

                  <div className={styles.navbar}>
                    <h5
                      role="button"
                      tabIndex={0}
                      className={overlayStep === 'category' ? styles.activeTab : ''}
                      onClick={() => enabledSteps.category && setOverlayStep('category')}
                      onKeyDown={(e) => { if ((e.key === 'Enter' || e.key === ' ') && enabledSteps.category) setOverlayStep('category'); }}
                      style={{ opacity: enabledSteps.category ? 1 : 0.5, pointerEvents: enabledSteps.category ? 'auto' : 'none' }}
                    >
                      Category
                    </h5>
                    <h5
                      role="button"
                      tabIndex={0}
                      className={overlayStep === 'child' ? styles.activeTab : ''}
                      onClick={() => enabledSteps.child && setOverlayStep('child')}
                      onKeyDown={(e) => { if ((e.key === 'Enter' || e.key === ' ') && enabledSteps.child) setOverlayStep('child'); }}
                      style={{ opacity: enabledSteps.child ? 1 : 0.5, pointerEvents: enabledSteps.child ? 'auto' : 'none' }}
                    >
                      Advance Details
                    </h5>
                    <h5
                      role="button"
                      tabIndex={0}
                      className={overlayStep === 'image' ? styles.activeTab : ''}
                      onClick={() => enabledSteps.image && setOverlayStep('image')}
                      onKeyDown={(e) => { if ((e.key === 'Enter' || e.key === ' ') && enabledSteps.image) setOverlayStep('image'); }}
                      style={{ opacity: enabledSteps.image ? 1 : 0.5, pointerEvents: enabledSteps.image ? 'auto' : 'none' }}
                    >
                      Image
                    </h5>

                  </div>

                </nav>

                {/* SUBCATEGORY STEP */}
                {overlayStep === 'category' && (
                  <>
                    <div className={styles.container}>

                      <div className={styles.dropdown}>
                        <h3 className={styles.ContentHeading}>Category Name<span>*</span></h3>
                        <div>
                          <button
                            type="button"
                            className={styles.dropdownBtn}
                            onClick={() => setOpen(!open)}
                          >
                            {/* {selected} */}
                            {categoryData.category_name}
                            <span className={styles.arrow}><IoIosArrowDown /></span>
                          </button>

                        </div>
                        {open && (
                          <ul className={styles.dropdownList}>
                            {options.map((opt) => (
                              // <li
                              //   key={opt}
                              //   onClick={() => handleSelect(opt)}
                              //   className={`${styles.dropdownItem} ${opt === selected ? styles.active : ""}`}
                              // >
                              //   {opt}
                              // </li>
                              <li
                                key={opt}
                                onClick={() => {
                                  handleSelect(opt);
                                  setCategoryData(prev => ({ ...prev, category_name: opt }));
                                  setOpen(false); // Close dropdown after selection
                                }}
                                className={`${styles.dropdownItem} ${opt === categoryData.category_name ? styles.active : ""}`}
                              >
                                {opt}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>

                      <h3 className={styles.ContentHeading}>Sub Category Name</h3>
                      <input className={styles.subcatinput}
                        type="text"
                        value={categoryData.sub_cat_name}
                        onChange={(e) => setCategoryData(prev => ({ ...prev, sub_cat_name: e.target.value }))}
                        placeholder="Enter sub category name like (Men, Women, kids, etc)"
                      />

                      <h3 className={styles.ContentHeading}>Child Category Name</h3>
                      <input className={styles.subcatinput}
                        type="text"
                        value={categoryData.nested_sub_cat_name}
                        onChange={(e) => setCategoryData(prev => ({ ...prev, nested_sub_cat_name: e.target.value }))}
                        placeholder="Enter Child category name like (Shirt, Pant, Trouser, etc)"
                      />

                      <h3 className={styles.ContentHeading}>Product Description</h3>
                      <input
                        value={categoryData.description}
                        onChange={(e) => setCategoryData(prev => ({ ...prev, description: e.target.value }))}
                        className={styles.des}
                        type="text"
                        placeholder="Describe the category/product in detail..."
                      />
                      <h6 style={{ color: "#9a9a9cff", margin: "6px" }}>Recommended: 100-500 characters</h6>


                    </div>
                    <div className={styles.formbtn}>
                      <button type="button" onClick={handlePrev}>Back</button>
                      {/* Submitting the form will create subcategory then advance to child */}
                      <button type="button" onClick={handleCategorySubmit}>Next</button>
                    </div>
                  </>
                )}

                {/*  advance STEP */}
                {overlayStep === 'child' && (
                  <>
                    <div className={styles.productcontainer}>
                      <div className={styles.product}>
                        <h3 className={styles.ContentHeading}>Product Name</h3>
                        <input className={styles.productname}
                          type="text"
                          name="product_name"
                          value={productData.product_name}
                          onChange={(e) => setProductData(prev => ({ ...prev, product_name: e.target.value }))}
                          placeholder="Enter Your Product Name"
                        />
                      </div>

                      <div className={styles.product}>
                        <h3 className={styles.ContentHeading}>SKU</h3>
                        <input className={styles.productname}
                          type="text"
                          name="sku"
                          value={productData.sku}
                          onChange={(e) => setProductData(prev => ({ ...prev, sku: e.target.value }))}
                          placeholder="Enter Your SKU"
                        />
                      </div>

                      <div className={styles.product}>
                        <h3 className={styles.ContentHeading}>Brand</h3>
                        <input className={styles.productname}
                          type="text"
                          name="brand"
                          value={productData.brand}
                          onChange={(e) => setProductData(prev => ({ ...prev, brand: e.target.value }))}
                          placeholder="Enter Your Brand Name"
                        />
                      </div>

                      <div className={styles.product}>
                        <h3 className={styles.ContentHeading}>City</h3>
                        <input className={styles.productname}
                          type="text"
                          name="location_city"
                          value={productData.location_city}
                          onChange={(e) => setProductData(prev => ({ ...prev, location_city: e.target.value }))}
                          placeholder="Enter Your City"
                        />
                      </div>

                      <div className={styles.product}>
                        <h3 className={styles.ContentHeading}>State</h3>
                        <input className={styles.productname}
                          type="text"
                          name="location_state"
                          value={productData.location_state}
                          onChange={(e) => setProductData(prev => ({ ...prev, location_state: e.target.value }))}
                          placeholder="Enter Your State"
                        />
                      </div>

                      <div className={styles.product}>
                        <h3 className={styles.ContentHeading}>Country</h3>
                        <input className={styles.productname}
                          type="text"
                          name="location_country"
                          value={productData.location_country}
                          onChange={(e) => setProductData(prev => ({ ...prev, location_country: e.target.value }))}
                          placeholder="Enter Your Country"
                        />
                      </div>

                      <div className={styles.product}>
                        <h3 className={styles.ContentHeading}>HSN Number</h3>
                        <input className={styles.productname}
                          type="text"
                          name="gst_verified"
                          value={productData.gst_verified}
                          onChange={(e) => setProductData(prev => ({ ...prev, gst_verified: e.target.value }))}
                          placeholder="Product HSN Number (eg.abcd@1234)"
                        />
                      </div>

                      <div className={styles.product}>
                        <h3 className={styles.ContentHeading}>Product Unit</h3>
                        <input className={styles.productname}
                          type="text"
                          name="product_unit"
                          value={productData.product_unit}
                          onChange={(e) => setProductData(prev => ({ ...prev, product_unit: e.target.value }))}
                          placeholder="Enter Product Quantity"
                        />
                      </div>

                      <div className={styles.product}>
                        <h3 className={styles.ContentHeading}>Product Price</h3>
                        <input className={styles.productname}
                          type="text"
                          name="product_price"
                          value={productData.product_price}
                          onChange={(e) => setProductData(prev => ({ ...prev, product_price: e.target.value }))}
                          placeholder="Enter Product Price"
                        />
                      </div>

                      <div className={styles.product}>
                        <h3 className={styles.ContentHeading}>Product Colour</h3>
                        <input className={styles.productname}
                          type="text"
                          name="color"
                          value={productData.color}
                          onChange={(e) => setProductData(prev => ({ ...prev, color: e.target.value }))}
                          placeholder="Product Colour"
                        />
                      </div>

                      <div className={styles.product}>
                        <h3 className={styles.ContentHeading}>Product size</h3>
                        <input className={styles.productname}
                          type="text"
                          name="size"
                          value={productData.size}
                          onChange={(e) => setProductData(prev => ({ ...prev, size: e.target.value }))}
                          placeholder="Product size"
                        />
                      </div>

                      <div className={styles.product}>
                        <h3 className={styles.ContentHeading}>Product Material</h3>
                        <input className={styles.productname}
                          type="text"
                          name="product_Material"
                          value={productData.product_Material}
                          onChange={(e) => setProductData(prev => ({ ...prev, product_Material: e.target.value }))}
                          placeholder="Product Material"
                        />
                      </div>

                      <div className={styles.product}>
                        <h3 className={styles.ContentHeading}>Product Specifications</h3>
                        <input className={styles.productname}
                          type="text"
                          name="product_specification"
                          value={productData.product_specification}
                          onChange={(e) => setProductData(prev => ({ ...prev, product_specification: e.target.value }))}
                          placeholder="Product Specifications"
                        />
                      </div>



                      {/* <h3 className={styles.ContentHeading}>Product Description</h3>
                      <input
                        name="description"
                        value={productData.description}
                        onChange={(e) => setProductData(prev => ({ ...prev, description: e.target.value }))}
                        className={styles.advancedes}
                        type="text"
                        placeholder="Describe your product in detail. include features and benefits ..."
                      />
                      <h6 style={{ color: "#9a9a9cff", margin: "6px" }}>Recommended: 100-500 characters</h6> */}


                    </div>
                    <div className={styles.formbtn}>
                      <button type="button" onClick={handlePrev}>Back</button>
                      {/* Submit the form on child step so handleSubmit runs and posts product data */}
                      <button type="button" onClick={handleProductSubmit}>Next</button>
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
                      <button type="submit" onClick={handleImageApi}>Finish</button>
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
              {Array.isArray(products) && products.map((item) => {
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
