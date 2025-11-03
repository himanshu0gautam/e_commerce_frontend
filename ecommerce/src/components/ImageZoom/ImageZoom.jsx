import React, { useRef, useState } from "react";
import styles from "./ImageZoom.module.css";

const ImageZoom = ({ src }) => {
    const imgRef = useRef(null);
    const [lensPos, setLensPos] = useState({ x: 0, y: 0 });
    const [showZoom, setShowZoom] = useState(false);

    const handleMouseMove = (e) => {
        const { left, top, width, height } = imgRef.current.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;

        const lensWidth = 120;
        const lensHeight = 120;

        const posX = Math.max(0, Math.min(x - lensWidth / 2, width - lensWidth));
        const posY = Math.max(0, Math.min(y - lensHeight / 2, height - lensHeight));

        setLensPos({ x: posX, y: posY });
    };

    return (
        <div
            className={styles.zoomWrapper}
            onMouseEnter={() => setShowZoom(true)}
            onMouseLeave={() => setShowZoom(false)}
            onMouseMove={handleMouseMove}
        >
            {/* Left product image */}
            <div className={styles.imageBox}>
                <img ref={imgRef} src={src} alt="product" className={styles.image} />
                {showZoom && (
                    <div
                        className={styles.lens}
                        style={{ left: lensPos.x, top: lensPos.y }}
                    ></div>
                )}
            </div>

            {/* Right zoom preview */}
            {showZoom && (
                <div
                    className={styles.zoomPreview}
                    style={{
                        backgroundImage: `url(${src})`,
                        backgroundPosition: `-${lensPos.x * 2}px -${lensPos.y * 2}px`,
                    }}
                ></div>
            )}
        </div>
    );
};

export default ImageZoom;
