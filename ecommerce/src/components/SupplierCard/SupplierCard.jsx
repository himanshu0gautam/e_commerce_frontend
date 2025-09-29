import SupplierProfile from '../SupplierProfile/SupplierProfile'
import styles from './SupplierCard.module.css'
import { Link } from 'react-router-dom'
const SupplierCard = () => {

    const supplierProfile = [
    { id: 1, verfiy: "verified", bussinessName: "kaira jeweller pvt.ltd", city: "delhi", rating: "4.8", model: "jeweller", year: "15+ yr" },
    { id: 2, verfiy: "verified", bussinessName: "kaira jeweller pvt.ltd", city: "delhi", rating: "4.8", model: "jeweller", year: "15+ yr" },
    { id: 3, verfiy: "verified", bussinessName: "kaira jeweller pvt.ltd", city: "delhi", rating: "4.8", model: "jeweller", year: "15+ yr" },
    { id: 4, verfiy: "verified", bussinessName: "kaira jeweller pvt.ltd", city: "delhi", rating: "4.8", model: "jeweller", year: "15+ yr" },
    { id: 4, verfiy: "verified", bussinessName: "kaira jeweller pvt.ltd", city: "delhi", rating: "4.8", model: "jeweller", year: "15+ yr" },
    { id: 4, verfiy: "verified", bussinessName: "kaira jeweller pvt.ltd", city: "delhi", rating: "4.8", model: "jeweller", year: "15+ yr" },
    { id: 4, verfiy: "verified", bussinessName: "kaira jeweller pvt.ltd", city: "delhi", rating: "4.8", model: "jeweller", year: "15+ yr" },

]

  return (

        <>
        {supplierProfile.map(item => (
            <div key={item.id} className={styles.profileCard}>
                <div className={styles.profileTop}>
                    <img className={styles.supplierImg} src={`https://i.pinimg.com/1200x/6a/fc/5c/6afc5c43a5050054d7482202e3b75239.jpg`} alt={`${item.bussinessName}`} />
                    <div style={{flex:1}}>
                        <div className={styles.badges}>
                            <div className={styles.verified}>Verified</div>
                        </div>
                        
                    </div>
                </div>

                <div className={styles.ratingRow}>
                    <div className={styles.bussinessName}>{item.bussinessName}</div>
                <div className={styles.city}>{item.city}</div>
                <div className={styles.city}>{item.model}</div>
                <div className={styles.rating}>★ {item.rating}</div>
                    <div className={styles.meta} style={{color:'#6b7280'}}></div>
                </div>


                <div className={styles.metaList}>
                    <div>Response Rate: <strong>98%</strong></div>
                    <div>Response Time: <strong>&lt; 2 hours</strong></div>
                    <div>Years in Business: <strong>{item.year}</strong></div>
                </div>


                <div className={styles.actions}>
                    <button className={styles.contactBtn}>Contact Supplier</button>
                    <button className={styles.viewBtn}><Link to='/supplierprofile'>View Profile</Link></button>
                </div>
            </div>
        ))}
        </>

  )
}

export default SupplierCard