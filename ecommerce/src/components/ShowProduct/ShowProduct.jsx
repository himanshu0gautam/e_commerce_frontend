import React from 'react'
import { MdOutlineVerifiedUser } from "react-icons/md";
import styles from './ShowProduct.module.css'

const ShowProduct = ({ products = [] }) => {
  return (
    <div className={styles.mainContainer}>
      <h3 style={{ marginLeft: '1.3rem' }}>Product</h3>

      
        <main className={styles.right}>
          <div className={styles.productsCard}>
            <div className={styles.meta}>Showing <strong>{products.length}</strong> products</div>

            <div className={styles.productsGrid}>
              {products.map((p, index) => (
                <div key={`${p.id}-${index}`} className={styles.product}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <img className={styles.thumb} alt="thumb" src={p.image} />
                  </div>
                  <div className={styles.productTitle}>{p.title}</div>
                  <div className={styles.meta}>{p.Name}</div>
                   <div className={styles.badge}> <MdOutlineVerifiedUser /> GST Verified</div>
                  <div className={styles.price}>{p.price} <span>Rating: {p.rating}</span></div>
                 
                </div>
              ))}
            </div>
          </div>
        </main>
     

    </div>
  )
}

export default ShowProduct