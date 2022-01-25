import React, { useEffect, useState } from 'react';
import { Banner, Filter, Product } from '../../components'
import './index.css'

const Products = () => {
  const [products, setProducts] = useState([])
  const [category, setCategory] = useState()
  
  useEffect(() => {
    fetch('https://barbeshop-api.herokuapp.com/api/products/category/'+category).then(r => r.json())
    .then(function(response) {
      const data = response.data
      setProducts(data)
    })
  }, [category])

  useEffect(() => {
      fetch('https://barbeshop-api.herokuapp.com/api/products').then(r => r.json())
      .then(function(response) {
        const data = response.data
        setProducts(data)
      })
  }, [])
  
  return (
    <>
      <div className='container'>
        <Banner />
        <div className='filter'>
          <h2>Filter</h2>
          <Filter onChangeCategory={ category => setCategory(category) } />
        </div>
        <div className='products'>
          { products.map(product => {
              return <Product key={product.id} 
                image={product.photo}
                title={product.name}
                id={product.id} />
          }) }
        </div>
      </div>
    </>
  )
};

export default Products;
