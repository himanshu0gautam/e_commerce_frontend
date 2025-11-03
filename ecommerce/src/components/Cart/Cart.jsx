import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Cart.module.css";
import productImg from "../assets/product.png";

const Cart = () => {
    const navigate = useNavigate();

    const [items, setItems] = useState([
        {
            id: 1,
            name: "Jwellery Set - Necklace, Earrings",
            price: 1300,
            oldPrice: 9999,
            discount: "87% Off",
            delivery: "Thu Nov 6",
            quantity: 1,
            image: productImg,
        },
    ]);

    const [showAddressForm, setShowAddressForm] = useState(false);
    const [address, setAddress] = useState({
        name: "Ashish Kumar Dhimaan",
        pincode: "122018",
        details: "Sector 52, Noida, Uttar Pradesh, India",
    });

    const [loadingLocation, setLoadingLocation] = useState(false);

    const basePrice = 9999 * items[0].quantity;
    const discount = 8700 * items[0].quantity;
    const protectFee = 9;
    const total = basePrice - discount + protectFee;

    const handleQuantityChange = (id, type) => {
        setItems((prev) =>
            prev.map((item) => {
                if (item.id === id) {
                    const newQty =
                        type === "inc" ? item.quantity + 1 : item.quantity > 1 ? item.quantity - 1 : 1;
                    return { ...item, quantity: newQty };
                }
                return item;
            })
        );
    };

    const handleAddressChange = (e) => {
        const { name, value } = e.target;
        setAddress((prev) => ({ ...prev, [name]: value }));
    };

    const handlePincodeLookup = () => {
        const pincode = address.pincode.trim();
        if (pincode === "122018") {
            setAddress((prev) => ({
                ...prev,
                details: "Noida Sector 52, Uttar Pradesh, India",
            }));
            alert("📦 Address auto-filled for Gurugram (122018)");
        } else if (pincode === "110001") {
            setAddress((prev) => ({
                ...prev,
                details: "Connaught Place, New Delhi",
            }));
            alert("📦 Address auto-filled for New Delhi (110001)");
        } else {
            alert("⚠️ Pincode not found. Please enter manually.");
        }
    };

    // ✅ Detect Current Location with spinner
    const handleUseCurrentLocation = () => {
        if (!navigator.geolocation) {
            alert("❌ Geolocation not supported on this browser!");
            return;
        }

        setLoadingLocation(true);

        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const { latitude, longitude } = position.coords;

                try {
                    const response = await fetch(
                        `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
                    );
                    const data = await response.json();

                    const detectedAddress = data.display_name || "Detected Location";
                    const pincode = data.address?.postcode || "000000";

                    setAddress((prev) => ({
                        ...prev,
                        details: detectedAddress,
                        pincode,
                    }));

                    alert("📍 Location detected successfully!");
                } catch (error) {
                    alert("❌ Unable to fetch address from location data.");
                } finally {
                    setLoadingLocation(false);
                }
            },
            (error) => {
                setLoadingLocation(false);
                alert("⚠️ Location access denied or unavailable.");
            },
            { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
        );
    };

    return (
        <div className={styles.cartPage}>
            {/* LEFT SIDE */}
            <div className={styles.left}>
                {/* Delivery Address */}
                <div className={styles.deliveryBox}>
                    <div>
                        <p className={styles.deliveryTitle}>Deliver to:</p>
                        <p className={styles.userName}>
                            {address.name}, {address.pincode}
                        </p>
                        <p className={styles.address}>{address.details}</p>
                    </div>
                    <button
                        className={styles.changeBtn}
                        onClick={() => setShowAddressForm(!showAddressForm)}
                    >
                        {showAddressForm ? "Cancel" : "Change"}
                    </button>
                </div>

                {/* Address Form */}
                {showAddressForm && (
                    <div className={styles.addressForm}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            value={address.name}
                            onChange={handleAddressChange}
                        />

                        <div className={styles.pincodeBox}>
                            <input
                                type="text"
                                name="pincode"
                                placeholder="Enter Pincode"
                                value={address.pincode}
                                onChange={handleAddressChange}
                            />
                            <button onClick={handlePincodeLookup} className={styles.lookupBtn}>
                                Get Address
                            </button>
                        </div>

                        <textarea
                            name="details"
                            placeholder="Full Address"
                            value={address.details}
                            onChange={handleAddressChange}
                        ></textarea>

                        {/* ✅ Spinner Added Here */}
                        <button
                            onClick={handleUseCurrentLocation}
                            className={styles.locationBtn}
                            disabled={loadingLocation}
                        >
                            {loadingLocation ? (
                                <>
                                    <span className={styles.spinner}></span>
                                    Detecting...
                                </>
                            ) : (
                                " Use My Current Location"
                            )}
                        </button>

                        <button
                            className={styles.saveBtn}
                            onClick={() => setShowAddressForm(false)}
                        >
                            Save Address📇
                        </button>
                    </div>
                )}

                {/* Product Items */}
                {items.map((item) => (
                    <div className={styles.cartItem} key={item.id}>
                        <img src={item.image} alt={item.name} className={styles.itemImg} />
                        <div className={styles.itemDetails}>
                            <h3>{item.name}</h3>
                            <p className={styles.seller}>
                                Seller: TBL Online <span className={styles.assured}>✔️</span>
                            </p>
                            <div className={styles.priceBox}>
                                <span className={styles.oldPrice}>₹{item.oldPrice}</span>
                                <span className={styles.newPrice}>₹{item.price}</span>
                                <span className={styles.discount}>{item.discount}</span>
                            </div>

                            <div className={styles.qtyBox}>
                                <button onClick={() => handleQuantityChange(item.id, "dec")}>−</button>
                                <span>{item.quantity}</span>
                                <button onClick={() => handleQuantityChange(item.id, "inc")}>+</button>
                            </div>

                            <p className={styles.delivery}>Delivery by {item.delivery}</p>
                        </div>
                    </div>
                ))}

                {/* Place Order */}
                <div className={styles.placeOrderBox}>
                    <button
                        className={styles.placeOrderBtn}
                        onClick={() => navigate("/checkout")}
                    >
                        PLACE ORDER
                    </button>
                </div>
            </div>

            {/* RIGHT SIDE */}
            <div className={styles.right}>
                <h3>PRICE DETAILS</h3>
                <div className={styles.priceRow}>
                    <span>Price ({items[0].quantity} item)</span>
                    <span>₹{basePrice}</span>
                </div>
                <div className={styles.priceRow}>
                    <span>Discount</span>
                    <span className={styles.green}>−₹{discount}</span>
                </div>
                <div className={styles.priceRow}>
                    <span>Protect Promise Fee</span>
                    <span>₹{protectFee}</span>
                </div>
                <div className={styles.totalRow}>
                    <span>Total Amount</span>
                    <span>₹{total}</span>
                </div>
                <p className={styles.savings}>You will save ₹{discount} on this order</p>
                <div className={styles.safeBox}>
                    <p>🛡️ Safe and Secure Payments. Easy returns. 100% Authentic products.</p>
                </div>
            </div>
        </div>
    );
};

export default Cart;
