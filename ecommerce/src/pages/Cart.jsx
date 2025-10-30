<<<<<<< HEAD
import {React,useState} from 'react'
import styles from '../PagesStyles/Cart.module.css'
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom'; 
const cart = []     
const Cart = () => {
    const [cartItems, setCartItems] = useState(cart);
    const navigate = useNavigate();
  return (
    <div className={styles.CartContainer}>
        {cartItems.length === 0 ? (
            <div className={styles.EmptyCartContainer}>
                <img src={assets.EmptyCartIcon} className={styles.EmptyCartIcon} alt="Empty Cart"/>
                <p className={styles.head}>Missing Cart items?</p>
                <p className={styles.para}>Login to see the items you added previously</p>
                <button  onClick={() => navigate("/auth/login")} className={styles.ButtonContainer}>Login</button>
            </div>
        ) : (<h2> {cartItems.length}</h2>  )   }
=======
import React from 'react'

const Cart = () => {
  return (
    <div>
        Cart
>>>>>>> f95e76a32149e495923b9cce0035a0020932d486
    </div>
  )
}

export default Cart