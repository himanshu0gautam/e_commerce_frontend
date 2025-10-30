import React, { useEffect, useState } from 'react'
import { MdOutlineVerifiedUser } from "react-icons/md";
import styles from './ShowProduct.module.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const ShowProduct = () => {

  const [products, setproducts] = useState([])
  console.log("products", products);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://192.168.1.48:3001/api/seller/all-product-image')
        setproducts(response?.data?.data);
        console.log("Fetched products:", response?.data?.data[0]);
        // console.log("Fetched products:",response?.data?.data);

      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }
    fetchProducts();
  }, [])






  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(null);
  const [curridx, setCurridx] = useState(0);
  useEffect(() => {
    let interval;
    if (isHovered !== null && products[isHovered]?.image_urls[0]?.length > 1) {
      let totalImages = products[isHovered].image_urls[0].length;
      console.log(products[isHovered]);

      interval = setInterval(() => {
        setCurridx((prev) => prev === totalImages - 1 ? 0 : prev + 1)
      }, 1700)
    } else {
      setCurridx(0);
    }

    return () => clearInterval(interval);
  }, [isHovered, products])

  const handleClick = (pdt) => {
    const slug = pdt.brand.toLowerCase() + "-" + pdt.product_name.toLowerCase().replace(/\s+/g, "-");
    navigate(`/${slug}`, { state: { pdt } })
  }




  return (
    <div className={styles.mainContainer}>
      <h3 style={{ marginLeft: '1.3rem' }}>Product</h3>

      {/* {products.map((p, index) => {
        return (

          <div key={index} className={styles.product} >
            <p>{p.brand}</p>
            <img className={styles.thumb} src={p?.image_urls?.[0]?.[0]} alt="" />
          </div>

        )
      }

      )} */}

      <main className={styles.right}>
        <div className={styles.productsCard}>
          <div className={styles.meta}>Showing <strong>{products.length}</strong> products</div>

          <div className={styles.productsGrid}>
            {products.map((p, index) => (
              <div key={index} className={styles.product} onClick={() => handleClick(p)}>


                <div
                  onMouseEnter={() => setIsHovered(index)}
                  onMouseLeave={() => setIsHovered(null)}
                  style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  {isHovered === index ? (
                    <img className={styles.thumb} src={p?.image_urls?.[0]?.[curridx]} alt="" />

                  ) : (
                    <img className={styles.thumb} alt="thumb" src={p?.image_urls?.[0]?.[0]} />


                  )}
                  {isHovered === index ? (
                    <div style={{ display: 'flex', flexDirection: "column" }}>
                      <div className={styles.dotsWrapper}>
                        {p?.image_urls?.[0].map((_, indx) => (
                          <span
                            key={indx}
                            className={`${styles.dot} ${curridx === indx ? styles.active : ""}`}
                          >
                            {curridx === indx && <span className={styles.fill}></span>}
                          </span>
                        ))}
                      </div>

                      <div className={styles.meta}>{p.product_name}</div>
                      <div className={styles.badge}> <MdOutlineVerifiedUser /> GST Verified</div>
                      <div className={styles.price}>{p.product_price}</div>
                    </div>
                  ) : (
                    <div style={{ display: 'flex', flexDirection: "column" }}>
                      <div className={styles.productTitle}>{p.brand}</div>
                      <div className={styles.meta}>{p.product_name}</div>
                      <div className={styles.badge}> <MdOutlineVerifiedUser /> GST Verified</div>
                      <div className={styles.price}>{p.product_price} </div>

                    </div>


                  )}

                </div>


              </div>
            ))}
          </div>
        </div>
      </main> 


    </div>
  )
}

export default ShowProduct




