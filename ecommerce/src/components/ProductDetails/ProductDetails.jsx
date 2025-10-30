import React, { useState } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import styles from './ProductDetails.module.css'
import ImageZoom from '../ImageZoom/ImageZoom.jsx'
const ProductDetails = () => {
    const location = useLocation()
    const product = location.state?.pdt;
    const [currindx, setCurrindex] = useState(0);
    return (
        <div className={styles.mainCont}>
            <div className={styles.leftCont}>

                <div className={styles.leftImgCont}>{product.image_urls[0].map((img, index) => {
                    return (
                        <div key={index} className={styles.leftImg} onClick={() => setCurrindex(index)}>
                            <img src={img} alt="" height={70} width={70} />
                        </div>
                    )
                })}
                </div>

                <div className={styles.rightImgCont}>
                    <div className={styles.rightImg}>
                        <ImageZoom src={product.image_urls[0][currindx]}  alt="" height={470} width={470} />
                    </div>
                </div>
            </div>

         
             <div className={styles.rightCont}>
            <div className={styles.heading}>
                {product?.brand} <span className={styles.brand}>({product?.product_name})</span>
            </div>

            <div className={styles.rating}>
                ⭐ <span>{product?.rating}</span> / 5
            </div>

            <div className={styles.product_price}>
                {product?.product_price?.toLocaleString()} 
                <span className={styles.tax}> &nbsp;Incl. of all taxes</span>
            </div>

            <div className={styles.actions}>
                <button className={styles.addToCart}>Add to Cart</button>
                <button className={styles.buyNow}>Buy Now</button>
            </div>
            </div>

            {/* {JSON.stringify(product)} */}

        </div>
    )
}

export default ProductDetails




