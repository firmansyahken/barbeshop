import React from 'react';
import { BannerImage } from '../../assets';
import './index.css'

const Banner = () => {
  return (
        <div className='banner'>
            <div className='banner_content'>
                <h2>Produk Kerajinan  Barang Bekas</h2>
                <p>Gerakan untuk mengurangi dan memanfaatkan limbah sekitar</p>
            </div>
            <div className='banner_image'>
                <img src={BannerImage} alt='banner' />
            </div>
        </div>
  )
};

export default Banner;
