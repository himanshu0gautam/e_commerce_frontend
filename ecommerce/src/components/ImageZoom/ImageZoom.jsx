import React, { useRef, useState } from 'react'
import styles from './ImageZoom.module.css'
const ImageZoom = ({ src }) => {
    const containerRef = useRef(null);
    const [zoomStyle, setZoomStyle] = useState({});
    const [showZoom, setShowZoom] = useState(false)

    const handleMouseMove = (e) => {
        const { left, top, width, height } = containerRef.current.getBoundingClientRect();
        console.log(left, top, width, height );
        
        const x = e.pageX - left - window.scrollX;
        const y = e.pageY - top - window.scrollY;
        console.log(x,y);
        
        const xPercent = (x / width) * 100;
        const yPercent = (y / height) * 100;
        console.log(xPercent,yPercent);
        

        setZoomStyle({
            backgroundPosition: `${xPercent}% ${yPercent}%`,
            display: "block",
        });
    }
   

    const handleMouseEnter = () => setShowZoom(true);
    const handleMouseLeave = () => setShowZoom(false);
    return (
        <div className={styles.zoomContainer}>
            <div
                ref={containerRef}
                className={styles.imageContainer}
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <img src={src} alt="product" className={styles.image} />
            </div>

            {showZoom && (
                <div
                    className={styles.zoomedImage}
                    style={{
                        backgroundImage: `url(${src})`,
                        ...zoomStyle,
                    }}
                />
            )}
        </div>
    );
};

export default ImageZoom