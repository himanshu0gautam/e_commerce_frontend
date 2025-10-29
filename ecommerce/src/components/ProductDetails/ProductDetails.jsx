import React, { useState } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import styles from './ProductDetails.module.css'
import ImageZoom from '../ImageZoom/ImageZoom'
const ProductDetails = () => {
    const location = useLocation()
    const product = location.state?.pdt;
    const [currindx,setCurrindex] = useState(0);
    return (
        <div className={styles.mainCont}>
            <div className={styles.leftCont}>

                <div className={styles.leftImgCont}>{product.image.map((img, index) => {
                    return (
                        <div key={index} className={styles.leftImg} onClick={()=>setCurrindex(index)}>
                            <img src={img} alt="" height={70} width={70} />
                        </div>
                    )
                })}
                </div>

                <div className={styles.rightImgCont}>

                        
                            <div className={styles.rightImg}>
                                <ImageZoom src={product.image[currindx]} alt="" height={470} width={470} />
                            </div>
                        
                   
                </div>
            </div>

           <div className={styles.rightCont}>
            <div className={styles.heading}>
                {product?.title} <span className={styles.brand}>({product?.Name})</span>
            </div>

            <div className={styles.rating}>
                ⭐ <span>{product?.rating}</span> / 5
            </div>

            <div className={styles.price}>
                {product?.price?.toLocaleString()} 
                <span className={styles.tax}> &nbsp;Incl. of all taxes</span>
            </div>

            <div className={styles.actions}>
                <button className={styles.addToCart}>Add to Cart</button>
                <button className={styles.buyNow}>Buy Now</button>
            </div>
            </div>

        </div>
    )
}

export default ProductDetails