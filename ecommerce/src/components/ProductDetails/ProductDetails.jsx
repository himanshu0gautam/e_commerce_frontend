import React, { useState } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import styles from './ProductDetails.module.css'
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
                                <img src={product.image[currindx]} alt="" height={470} width={470} />
                            </div>
                        
                   
                </div>
            </div>

            <div className={styles.rightCont}>
                <div className={styles.Heading}>{product?.title}{product?.Name}</div>
                <div>{product?.rating}</div>
                <div>{product?.price}</div>
            </div>

        </div>
    )
}

export default ProductDetails