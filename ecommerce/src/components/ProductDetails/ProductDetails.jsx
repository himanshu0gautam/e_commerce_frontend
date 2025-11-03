import React, { useState } from "react";
<<<<<<< HEAD
import { useLocation } from "react-router-dom";
import styles from "./ProductDetails.module.css";
import ImageZoom from "../ImageZoom/ImageZoom";
const ProductDetails = () => {
  const location = useLocation();
  const product = location.state?.pdt;
  const [currindx, setCurrindex] = useState(0);
  return (
    <div className={styles.mainCont}>
      <div className={styles.leftCont}>
        <div className={styles.leftImgCont}>
          {product.image_urls[0].map((img, index) => {
            return (
              <div
                key={index}
                className={styles.leftImg}
                onClick={() => setCurrindex(index)}
              >
                <img src={img} alt="" height={70} width={70} />
              </div>
            );
          })}
        </div>

        <div className={styles.rightImgCont}>
          <div className={styles.rightImg}>
            <ImageZoom
              src={product.image[currindx]}
              alt=""
              height={470}
              width={470}
            />
          </div>
        </div>
      </div>

      <div className={styles.rightCont}>
        <div className={styles.heading}>
          {product?.title}{" "}
          <span className={styles.brand}>({product?.Name})</span>
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
  );
=======
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/slices/cartSlice";
import { useLocation, useNavigate } from "react-router-dom";
import ImageZoom from "../ImageZoom/ImageZoom";
import styles from "./ProductDetails.module.css";
import toast, { Toaster } from "react-hot-toast";

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
>>>>>>> f5e366afbb295a6b3ae991e37c60694197deaaf5
};

export default ProductDetails;
