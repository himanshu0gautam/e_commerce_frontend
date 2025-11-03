import React from 'react'
import Filter from "../Filter/Filter.jsx"
import ShowProduct from '../ShowProduct/ShowProduct'
import styles from "./AllCategories.module.css"


const sampleProducts = [
  { id: 1, title: 'Addidas', Name: 'Men Plain shirt', price: '₹145 ', rating: '4.7 (210)', image: [`https://images.pexels.com/photos/6641218/pexels-photo-6641218.jpeg`,`https://images.pexels.com/photos/6567673/pexels-photo-6567673.jpeg`,`https://images.pexels.com/photos/15784429/pexels-photo-15784429.jpeg`] },
  { id: 2, title: 'Puma', Name: 'Full seleves shirt', price: '₹920', rating: '4.5 (133)', image: [`https://images.pexels.com/photos/6641218/pexels-photo-6641218.jpeg`,`https://images.pexels.com/photos/6567673/pexels-photo-6567673.jpeg`,`https://images.pexels.com/photos/15784429/pexels-photo-15784429.jpeg`] },
  { id: 3, title: 'WROGN', Name: 'Cotton shirt', price: '₹210', rating: '4.3 (98)', image: [`https://images.pexels.com/photos/6641218/pexels-photo-6641218.jpeg`,`https://images.pexels.com/photos/6567673/pexels-photo-6567673.jpeg`,`https://images.pexels.com/photos/15784429/pexels-photo-15784429.jpeg`] },
  { id: 4, title: 'HRX', Name: 'Printed shirt', price: '₹2220', rating: '4.6 (76)', image: [`https://images.pexels.com/photos/6641218/pexels-photo-6641218.jpeg`,`https://images.pexels.com/photos/6567673/pexels-photo-6567673.jpeg`,`https://images.pexels.com/photos/15784429/pexels-photo-15784429.jpeg`] },
  { id: 5, title: 'HRX', Name: 'Printed shirt', price: '₹2220', rating: '4.6 (76)', image: [`https://images.pexels.com/photos/6641218/pexels-photo-6641218.jpeg`,`https://images.pexels.com/photos/6567673/pexels-photo-6567673.jpeg`,`https://images.pexels.com/photos/15784429/pexels-photo-15784429.jpeg`] },
  { id: 6, title: 'HRX', Name: 'Printed shirt', price: '₹2220', rating: '4.6 (76)', image: [`https://images.pexels.com/photos/6641218/pexels-photo-6641218.jpeg`,`https://images.pexels.com/photos/6567673/pexels-photo-6567673.jpeg`,`https://images.pexels.com/photos/15784429/pexels-photo-15784429.jpeg`] },
  { id: 7, title: 'HRX', Name: 'Printed shirt', price: '₹2220', rating: '4.6 (76)', image: [`https://images.pexels.com/photos/6641218/pexels-photo-6641218.jpeg`,`https://images.pexels.com/photos/6567673/pexels-photo-6567673.jpeg`,`https://images.pexels.com/photos/15784429/pexels-photo-15784429.jpeg`] },
  { id: 8, title: 'HRX', Name: 'Printed shirt', price: '₹2220', rating: '4.6 (76)', image: [`https://images.pexels.com/photos/6641218/pexels-photo-6641218.jpeg`,`https://images.pexels.com/photos/6567673/pexels-photo-6567673.jpeg`,`https://images.pexels.com/photos/15784429/pexels-photo-15784429.jpeg`] },
  { id: 9, title: 'HRX', Name: 'Printed shirt', price: '₹2220', rating: '4.6 (76)', image: [`https://images.pexels.com/photos/6641218/pexels-photo-6641218.jpeg`,`https://images.pexels.com/photos/6567673/pexels-photo-6567673.jpeg`,`https://images.pexels.com/photos/15784429/pexels-photo-15784429.jpeg`] },
  { id: 4, title: 'HRX', Name: 'Printed shirt', price: '₹2220', rating: '4.6 (76)', image: [`https://images.pexels.com/photos/6641218/pexels-photo-6641218.jpeg`,`https://images.pexels.com/photos/6567673/pexels-photo-6567673.jpeg`,`https://images.pexels.com/photos/15784429/pexels-photo-15784429.jpeg`] },
  { id: 4, title: 'HRX', Name: 'Printed shirt', price: '₹2220', rating: '4.6 (76)', image: [`https://images.pexels.com/photos/6641218/pexels-photo-6641218.jpeg`,`https://images.pexels.com/photos/6567673/pexels-photo-6567673.jpeg`,`https://images.pexels.com/photos/15784429/pexels-photo-15784429.jpeg`] },
  { id: 4, title: 'HRX', Name: 'Printed shirt', price: '₹2220', rating: '4.6 (76)', image: [`https://images.pexels.com/photos/6641218/pexels-photo-6641218.jpeg`,`https://images.pexels.com/photos/6567673/pexels-photo-6567673.jpeg`,`https://images.pexels.com/photos/15784429/pexels-photo-15784429.jpeg`] },
  { id: 4, title: 'HRX', Name: 'Printed shirt', price: '₹2220', rating: '4.6 (76)', image: [`https://images.pexels.com/photos/6641218/pexels-photo-6641218.jpeg`,`https://images.pexels.com/photos/6567673/pexels-photo-6567673.jpeg`,`https://images.pexels.com/photos/15784429/pexels-photo-15784429.jpeg`] },
  { id: 4, title: 'HRX', Name: 'Printed shirt', price: '₹2220', rating: '4.6 (76)', image: [`https://images.pexels.com/photos/6641218/pexels-photo-6641218.jpeg`,`https://images.pexels.com/photos/6567673/pexels-photo-6567673.jpeg`,`https://images.pexels.com/photos/15784429/pexels-photo-15784429.jpeg`] },
  { id: 4, title: 'HRX', Name: 'Printed shirt', price: '₹2220', rating: '4.6 (76)', image: [`https://images.pexels.com/photos/6641218/pexels-photo-6641218.jpeg`,`https://images.pexels.com/photos/6567673/pexels-photo-6567673.jpeg`,`https://images.pexels.com/photos/15784429/pexels-photo-15784429.jpeg`] },
  { id: 4, title: 'HRX', Name: 'Printed shirt', price: '₹2220', rating: '4.6 (76)', image: [`https://images.pexels.com/photos/6641218/pexels-photo-6641218.jpeg`,`https://images.pexels.com/photos/6567673/pexels-photo-6567673.jpeg`,`https://images.pexels.com/photos/15784429/pexels-photo-15784429.jpeg`] },
  { id: 4, title: 'HRX', Name: 'Printed shirt', price: '₹2220', rating: '4.6 (76)', image: [`https://images.pexels.com/photos/6641218/pexels-photo-6641218.jpeg`,`https://images.pexels.com/photos/6567673/pexels-photo-6567673.jpeg`,`https://images.pexels.com/photos/15784429/pexels-photo-15784429.jpeg`] },
  { id: 4, title: 'HRX', Name: 'Printed shirt', price: '₹2220', rating: '4.6 (76)', image: [`https://images.pexels.com/photos/6641218/pexels-photo-6641218.jpeg`,`https://images.pexels.com/photos/6567673/pexels-photo-6567673.jpeg`,`https://images.pexels.com/photos/15784429/pexels-photo-15784429.jpeg`] },

]

const AllCategories = () => {

  return (
    <>
     <div className={styles.main}>
       <Filter />
      <ShowProduct products={sampleProducts} />
     </div>
    </>
  )
}

export default AllCategories