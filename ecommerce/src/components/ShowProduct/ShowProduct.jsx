import React, { useEffect, useState } from 'react'
import { MdOutlineVerifiedUser } from "react-icons/md";
import styles from './ShowProduct.module.css'
import { useNavigate } from 'react-router-dom';

const ShowProduct = ({ products = [] }) => {
  // console.log(products[0].image.length);
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(null);
  const [curridx, setCurridx] = useState(0);
  useEffect(() => {
    let interval;
    if (isHovered !== null && products[isHovered]?.image?.length > 1) {
      let totalImages = products[isHovered].image.length;
      console.log(products[isHovered]);

      interval = setInterval(() => {
        setCurridx((prev) => prev === totalImages - 1 ? 0 : prev + 1)
      }, 1700)
    } else {
      setCurridx(0);
    }

    return () => clearInterval(interval);
  }, [isHovered, products])

  const handleClick = (pdt)=>{
    const slug = pdt.title.toLowerCase()+"-"+pdt.Name.toLowerCase().replace(/\s+/g, "-");
    navigate(`/${slug}`,{state:{pdt}})
  }


  return (
    <div className={styles.mainContainer}>
      <h3 style={{ marginLeft: '1.3rem' }}>Product</h3>


      <main className={styles.right}>
        <div className={styles.productsCard}>
          <div className={styles.meta}>Showing <strong>{products.length}</strong> products</div>

          <div className={styles.productsGrid}>
            {products.map((p, index) => (
              <div key={`${p.id}-${index}`} className={styles.product} onClick={()=> handleClick(p)}>
                <div
                  onMouseEnter={() => setIsHovered(index)}
                  onMouseLeave={() => setIsHovered(null)}
                  style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  {isHovered === index ? (
                    <img className={styles.thumb} src={p.image[curridx]} alt="" />
                  ) : (
                    <img className={styles.thumb} alt="thumb" src={p.image[0]} />

                  )}
                  {isHovered === index ? (
                    <div style={{ display: 'flex', flexDirection: "column" }}>
                      <div className={styles.dotsWrapper}>
                        {p.image.map((_, indx) => (
                          <span
                            key={indx}
                            className={`${styles.dot} ${curridx === indx ? styles.active : ""}`}
                          >
                            {curridx === indx && <span className={styles.fill}></span>}
                          </span>
                        ))}
                      </div>

                      <div className={styles.meta}>{p.Name}</div>
                      <div className={styles.badge}> <MdOutlineVerifiedUser /> GST Verified</div>
                      <div className={styles.price}>{p.price} <span>Rating: {p.rating}</span></div>
                    </div>
                  ) : (
                    <div style={{ display: 'flex', flexDirection: "column" }}>
                      <div className={styles.productTitle}>{p.title}</div>
                      <div className={styles.meta}>{p.Name}</div>
                      <div className={styles.badge}> <MdOutlineVerifiedUser /> GST Verified</div>
                      <div className={styles.price}>{p.price} <span>Rating: {p.rating}</span></div>
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


