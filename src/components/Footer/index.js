import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'

const Footer = () => {
  return (
      <div className='footer'>
          <div className='footer_main'>
            <div className='footer_about'>
                <h1>Babershop</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis, explicabo. Totam possimus laudantium mollitia aliquam</p>
            </div>
            <div className='footer_nav'>
                <Link to='/'>Home</Link>
                <Link to='/products'>Products</Link>
                <a href='https://www.instagram.com/firmansyahken'>Contact</a>
            </div>
          </div>
      </div>
  )
};

export default Footer;
