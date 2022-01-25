import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'

const Product = ({image, title, id}) => {
  return (
        <div className='product'>
            <div className='image'>
                <img src={`https://barbeshop-api.herokuapp.com/storage/${image}`} alt='thumb'/>
                <div className='overlay'>
                    <Link to={`/products/detail/${id}`}>{title}</Link>
                </div>
            </div>
        </div>
  )
};

export default Product;
