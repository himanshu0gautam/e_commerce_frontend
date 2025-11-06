import React, { useState } from 'react'
import { useParams, useLocation ,useNavigate} from 'react-router-dom'
import styles from './ProductDetails.module.css'
import ImageZoom from '../ImageZoom/ImageZoom'

import { useDispatch } from "react-redux";
import { addToCart } from "../../store/slices/cartSlice";

import toast, { Toaster } from "react-hot-toast";


const ProductDetails = () => {
    const location = useLocation()
    const product = location.state?.pdt;
     const navigate = useNavigate();
     const dispatch = useDispatch();
    const [currindx, setCurrindex] = useState(0);
    const handleAddToCart = () => {
        if (!product) return;

        const cartItem = {
            id: product.id,
            name: product.title,
            price: product.price,
            image: Array.isArray(product.image) ? product.image[0] : product.image,
            quantity: 1,
        };

        dispatch(addToCart(cartItem));
        toast.success("🛒 Product added to cart!");
    };

    const handleBuyNow = () => {
        if (!product) return;

        const cartItem = {
            id: product.id,
            name: product.title,
            price: product.price,
            image: Array.isArray(product.image) ? product.image[0] : product.image,
            quantity: 1,
        };

        dispatch(addToCart(cartItem));
        navigate("/checkout");
    };

    if (!product) {
        return <h2 style={{ textAlign: "center", marginTop: "50px" }}>Product not found!</h2>;
    }
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
                                <ImageZoom src={product.image_urls[0][currindx]} alt="" height={470} width={470} />
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

            <div className={styles.price}>₹
                {product?.product_price?.toLocaleString()} 
                <span className={styles.tax}> &nbsp;Incl. of all taxes</span>
            </div>

            <div className={styles.actions}>
                <button className={styles.addToCart} onClick={handleAddToCart}>Add to Cart</button>
                <button className={styles.buyNow}  onClick={handleBuyNow}>Buy Now</button>
            </div>
            </div>

          
        </div>
    )
}

export default ProductDetails



