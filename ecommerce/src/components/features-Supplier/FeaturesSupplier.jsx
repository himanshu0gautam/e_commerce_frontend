import React from 'react'
import styles from "./FeaturesSupplier.module.css"
import {Link} from 'react-router-dom'
import SupplierCard from '../SupplierCard/SupplierCard'
const FeaturesSupplier = () => {
    return (
        <>
            <div className={styles.FeaturesSupplier}>
                <div className={styles.heading}>
                    <div className={styles.title}>Featured Suppliers</div>
                    <div className={styles.subtitle}>Connect with verified suppliers across India who deliver quality and reliability</div>
                </div>

                <SupplierCard/>

                    <div className={styles.supplierProfile}>
                <Link to="/suppliers" className={styles.MoreSupplier}>View all Supplier</Link>
                    </div>
            </div>
        </>
    )
}

export default FeaturesSupplier