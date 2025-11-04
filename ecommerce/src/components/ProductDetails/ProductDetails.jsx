import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/slices/cartSlice";
import { useLocation, useNavigate } from "react-router-dom";
import ImageZoom from "../ImageZoom/ImageZoom";
import styles from "./ProductDetails.module.css";
// import toast, { Toaster } from "react-hot-toast";
import {toast} from "react-toastify"

const ProductDetails = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const product = location.state?.pdt;
    const [currIndex, setCurrIndex] = useState(0);
    const dispatch = useDispatch();

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
        <>
            <Toaster position="top-center" reverseOrder={false} />
            <div className={styles.productContainer}>
                {/* LEFT SECTION */}
                <div className={styles.imageSection}>
                    <div className={styles.thumbnailList}>
                        {product.image.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt=""
                                className={`${styles.thumbnail} ${index === currIndex ? styles.activeThumb : ""}`}
                                onClick={() => setCurrIndex(index)}
                            />
                        ))}
                    </div>

                    <div className={styles.mainImage}>
                        <ImageZoom src={product.image[currIndex]} />
                    </div>
                </div>

                {/* RIGHT SECTION */}
                <div className={styles.detailsSection}>
                    <h2 className={styles.productTitle}>{product?.title}</h2>
                    <p className={styles.productBrand}>Brand: {product?.Name}</p>

                    <div className={styles.ratingBox}>
                        ⭐ <span>{product?.rating}</span> / 5
                    </div>

                    <div className={styles.priceBox}>
                        {product?.price?.toLocaleString()}
                        <span className={styles.taxText}> (Incl. of all taxes)</span>
                    </div>

                    <div className={styles.buttonGroup}>
                        <button className={styles.addToCart} onClick={handleAddToCart}>
                            Add to Cart
                        </button>
                        <button className={styles.buyNow} onClick={handleBuyNow}>
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetails;
