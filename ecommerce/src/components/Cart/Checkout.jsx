import React, { useState, useEffect } from "react";
import { QRCodeCanvas } from "qrcode.react"; // ✅ correct import (not default)
import { isMobile } from "react-device-detect";
import { useNavigate } from "react-router-dom";
import styles from "./Checkout.module.css";
import productImg from "../assets/product.png";
import gpay from "../assets/gpay.png";
import phonepe from "../assets/phonepe.png";
import paytm from "../assets/paytm.png";
import bhim from "../assets/bhim.png";
import qrImage from "../assets/qr.png";

const CheckoutPage = () => {
    const [step, setStep] = useState(2);
    const [selectedAddress, setSelectedAddress] = useState(null);
    const [paymentMethod, setPaymentMethod] = useState("");
    const [upiId, setUpiId] = useState("");
    const [qrValue, setQrValue] = useState("");
    const [showQr, setShowQr] = useState(false);
    const [timer, setTimer] = useState(120);
    const [processing, setProcessing] = useState(false);
    const [showOffers, setShowOffers] = useState(false);
    const navigate = useNavigate();
    const [showToast, setShowToast] = useState(false);
    const [selectedApp, setSelectedApp] = useState("");
    const [showPaymentReceived, setShowPaymentReceived] = useState(false);


    // ✅ Handle UPI app click
    const handleAppClick = (appName) => {
        setSelectedApp(appName);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 2000);
    };

    const basePrice = 1300;
    const gst = basePrice * 0.18;
    const delivery = 50;
    const total = basePrice + gst + delivery;


    // ✅ Generate new QR link
    const generateQr = () => {
        const qrPayLink = `upi://pay?pa=ashish@okicici&pn=Ashish%20Dhimaan&am=${total.toFixed(
            2
        )}&cu=INR&tn=Scan%20to%20Pay`;
        setQrValue(qrPayLink);
        setTimer(120);
        setShowQr(true);
    };

    // ✅ Auto QR refresh every 2 minutes
    useEffect(() => {
        let interval;
        if (paymentMethod === "qr" && timer > 0) {
            interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
        }
        return () => clearInterval(interval);
    }, [paymentMethod, timer]);


    // ✅ Simulate payment success
    const simulateSuccess = () => {
        setProcessing(true);
        setShowQr(false);
        setTimeout(() => {
            setProcessing(false);
            navigate("/order-success");
        }, 2500);
    };

    // ✅ Handle place order
    const handlePlaceOrder = () => {
        if (!paymentMethod) {
            alert("⚠️ Please select a payment method");
            return;
        }

        if (paymentMethod === "upi") {
            if (!upiId) {
                alert("⚠️ Enter UPI ID first!");
                return;
            }
            const upiUrl = `upi://pay?pa=${upiId}&pn=Ashish%20Dhimaan&am=${total.toFixed(
                2
            )}&cu=INR&tn=Order%20Payment`;

            if (isMobile) {
                window.location.href = upiUrl;
                simulateSuccess();
            } else {
                setQrValue(upiUrl);
                setShowQr(true);
                setTimer(120);
            }
        } else if (paymentMethod === "qr") {
            generateQr();
        } else if (paymentMethod === "cod") {
            // ✅ COD me direct success — no loader
            navigate("/order-success");
        } else {
            simulateSuccess();
        }
    };

    return (
        <div className={styles.checkoutPage}>
            {/* LEFT SECTION */}
            <div className={styles.leftSection}>
                {/* STEP 1 - LOGIN */}
                <div className={styles.stepBox}>
                    <div className={styles.stepHeaderActive}>
                        <span className={styles.stepNumber}>1</span>
                        <span>LOGIN</span>
                        <span className={styles.status}>✓</span>
                    </div>
                    <div className={styles.userInfo}>
                        <span>Name:</span> Ashish Dhimaan <br />
                        <span>Email:</span> ashishdhimaan@icloud.com
                    </div>
                </div>

                {/* STEP 2 - ADDRESS */}
                <div className={styles.stepBox}>
                    <div
                        className={step === 2 ? styles.stepHeaderActive : styles.stepHeader}
                        onClick={() => setStep(2)}
                    >
                        <span className={styles.stepNumber}>2</span>
                        <span>DELIVERY ADDRESS</span>
                        {selectedAddress && <span className={styles.status}>✓</span>}
                    </div>

                    {step === 2 && (
                        <>
                            <div
                                className={`${styles.addressCard} ${selectedAddress === 1 ? styles.activeCard : ""
                                    }`}
                                onClick={() => setSelectedAddress(1)}
                            >
                                <input
                                    type="radio"
                                    checked={selectedAddress === 1}
                                    onChange={() => setSelectedAddress(1)}
                                />
                                <div>
                                    <div className={styles.addrHeader}>
                                        <strong>Ashish Dhimaan</strong>
                                        <span className={styles.addrType}>Home</span>
                                        <span className={styles.phone}>9999999999</span>
                                    </div>
                                    <p>A-45, Rajiv Nagar, Delhi</p>
                                    <small>All day delivery (9 AM - 9 PM)</small>
                                </div>
                            </div>

                            <div
                                className={`${styles.addressCard} ${selectedAddress === 2 ? styles.activeCard : ""
                                    }`}
                                onClick={() => setSelectedAddress(2)}
                            >
                                <input
                                    type="radio"
                                    checked={selectedAddress === 2}
                                    onChange={() => setSelectedAddress(2)}
                                />
                                <div>
                                    <div className={styles.addrHeader}>
                                        <strong>Office Address</strong>
                                        <span className={styles.addrType}>Work</span>
                                        <span className={styles.phone}>8888888888</span>
                                    </div>
                                    <p>Plot 23, Noida Sector 62</p>
                                    <small>Delivery between 10 AM - 7 PM</small>
                                </div>
                            </div>

                            {selectedAddress && (
                                <button
                                    className={styles.deliverBtn}
                                    onClick={() => setStep(3)}
                                >
                                    Deliver to this Address
                                </button>
                            )}
                        </>
                    )}
                </div>

                {/* STEP 3 - SUMMARY */}
                {step === 3 && (
                    <div className={styles.stepBox}>
                        <div className={styles.stepHeaderActive}>
                            <span className={styles.stepNumber}>3</span>
                            <span>ORDER SUMMARY</span>
                        </div>
                        <div className={styles.orderItem}>
                            <img src={productImg} alt="Product" />
                            <div>
                                <h4>Jewellery</h4>
                                <p>Qty: 1</p>
                                <p>₹{basePrice}</p>
                            </div>
                        </div>

                        <div className={styles.summaryButtons}>
                            <button className={styles.backBtn} onClick={() => setStep(2)}>
                                ← Back
                            </button>
                            <button
                                className={styles.deliverBtn}
                                onClick={() => setStep(4)}
                            >
                                Continue to Payment
                            </button>
                        </div>
                    </div>
                )}


                {/* STEP 4 - PAYMENT */}
                {step === 4 && (
                    <div className={styles.stepBox}>
                        <div className={styles.stepHeaderActive}>
                            <span className={styles.stepNumber}>4</span>
                            <span>PAYMENT OPTIONS</span>
                        </div>

                        {/* Credit / Debit Card */}
                        <label className={styles.paymentOption}>
                            <input
                                type="radio"
                                name="payment"
                                value="card"
                                checked={paymentMethod === "card"}
                                onChange={(e) => setPaymentMethod(e.target.value)}
                            />
                            <div>
                                <strong>💳 Credit / Debit Card</strong>
                                <p>Pay securely using your card</p>
                            </div>
                        </label>

                        {paymentMethod === "card" && (
                            <div className={styles.cardForm}>
                                <input type="text" placeholder="Card Number" maxLength="16" />
                                <div className={styles.cardRow}>
                                    <input type="text" placeholder="MM/YY" maxLength="5" />
                                    <input type="password" placeholder="CVV" maxLength="3" />
                                </div>
                                <button className={styles.deliverBtn} onClick={simulateSuccess}>
                                    Pay ₹{total.toFixed(2)}
                                </button>
                            </div>
                        )}

                        {/* ✅ UPI Payment */}
                        <label className={styles.paymentOption}>
                            <input
                                type="radio"
                                name="payment"
                                value="upi"
                                checked={paymentMethod === "upi"}
                                onChange={(e) => setPaymentMethod(e.target.value)}
                            />
                            <div>
                                <strong>📱 UPI Payment</strong>
                                <p>Pay via GPay, PhonePe, or Paytm</p>
                            </div>
                        </label>

                        {paymentMethod === "upi" && (
                            <div className={styles.upiBox}>
                                <input
                                    type="text"
                                    placeholder="Enter UPI ID (e.g. ashish@oksbi)"
                                    value={upiId}
                                    onChange={(e) => setUpiId(e.target.value)}
                                />


                                {upiId && (
                                    <div className={styles.upiLogos}>
                                        <p>Verified Apps:</p>
                                        <div className={styles.appLogos}>
                                            <img src={gpay} alt="GPay" />
                                            <img src={phonepe} alt="PhonePe" />
                                            <img src={paytm} alt="Paytm" />
                                            <img src={bhim} alt="BHIM" />
                                        </div>
                                    </div>
                                )}

                                <button
                                    className={styles.verifyBtn}
                                    onClick={() => {
                                        if (!upiId) {
                                            alert("⚠️ Please enter UPI ID first!");
                                            return;
                                        }

                                        // ✅ Directly trigger UPI intent
                                        const upiUrl = `upi://pay?pa=${upiId}&pn=Ashish%20Dhimaan&am=${total.toFixed(
                                            2
                                        )}&cu=INR&tn=Payment`;

                                        window.location.href = upiUrl;

                                        // Simulate success after 3s
                                        setTimeout(() => {
                                            navigate("/order-success");
                                        }, 3000);
                                    }}
                                    disabled={!upiId}
                                >
                                    Pay ₹{total.toFixed(2)}
                                </button>
                            </div>
                        )}







                        {/* ✅ QR PAYMENT */}
                        <label className={styles.paymentOption}>
                            <input
                                type="radio"
                                name="payment"
                                value="qr"
                                checked={paymentMethod === "qr"}
                                onChange={(e) => {
                                    setPaymentMethod(e.target.value);
                                    setTimer(120);

                                    // ✅ Auto trigger after 2 min
                                    const timerId = setTimeout(() => {
                                        setShowPaymentReceived(true); // show animation first
                                        const sound = new Audio("/success.mp3"); // ✅ put this file in public/success.mp3
                                        sound.play();

                                        setTimeout(() => {
                                            navigate("/order-success");
                                        }, 2500);
                                    }, 120000);

                                    return () => clearTimeout(timerId);
                                }}
                            />
                            <div>
                                <strong>🧾 Scan QR to Pay</strong>
                                <p>Use any UPI app to scan & pay instantly</p>
                            </div>
                        </label>

                        {/* ✅ QR Box */}
                        {paymentMethod === "qr" && (
                            <div className={styles.qrBox}>
                                {!showPaymentReceived ? (
                                    <>
                                        <img
                                            src={qrImage}
                                            alt="QR Code"
                                            className={styles.qrImage}
                                            style={{
                                                width: "200px",
                                                height: "200px",
                                                marginTop: "10px",
                                            }}
                                        />
                                        <p
                                            style={{
                                                marginTop: "8px",
                                                fontSize: "13px",
                                                color: "#555",
                                            }}
                                        >
                                            QR expires in{" "}
                                            <b style={{ color: timer <= 10 ? "red" : "#222" }}>{timer}s</b>
                                        </p>
                                    </>
                                ) : (
                                    <div className={styles.successEffect}>
                                        <div className={styles.tickMark}>✔</div>
                                        <p className={styles.paymentSuccess}>
                                            ₹{total.toFixed(2)} Payment Received via Paytm
                                        </p>
                                    </div>
                                )}
                            </div>
                        )}





                        {/* Cash on Delivery */}
                        <label className={styles.paymentOption}>
                            <input
                                type="radio"
                                name="payment"
                                value="cod"
                                checked={paymentMethod === "cod"}
                                onChange={(e) => setPaymentMethod(e.target.value)}
                            />
                            <div>
                                <strong>💵 Cash on Delivery</strong>
                                <p>Pay with cash when your order arrives</p>
                            </div>
                        </label>

                        {/* Summary Buttons */}
                        <div className={styles.summaryButtons}>
                            <button className={styles.backBtn} onClick={() => setStep(3)}>
                                ← Back
                            </button>
                            <button className={styles.deliverBtn} onClick={handlePlaceOrder}>
                                Place Order
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* RIGHT SECTION */}
            <div className={styles.rightSection}>
                <h3>PRICE DETAILS</h3>
                <div className={styles.priceRow}>
                    <span>Base Price</span>
                    <span>₹{basePrice}</span>
                </div>
                <div className={styles.priceRow}>
                    <span>GST (18%)</span>
                    <span>₹{gst.toFixed(2)}</span>
                </div>
                <div className={styles.priceRow}>
                    <span>Delivery Charges</span>
                    <span>₹{delivery}</span>
                </div>
                <div className={styles.totalRow}>
                    <span>Total Amount</span>
                    <span>₹{total.toFixed(2)}</span>
                </div>
            </div>

            {/* ✅ QR MODAL */}
            {/* {showQr && (
                <div className={styles.qrOverlay}>
                    <div className={styles.qrModal}>
                        <button className={styles.closeBtn} onClick={() => setShowQr(false)}>
                            ✕
                        </button>
                        <h3>Scan to Pay via UPI</h3>
                        <QRCodeCanvas value={qrValue} size={180} />
                        <p>
                            QR expires in{" "}
                            <b style={{ color: timer <= 10 ? "red" : "#333" }}>{timer}s</b>
                        </p>
                        <button className={styles.cancelBtn} onClick={simulateSuccess}>
                            I’ve Paid
                        </button>
                    </div>
                </div>
            )} */}

            {/* ✅ Payment Processing Overlay */}
            {processing && (
                <div className={styles.overlay}>
                    <div className={styles.loader}></div>
                    <p>Processing Payment...</p>
                </div>
            )}
        </div>
    );
};

export default CheckoutPage;
