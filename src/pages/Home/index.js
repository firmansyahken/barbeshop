import React, { useEffect, useState } from 'react';
import { Banner, Card, Product } from '../../components';
import { DiamondIcon, FlashIcon, HeroImage } from '../../assets'
import './index.css'
import { Link } from 'react-router-dom';

const Home = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://barbeshop-api.herokuapp.com/api/products/new').then(r => r.json())
        .then(function(response) {
            const data = response.data
            setProducts(data)
        })
    }, [])

    return (
      <>
        <div className='container'>
            <div className='hero'>
                <div className='hero_main'>
                    <div className='hero_image'>
                        <img src={HeroImage} alt='hero'/>
                    </div>
                    <div className='hero_content'>
                        <h1>Online Store Kelompok Satu</h1>
                    </div>
                </div>
            </div>
            <div className='why'>
                <Card image={DiamondIcon} 
                    title="Kualitas Terjamin"
                    desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic veniam voluptatem deleniti voluptate."
                    />
                <Card image={FlashIcon} 
                    title="Respon Cepat"
                    desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic veniam voluptatem deleniti voluptate."
                    />
            </div>
            <div className='products'>
                { products.map(product => {
                    return <Product key={product.id} 
                        image={product.photo}
                        title={product.name}
                        id={product.id} />
                }) }
            </div>
            <Banner />
        </div>
      </>
  );
};

export default Home;
