import React from 'react'
import Filter from '../components/Filter/Filter'
import ShowProduct from '../components/ShowProduct/ShowProduct'

const sampleFurnitureProducts = [
  { id: 1, title: 'Sofa', Name: 'Men Plain shirt', price: '₹145 ', rating: '4.7 (210)', image: `https://i.pinimg.com/1200x/a9/72/f2/a972f2f8eb646d2c28c508f2f15c5944.jpg` },
  { id: 2, title: 'Chair', Name: 'Full seleves shirt', price: '₹920', rating: '4.5 (133)', image: `https://i.pinimg.com/1200x/a9/72/f2/a972f2f8eb646d2c28c508f2f15c5944.jpg` },
  { id: 3, title: 'Table', Name: 'Cotton shirt', price: '₹210', rating: '4.3 (98)', image: `https://i.pinimg.com/1200x/a9/72/f2/a972f2f8eb646d2c28c508f2f15c5944.jpg` },
  { id: 4, title: 'Sofa', Name: 'Printed shirt', price: '₹2220', rating: '4.6 (76)', image: `https://i.pinimg.com/1200x/a9/72/f2/a972f2f8eb646d2c28c508f2f15c5944.jpg` },
  { id: 5, title: 'Chair', Name: 'Printed shirt', price: '₹2220', rating: '4.6 (76)', image: `https://i.pinimg.com/1200x/a9/72/f2/a972f2f8eb646d2c28c508f2f15c5944.jpg` },
  { id: 6, title: 'Table', Name: 'Printed shirt', price: '₹2220', rating: '4.6 (76)', image: `https://i.pinimg.com/1200x/a9/72/f2/a972f2f8eb646d2c28c508f2f15c5944.jpg` },
  { id: 7, title: 'Sofa', Name: 'Printed shirt', price: '₹2220', rating: '4.6 (76)', image: `https://i.pinimg.com/1200x/a9/72/f2/a972f2f8eb646d2c28c508f2f15c5944.jpg` },
  { id: 8, title: 'Chair', Name: 'Printed shirt', price: '₹2220', rating: '4.6 (76)', image: `https://i.pinimg.com/1200x/a9/72/f2/a972f2f8eb646d2c28c508f2f15c5944.jpg` },
  { id: 9, title: 'Table', Name: 'Printed shirt', price: '₹2220', rating: '4.6 (76)', image: `https://i.pinimg.com/1200x/a9/72/f2/a972f2f8eb646d2c28c508f2f15c5944.jpg` },
  { id: 4, title: 'Sofa', Name: 'Printed shirt', price: '₹2220', rating: '4.6 (76)', image: `https://i.pinimg.com/1200x/a9/72/f2/a972f2f8eb646d2c28c508f2f15c5944.jpg` },
  { id: 4, title: 'Chair', Name: 'Printed shirt', price: '₹2220', rating: '4.6 (76)', image: `https://i.pinimg.com/1200x/a9/72/f2/a972f2f8eb646d2c28c508f2f15c5944.jpg` },
  { id: 4, title: 'Table', Name: 'Printed shirt', price: '₹2220', rating: '4.6 (76)', image: `https://i.pinimg.com/1200x/a9/72/f2/a972f2f8eb646d2c28c508f2f15c5944.jpg` },
  { id: 4, title: 'Sofa', Name: 'Printed shirt', price: '₹2220', rating: '4.6 (76)', image: `https://i.pinimg.com/1200x/a9/72/f2/a972f2f8eb646d2c28c508f2f15c5944.jpg` },
  { id: 4, title: 'Chair', Name: 'Printed shirt', price: '₹2220', rating: '4.6 (76)', image: `https://i.pinimg.com/1200x/a9/72/f2/a972f2f8eb646d2c28c508f2f15c5944.jpg` },
  { id: 4, title: 'Table', Name: 'Printed shirt', price: '₹2220', rating: '4.6 (76)', image: `https://i.pinimg.com/1200x/a9/72/f2/a972f2f8eb646d2c28c508f2f15c5944.jpg` },
  { id: 4, title: 'Sofa', Name: 'Printed shirt', price: '₹2220', rating: '4.6 (76)', image: `https://i.pinimg.com/1200x/a9/72/f2/a972f2f8eb646d2c28c508f2f15c5944.jpg` },
  { id: 4, title: 'Chair', Name: 'Printed shirt', price: '₹2220', rating: '4.6 (76)', image: `https://i.pinimg.com/1200x/a9/72/f2/a972f2f8eb646d2c28c508f2f15c5944.jpg` },
  { id: 4, title: 'Table', Name: 'Printed shirt', price: '₹2220', rating: '4.6 (76)', image: `https://i.pinimg.com/1200x/a9/72/f2/a972f2f8eb646d2c28c508f2f15c5944.jpg` },

]

const HomeAndFurniture = () => {
  return (
   <>
   <div style={{ display: "flex"}}>
    <Filter />
    <ShowProduct products={sampleFurnitureProducts} />
   </div>
   </>
  )
}

export default HomeAndFurniture