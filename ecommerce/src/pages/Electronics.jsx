import React from 'react'
import Filter from '../components/Filter/Filter'
import ShowProduct from '../components/ShowProduct/ShowProduct'

const sampleElectronicProducts = [
  { id: 1, title: 'TV', Name: 'Men Plain shirt', price: '₹145 ', rating: '4.7 (210)', image: `https://i.pinimg.com/736x/6a/ea/87/6aea87622f0e83e1e5fbe756f27a5f99.jpg` },
  { id: 2, title: 'Phone', Name: 'Full seleves shirt', price: '₹920', rating: '4.5 (133)', image: `https://i.pinimg.com/736x/6a/ea/87/6aea87622f0e83e1e5fbe756f27a5f99.jpg` },
  { id: 3, title: 'Laptop', Name: 'Cotton shirt', price: '₹210', rating: '4.3 (98)', image: `https://i.pinimg.com/736x/6a/ea/87/6aea87622f0e83e1e5fbe756f27a5f99.jpg` },
  { id: 4, title: 'Headphone', Name: 'Printed shirt', price: '₹2220', rating: '4.6 (76)', image: `https://i.pinimg.com/736x/6a/ea/87/6aea87622f0e83e1e5fbe756f27a5f99.jpg` },
  { id: 5, title: 'AC', Name: 'Printed shirt', price: '₹2220', rating: '4.6 (76)', image: `https://i.pinimg.com/736x/6a/ea/87/6aea87622f0e83e1e5fbe756f27a5f99.jpg` },
  { id: 6, title: 'Laptop', Name: 'Printed shirt', price: '₹2220', rating: '4.6 (76)', image: `https://i.pinimg.com/736x/6a/ea/87/6aea87622f0e83e1e5fbe756f27a5f99.jpg` },
  { id: 7, title: 'Phone', Name: 'Printed shirt', price: '₹2220', rating: '4.6 (76)', image: `https://i.pinimg.com/736x/6a/ea/87/6aea87622f0e83e1e5fbe756f27a5f99.jpg` },
  { id: 8, title: 'Laptop', Name: 'Printed shirt', price: '₹2220', rating: '4.6 (76)', image: `https://i.pinimg.com/736x/6a/ea/87/6aea87622f0e83e1e5fbe756f27a5f99.jpg` },
  { id: 9, title: 'AC', Name: 'Printed shirt', price: '₹2220', rating: '4.6 (76)', image: `https://i.pinimg.com/736x/6a/ea/87/6aea87622f0e83e1e5fbe756f27a5f99.jpg` },
  { id: 4, title: 'Laptop', Name: 'Printed shirt', price: '₹2220', rating: '4.6 (76)', image: `https://i.pinimg.com/736x/6a/ea/87/6aea87622f0e83e1e5fbe756f27a5f99.jpg` },
  { id: 4, title: 'Phone', Name: 'Printed shirt', price: '₹2220', rating: '4.6 (76)', image: `https://i.pinimg.com/736x/6a/ea/87/6aea87622f0e83e1e5fbe756f27a5f99.jpg` },
  { id: 4, title: 'AC', Name: 'Printed shirt', price: '₹2220', rating: '4.6 (76)', image: `https://i.pinimg.com/736x/6a/ea/87/6aea87622f0e83e1e5fbe756f27a5f99.jpg` },
  { id: 4, title: 'Laptop', Name: 'Printed shirt', price: '₹2220', rating: '4.6 (76)', image: `https://i.pinimg.com/736x/6a/ea/87/6aea87622f0e83e1e5fbe756f27a5f99.jpg` },
  { id: 4, title: 'AC', Name: 'Printed shirt', price: '₹2220', rating: '4.6 (76)', image: `https://i.pinimg.com/736x/6a/ea/87/6aea87622f0e83e1e5fbe756f27a5f99.jpg` },
  { id: 4, title: 'Phone', Name: 'Printed shirt', price: '₹2220', rating: '4.6 (76)', image: `https://i.pinimg.com/736x/6a/ea/87/6aea87622f0e83e1e5fbe756f27a5f99.jpg` },
  { id: 4, title: 'Laptop', Name: 'Printed shirt', price: '₹2220', rating: '4.6 (76)', image: `https://i.pinimg.com/736x/6a/ea/87/6aea87622f0e83e1e5fbe756f27a5f99.jpg` },
  { id: 4, title: 'AC', Name: 'Printed shirt', price: '₹2220', rating: '4.6 (76)', image: `https://i.pinimg.com/736x/6a/ea/87/6aea87622f0e83e1e5fbe756f27a5f99.jpg` },
  { id: 4, title: 'Phone', Name: 'Printed shirt', price: '₹2220', rating: '4.6 (76)', image: `https://i.pinimg.com/736x/6a/ea/87/6aea87622f0e83e1e5fbe756f27a5f99.jpg` },

]

const Electronics = () => {
  return (
   <>
   <div style={{ display: "flex"}}>
    <Filter />
    <ShowProduct products={sampleElectronicProducts} />
   </div>
   </>
  )
}

export default Electronics