import React from 'react'
import ShowProduct from '../components/ShowProduct/ShowProduct'
import Filter from '../components/Filter/Filter'

const sampleGroceryProducts = [
  { id: 1, title: 'Fruit', Name: 'Men Plain shirt', price: '₹145 ', rating: '4.7 (210)', image: `https://i.pinimg.com/736x/ba/3b/a5/ba3ba5322939bb8ebf8f46d1877f9f47.jpg` },
  { id: 2, title: 'Veg', Name: 'Full seleves shirt', price: '₹920', rating: '4.5 (133)', image: `https://i.pinimg.com/736x/ba/3b/a5/ba3ba5322939bb8ebf8f46d1877f9f47.jpg` },
  { id: 3, title: 'Dry Fruits', Name: 'Cotton shirt', price: '₹210', rating: '4.3 (98)', image: `https://i.pinimg.com/736x/ba/3b/a5/ba3ba5322939bb8ebf8f46d1877f9f47.jpg` },
  { id: 1, title: 'Fruit', Name: 'Men Plain shirt', price: '₹145 ', rating: '4.7 (210)', image: `https://i.pinimg.com/736x/ba/3b/a5/ba3ba5322939bb8ebf8f46d1877f9f47.jpg` },
  { id: 2, title: 'Veg', Name: 'Full seleves shirt', price: '₹920', rating: '4.5 (133)', image: `https://i.pinimg.com/736x/ba/3b/a5/ba3ba5322939bb8ebf8f46d1877f9f47.jpg` },
  { id: 3, title: 'Dry Fruits', Name: 'Cotton shirt', price: '₹210', rating: '4.3 (98)', image: `https://i.pinimg.com/736x/ba/3b/a5/ba3ba5322939bb8ebf8f46d1877f9f47.jpg` },
  { id: 1, title: 'Fruit', Name: 'Men Plain shirt', price: '₹145 ', rating: '4.7 (210)', image: `https://i.pinimg.com/736x/ba/3b/a5/ba3ba5322939bb8ebf8f46d1877f9f47.jpg` },
  { id: 2, title: 'Veg', Name: 'Full seleves shirt', price: '₹920', rating: '4.5 (133)', image: `https://i.pinimg.com/736x/ba/3b/a5/ba3ba5322939bb8ebf8f46d1877f9f47.jpg` },
  { id: 3, title: 'Dry Fruits', Name: 'Cotton shirt', price: '₹210', rating: '4.3 (98)', image: `https://i.pinimg.com/736x/ba/3b/a5/ba3ba5322939bb8ebf8f46d1877f9f47.jpg` },
  { id: 1, title: 'Fruit', Name: 'Men Plain shirt', price: '₹145 ', rating: '4.7 (210)', image: `https://i.pinimg.com/736x/ba/3b/a5/ba3ba5322939bb8ebf8f46d1877f9f47.jpg` },
  { id: 2, title: 'Veg', Name: 'Full seleves shirt', price: '₹920', rating: '4.5 (133)', image: `https://i.pinimg.com/736x/ba/3b/a5/ba3ba5322939bb8ebf8f46d1877f9f47.jpg` },
  { id: 3, title: 'Dry Fruits', Name: 'Cotton shirt', price: '₹210', rating: '4.3 (98)', image: `https://i.pinimg.com/736x/ba/3b/a5/ba3ba5322939bb8ebf8f46d1877f9f47.jpg` },
  { id: 1, title: 'Fruit', Name: 'Men Plain shirt', price: '₹145 ', rating: '4.7 (210)', image: `https://i.pinimg.com/736x/ba/3b/a5/ba3ba5322939bb8ebf8f46d1877f9f47.jpg` },
  { id: 2, title: 'Veg', Name: 'Full seleves shirt', price: '₹920', rating: '4.5 (133)', image: `https://i.pinimg.com/736x/ba/3b/a5/ba3ba5322939bb8ebf8f46d1877f9f47.jpg` },
  { id: 3, title: 'Dry Fruits', Name: 'Cotton shirt', price: '₹210', rating: '4.3 (98)', image: `https://i.pinimg.com/736x/ba/3b/a5/ba3ba5322939bb8ebf8f46d1877f9f47.jpg` },
  { id: 1, title: 'Fruit', Name: 'Men Plain shirt', price: '₹145 ', rating: '4.7 (210)', image: `https://i.pinimg.com/736x/ba/3b/a5/ba3ba5322939bb8ebf8f46d1877f9f47.jpg` },
  { id: 2, title: 'Veg', Name: 'Full seleves shirt', price: '₹920', rating: '4.5 (133)', image: `https://i.pinimg.com/736x/ba/3b/a5/ba3ba5322939bb8ebf8f46d1877f9f47.jpg` },
  { id: 3, title: 'Dry Fruits', Name: 'Cotton shirt', price: '₹210', rating: '4.3 (98)', image: `https://i.pinimg.com/736x/ba/3b/a5/ba3ba5322939bb8ebf8f46d1877f9f47.jpg` },


]

const Grocery = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <Filter />
        <ShowProduct products={sampleGroceryProducts} />
      </div>
    </>
  )
}

export default Grocery