import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Product } from '../../components';

const Search = () => {
    const params = useParams()
    const keyword = params.keyword

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://barbeshop-api.herokuapp.com/api/products/search/' + keyword).then(r => r.json())
            .then(function (response) {
                const data = response.data
                setProducts(data)
            })
    }, [keyword])
    return (
        <>
            <div className='container'>
                <h2>Hasil Penelusuran: </h2>
                <div className='products'>
                    {products.map(product => {
                        return <Product key={product.id}
                            image={product.photo}
                            title={product.name}
                            id={product.id} />
                    })}
                </div>
            </div>
        </>
    );
};

export default Search;
