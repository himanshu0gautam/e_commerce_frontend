import React from 'react'
import { assets } from '../../assets/assets';
import style from './Category.module.css';
const Category = () => {

const topCategories = [
   {name:"Fashion",img:(assets.fashion) ,pdt: '2.5M+ products'},
   {name : "Electronics",img:(assets.Electronics) ,pdt: '1.8M+ products'},
   {name : "Home & Furniture",img:(assets.HomeandFurniture),pdt: '950K+ products'},
   {name : "Grocery", img:(assets.Grocery),pdt: '1.2M+ products'},
   {name : "Books" , img:(assets.Books),pdt: '1.5M+ products'},
   {name : "Jewellery",img:(assets.Jewellery),pdt: '2.1M+ products'},
];
  return (
    <div>
        <div className={style.container}>
            <h1>Source Category</h1>
            <p>Expolre millions of products cross diverse categories from verified indian suppliers</p>
            <div  className={style.outer}>
                {topCategories.map((item,index)=>{
                    return(
                        <div key={index} className={style.imgCont}  >
                            <img src={item.img} alt={item.name} className={style.imgConatiner} />
                            <p>{item.name}</p>
                            <span>{item.pdt}</span>
                
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Category