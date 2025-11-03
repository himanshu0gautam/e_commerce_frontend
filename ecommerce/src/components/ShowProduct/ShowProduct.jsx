import React, { useEffect, useState,useRef } from 'react'
import { MdOutlineVerifiedUser } from "react-icons/md";
import styles from './ShowProduct.module.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const ShowProduct = () => {

  const [products, setproducts] = useState([])
  const [visibleImages, setVisibleImages] = useState([]);
  const [visibleCount, setVisibleCount] = useState(10);
  const loaderRef = useRef(null);
  // console.log("products", products);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://192.168.1.43:3001/api/seller/all-product-image')
        console.log("Fetched products:", response?.data?.data[0]);
        setproducts(response?.data?.data);
        setVisibleImages(response?.data?.data.slice(0,visibleCount));
        // console.log("Fetched products:",response?.data?.data);

      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }
    fetchProducts();
  }, [])


  // Scroll observer
  useEffect(()=>{
    const observer = new IntersectionObserver((enteries)=>{
      const target = enteries[0];
      if(target.isIntersecting){
        console.log('%c🔽 Bottom reached — Loading more products...', 'color: green');
        setVisibleCount(prev => prev+10)
      }

  },{threshold :1.0});
  if(loaderRef.current) observer.observe(loaderRef.current);
    return ()=>{ 
      if (visibleCount >= products.length) {
        observer.disconnect();}
}
  },[])

  // Update visible images when count changes
  useEffect(()=>{
    setVisibleImages(products.slice(0,visibleCount))
    console.log(`📸 Showing ${visibleImages.length} out of ${products.length} images`);
  },[visibleCount,products])
console.log(visibleCount,products.length);



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
   

      <main className={styles.right}>
        <div className={styles.productsCard}>
          <div className={styles.meta}>Showing <strong>{products.length}</strong> products</div>

          <div className={styles.productsGrid}>
            {visibleImages.map((p, index) => (
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
          <div ref={loaderRef} style={{ height: '40px' }}></div>
        </div>
      </main> 

      
    </div>
  )
}

export default ShowProduct




