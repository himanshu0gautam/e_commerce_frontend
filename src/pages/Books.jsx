import React from 'react'
import Filter from '../components/Filter/Filter'
import ShowProduct from '../components/ShowProduct/ShowProduct'

const sampleBookProducts = [
  { id: 1, title: 'Addidas', Name: 'Men Plain shirt', price: '₹145 ', rating: '4.7 (210)', image: `https://i.pinimg.com/1200x/3e/67/03/3e67035af0521bb6f5813a9e602e4b29.jpg` },
  { id: 2, title: 'Puma', Name: 'Full seleves shirt', price: '₹920', rating: '4.5 (133)', image: `https://i.pinimg.com/1200x/3e/67/03/3e67035af0521bb6f5813a9e602e4b29.jpg` },
  { id: 3, title: 'WROGN', Name: 'Cotton shirt', price: '₹210', rating: '4.3 (98)', image: `https://i.pinimg.com/1200x/3e/67/03/3e67035af0521bb6f5813a9e602e4b29.jpg` },
  { id: 4, title: 'HRX', Name: 'Printed shirt', price: '₹2220', rating: '4.6 (76)', image: `https://i.pinimg.com/1200x/3e/67/03/3e67035af0521bb6f5813a9e602e4b29.jpg` },
  { id: 5, title: 'HRX', Name: 'Printed shirt', price: '₹2220', rating: '4.6 (76)', image: `https://i.pinimg.com/1200x/3e/67/03/3e67035af0521bb6f5813a9e602e4b29.jpg` },
  { id: 6, title: 'HRX', Name: 'Printed shirt', price: '₹2220', rating: '4.6 (76)', image: `https://i.pinimg.com/1200x/3e/67/03/3e67035af0521bb6f5813a9e602e4b29.jpg` },
  { id: 7, title: 'HRX', Name: 'Printed shirt', price: '₹2220', rating: '4.6 (76)', image: `https://i.pinimg.com/1200x/3e/67/03/3e67035af0521bb6f5813a9e602e4b29.jpg` },
  { id: 8, title: 'HRX', Name: 'Printed shirt', price: '₹2220', rating: '4.6 (76)', image: `https://i.pinimg.com/1200x/3e/67/03/3e67035af0521bb6f5813a9e602e4b29.jpg` },
  { id: 9, title: 'HRX', Name: 'Printed shirt', price: '₹2220', rating: '4.6 (76)', image: `https://i.pinimg.com/1200x/3e/67/03/3e67035af0521bb6f5813a9e602e4b29.jpg` },
  { id: 4, title: 'HRX', Name: 'Printed shirt', price: '₹2220', rating: '4.6 (76)', image: `https://i.pinimg.com/1200x/3e/67/03/3e67035af0521bb6f5813a9e602e4b29.jpg` },
  { id: 4, title: 'HRX', Name: 'Printed shirt', price: '₹2220', rating: '4.6 (76)', image: `https://i.pinimg.com/1200x/3e/67/03/3e67035af0521bb6f5813a9e602e4b29.jpg` },
  { id: 4, title: 'HRX', Name: 'Printed shirt', price: '₹2220', rating: '4.6 (76)', image: `https://i.pinimg.com/1200x/3e/67/03/3e67035af0521bb6f5813a9e602e4b29.jpg` },
  { id: 4, title: 'HRX', Name: 'Printed shirt', price: '₹2220', rating: '4.6 (76)', image: `https://i.pinimg.com/1200x/3e/67/03/3e67035af0521bb6f5813a9e602e4b29.jpg` },
  { id: 4, title: 'HRX', Name: 'Printed shirt', price: '₹2220', rating: '4.6 (76)', image: `https://i.pinimg.com/1200x/3e/67/03/3e67035af0521bb6f5813a9e602e4b29.jpg` },
  { id: 4, title: 'HRX', Name: 'Printed shirt', price: '₹2220', rating: '4.6 (76)', image: `https://i.pinimg.com/1200x/3e/67/03/3e67035af0521bb6f5813a9e602e4b29.jpg` },
  { id: 4, title: 'HRX', Name: 'Printed shirt', price: '₹2220', rating: '4.6 (76)', image: `https://i.pinimg.com/1200x/3e/67/03/3e67035af0521bb6f5813a9e602e4b29.jpg` },
  { id: 4, title: 'HRX', Name: 'Printed shirt', price: '₹2220', rating: '4.6 (76)', image: `https://i.pinimg.com/1200x/3e/67/03/3e67035af0521bb6f5813a9e602e4b29.jpg` },
  { id: 4, title: 'HRX', Name: 'Printed shirt', price: '₹2220', rating: '4.6 (76)', image: `https://i.pinimg.com/1200x/3e/67/03/3e67035af0521bb6f5813a9e602e4b29.jpg` },

]

const Books = () => {
  return (
    <div style={{ display: "flex"}}>
       <Filter />
      <ShowProduct products={sampleBookProducts} />
     </div>
  )
}

export default Books