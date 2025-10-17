import React from 'react'
import styles from "./PopularProduct.module.css"

const popularProduct = [
   {name:"premium cotton fabric",rate: "120-180", supplierName: "rajesh textile", city: "delhi", rating: "4.8", image: "https://i.pinimg.com/1200x/7c/2c/c2/7c2cc2d46f49b1b536c69b7b42c69539.jpg"},
   {name:"premium cotton fabric",rate: "120-180", supplierName: "rajesh textile", city: "delhi", rating: "4.8", image: "https://i.pinimg.com/1200x/04/56/68/04566800964a3e8d5d2a505beaf23f1b.jpg"},
   {name:"premium cotton fabric",rate: "120-180", supplierName: "rajesh textile", city: "delhi", rating: "4.8", image: "https://i.pinimg.com/736x/5e/7c/ad/5e7cadd1f5f30ca0c12c417434425272.jpg"},
   {name:"premium cotton fabric",rate: "120-180", supplierName: "rajesh textile", city: "delhi", rating: "4.8", image: "https://i.pinimg.com/1200x/1e/67/2b/1e672b0d0caf2af8bcd96cccc0aa67a7.jpg"},
   {name:"premium cotton fabric",rate: "120-180", supplierName: "rajesh textile", city: "delhi", rating: "4.8", image: "https://i.pinimg.com/1200x/7c/2c/c2/7c2cc2d46f49b1b536c69b7b42c69539.jpg"},
   {name:"premium cotton fabric",rate: "120-180", supplierName: "rajesh textile", city: "delhi", rating: "4.8", image: "https://i.pinimg.com/1200x/7c/2c/c2/7c2cc2d46f49b1b536c69b7b42c69539.jpg"},
];

const PopularProduct = () => {
  return (
   <>
   <div className={styles.mainpopular}>

    <div className={styles.headingPopular}>
    <h2>Popular Product </h2>
    <button>View All Product </button>
    </div>
    <p className={styles.heading}>Trending Product from verfied Supplier with competitive Pricing</p>

     <div  className={styles.Product}>
                    {popularProduct.map((item,index)=>{
                        return(
                            <div key={index} className={styles.imgCont}  >
                                <img src={item.image} alt="" className={styles.imgConatiner} />
                                <h4>{item.name}</h4>
                                <p>{item.rate}</p>
                                <div>
                                  <h6>{item.supplierName}</h6>
                                <p>{item.city}</p>
                                <p>{item.rating}</p>
                                </div>

                            </div>
                        )
                    })}
                </div>
   </div>
   </>
  )
}

export default PopularProduct