import React from 'react'
import { assets } from '../../assets/assets';
import style from './Category.module.css';
import { useNavigate } from 'react-router-dom';

const topCategories = [
   {name:"Fashion",img:(assets.fashion) ,pdt: '2.5M+ products', path:"/fashion"},
   {name : "Electronics",img:(assets.Electronics) ,pdt: '1.8M+ products', path:"/Electronics"},
   {name : "Home & Furniture",img:(assets.HomeandFurniture),pdt: '950K+ products', path:"/home-and-furniture"},
   {name : "Grocery", img:(assets.Grocery),pdt: '1.2M+ products', path:"/Grocery"},
   {name : "Books" , img:(assets.Books),pdt: '1.5M+ products', path:"/Books"},
   {name : "Jewellery",img:(assets.Jewellery),pdt: '2.1M+ products', path:"/jewellery"},
];

const Category = () => {

    const navigate = useNavigate();

  return (
    <div>
        <div className={style.container}>
            <h1>Source Category</h1>
            <p>Expolre millions of products cross diverse categories from verified indian suppliers</p>
            <div  className={style.outer}>
                {topCategories.map((item,index)=>{
                    return(
                        <div key={index} className={style.imgCont} onClick={() => navigate(item.path)} >
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