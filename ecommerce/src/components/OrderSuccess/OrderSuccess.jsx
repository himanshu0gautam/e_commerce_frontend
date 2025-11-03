import React, { useEffect } from "react";
import styles from "./OrderSuccess.module.css";
import { useNavigate } from "react-router-dom";

const OrderSuccess = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // 🎉 Confetti setup
        const confetti = document.createElement("canvas");
        confetti.className = styles.confettiCanvas;
        document.body.appendChild(confetti);
        const ctx = confetti.getContext("2d");
        confetti.width = window.innerWidth;
        confetti.height = window.innerHeight;

        const particles = Array.from({ length: 150 }).map(() => ({
            x: Math.random() * confetti.width,
            y: Math.random() * confetti.height - confetti.height,
            r: Math.random() * 6 + 4,
            d: Math.random() * 10 + 2,
            color: `hsl(${Math.random() * 360}, 100%, 60%)`,
        }));

        const draw = () => {
            ctx.clearRect(0, 0, confetti.width, confetti.height);
            particles.forEach((p) => {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, false);
                ctx.fillStyle = p.color;
                ctx.fill();
            });
            update();
        };

        const update = () => {
            particles.forEach((p) => {
                p.y += p.d;
                if (p.y > confetti.height) {
                    p.y = -10;
                    p.x = Math.random() * confetti.width;
                }
            });
        };

        const interval = setInterval(draw, 25);

        // Auto redirect after 6 seconds
        const timer = setTimeout(() => {
            if (document.body.contains(confetti)) {
                document.body.removeChild(confetti);
            }
            clearInterval(interval);
            navigate("/");
        }, 3000);

        // Cleanup
        return () => {
            clearInterval(interval);
            clearTimeout(timer);
            if (document.body.contains(confetti)) {
                document.body.removeChild(confetti);
            }
        };
    }, [navigate]);

    return (
        <div className={styles.successContainer}>
            <div className={styles.card}>
                <div className={styles.checkmarkWrapper}>
                    <div className={styles.checkmark}>
                        <div className={styles.checkmarkCircle}></div>
                        <div className={styles.checkmarkStem}></div>
                        <div className={styles.checkmarkKick}></div>
                    </div>
                </div>
                <h2>Order Placed Successfully!</h2>
                <p>Your order has been placed and will be delivered soon.</p>
                <button onClick={() => navigate("/")} className={styles.homeBtn}>
                    Continue Shopping
                </button>
            </div>
        </div>
    );
};

export default OrderSuccess;
